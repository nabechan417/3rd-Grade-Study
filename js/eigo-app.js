// ========== 英語アプリ メインロジック ==========

const EigoApp = (() => {
  let _user     = null;
  let _username = '';
  let _progress = [];

  // 3年生英語の unit_id は 7001〜7009
  const UNIT_OFFSET = 7000;

  function showPage(name) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const page = document.getElementById(`page-${name}`);
    if (page) page.classList.add('active');
  }

  function setLoading(show) {
    const el = document.getElementById('loading-overlay');
    if (show) el.classList.add('show');
    else       el.classList.remove('show');
  }

  async function init() {
    setLoading(true);
    Auth.initTabs();
    Auth.initForm(async (user) => { await afterLogin(user); });

    document.getElementById('btn-logout')?.addEventListener('click', async () => {
      await Auth.logout();
      _user = null; _username = ''; _progress = [];
      showPage('auth');
    });

    const user = await Auth.getUser();
    if (user) await afterLogin(user);
    else       showPage('auth');

    setLoading(false);
  }

  async function afterLogin(user) {
    _user     = user;
    _username = await Auth.getUsername(user.id);
    _progress = await Progress.getAll(user.id);

    const el = document.getElementById('header-username');
    if (el) el.textContent = `${_username} さん`;
    const el2 = document.getElementById('header-username2');
    if (el2) el2.textContent = `${_username} さん`;

    renderHome();
    showPage('home');
  }

  function renderHome() {
    const stars = _progress
      .filter(p => p.unit_id >= UNIT_OFFSET + 1 && p.unit_id <= UNIT_OFFSET + 9)
      .reduce((s, p) => s + (p.stars || 0), 0);

    const starsBar = document.getElementById('home-stars-bar');
    if (starsBar) {
      const filled = Math.min(stars, 10);
      starsBar.textContent = '⭐'.repeat(filled) + '☆'.repeat(Math.max(0, 5 - filled));
    }

    const welcomeEl = document.getElementById('home-welcome');
    if (welcomeEl) welcomeEl.textContent = `${_username} さん、こんにちは！`;

    const listEl = document.getElementById('unit-list');
    if (!listEl) return;

    function isUnitUnlocked(unitNum) {
      if (unitNum === 1) return true;
      const prevUnitId = UNIT_OFFSET + (unitNum - 1);
      return _progress.some(p =>
        p.unit_id === prevUnitId &&
        (p.lesson_type === 'test' || p.lesson_type === 'practice') &&
        p.completed
      );
    }

    const UNITS = [
      { id: 1, name: 'Hello! あいさつをしよう',              icon: '👋', color: 'green',  hasContent: true  },
      { id: 2, name: 'How are you? きもちを伝えよう',        icon: '😊', color: 'purple', hasContent: false },
      { id: 3, name: 'How many? かずで遊ぼう',               icon: '🔢', color: 'orange', hasContent: false },
      { id: 4, name: 'I like blue. すきな色を伝えよう',      icon: '🎨', color: 'mint',   hasContent: false },
      { id: 5, name: 'What do you like? 何がすき？',         icon: '❤️', color: 'purple', hasContent: false },
      { id: 6, name: "What's this? これなあに？",            icon: '❓', color: 'green',  hasContent: false },
      { id: 7, name: 'This is for you. 形を組み合わせよう',  icon: '🎁', color: 'orange', hasContent: false },
      { id: 8, name: 'Who are you? キャラクターになりきろう', icon: '🎭', color: 'mint',   hasContent: false },
      { id: 9, name: 'This is my day. ある一日を話そう',     icon: '📅', color: 'purple', hasContent: false },
    ].map(u => ({ ...u, available: isUnitUnlocked(u.id) }));

    listEl.innerHTML = UNITS.map(u => {
      const unitId = UNIT_OFFSET + u.id;
      const pct = Progress.unitProgress(_progress, unitId);
      const starsForUnit = _progress
        .filter(p => p.unit_id === unitId)
        .reduce((s, p) => s + (p.stars || 0), 0);
      const starStr = '⭐'.repeat(starsForUnit) + '☆'.repeat(Math.max(0, 3 - starsForUnit));

      return `
        <div class="unit-card ${u.available ? '' : 'locked'}"
             data-unit="${u.id}" style="${u.available ? 'cursor:pointer' : ''}">
          <div class="unit-icon ${u.color}">${u.icon}</div>
          <div class="unit-info">
            <div class="unit-number">Unit ${u.id}</div>
            <div class="unit-name">${u.name}</div>
            <div class="unit-progress-bar">
              <div class="unit-progress-fill" style="width:${pct}%"></div>
            </div>
          </div>
          <div class="unit-stars">${u.available ? starStr : '🔒'}</div>
          ${u.id === 1 && pct === 0 ? '<div class="unit-badge-new">NEW</div>' : ''}
        </div>
      `;
    }).join('');

    listEl.querySelectorAll('.unit-card:not(.locked)').forEach(card => {
      card.addEventListener('click', () => {
        const unitId = parseInt(card.dataset.unit);
        const unit = UNITS.find(u => u.id === unitId);
        if (unit?.hasContent) {
          openUnit(unitId);
        } else {
          alert('This unit is coming soon! もうすこし待ってね😊');
        }
      });
    });
  }

  function openUnit(unitId) {
    if (unitId === 1) EigoUnit1.resetLesson();

    showPage('unit');

    document.querySelector('.unit-header-title').textContent =
      unitId === 1 ? 'Unit 1：Hello! あいさつをしよう' : `Unit ${unitId}`;
    document.querySelector('.unit-header-sub').textContent = '文部科学省「Let\'s Try! 1」';

    const tabs = document.querySelectorAll('.unit-tab');
    tabs.forEach((tab, i) => {
      tab.classList.toggle('active', i === 0);
      tab.onclick = () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        document.querySelectorAll('.unit-tab-content').forEach(c => c.classList.remove('active'));
        document.getElementById(tab.dataset.target)?.classList.add('active');
      };
    });
    document.querySelectorAll('.unit-tab-content').forEach((c, i) => {
      c.classList.toggle('active', i === 0);
    });

    const backBtn = document.getElementById('btn-back-home');
    backBtn.onclick = () => { showPage('home'); renderHome(); };

    if (unitId === 1) {
      EigoUnit1.renderExplanation();
      EigoUnit1.startPractice(async ({ score, maxScore, stars }) => {
        if (_user) {
          await Progress.save({
            userId: _user.id, unitId: UNIT_OFFSET + 1,
            lessonType: 'practice', completed: true, score, maxScore, stars,
          });
          _progress = await Progress.getAll(_user.id);
        }
      });
      EigoUnit1.startTest(async ({ score, maxScore, stars }) => {
        if (_user) {
          await Progress.save({
            userId: _user.id, unitId: UNIT_OFFSET + 1,
            lessonType: 'test', completed: true, score, maxScore, stars,
          });
          _progress = await Progress.getAll(_user.id);
        }
      });
    }
  }

  async function saveExplanationDone(unitNum) {
    if (_user) {
      await Progress.save({
        userId: _user.id, unitId: UNIT_OFFSET + unitNum,
        lessonType: 'explanation', completed: true, score: 1, maxScore: 1, stars: 1,
      });
      _progress = await Progress.getAll(_user.id);
    }
  }

  return { init, showPage, renderHome, saveExplanationDone };
})();

document.addEventListener('DOMContentLoaded', () => EigoApp.init());
