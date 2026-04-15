// ========== 理科アプリ メインロジック ==========

const RikaApp = (() => {
  let _user     = null;
  let _username = '';
  let _progress = [];

  // 3年生理科の unit_id は 5001〜5012
  const UNIT_OFFSET = 5000;

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
      .filter(p => p.unit_id >= UNIT_OFFSET + 1 && p.unit_id <= UNIT_OFFSET + 12)
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
      { id: 1,  name: '植物を育てよう（ホウセンカ・ヒマワリ）', icon: '🌱', color: 'green',  hasContent: true  },
      { id: 2,  name: 'こんちゅうのかんさつ',                  icon: '🐛', color: 'orange', hasContent: false },
      { id: 3,  name: '風のはたらき',                          icon: '💨', color: 'mint',   hasContent: false },
      { id: 4,  name: '太陽の光',                              icon: '☀️', color: 'orange', hasContent: false },
      { id: 5,  name: '植物の体のつくり',                      icon: '🌿', color: 'green',  hasContent: false },
      { id: 6,  name: '地面のようすと太陽',                    icon: '🌍', color: 'purple', hasContent: false },
      { id: 7,  name: '太陽のうごきと日なた・日かげ',          icon: '🌤️', color: 'orange', hasContent: false },
      { id: 8,  name: '光とかがみ',                           icon: '🪞', color: 'mint',   hasContent: false },
      { id: 9,  name: '秋のしぜん',                           icon: '🍂', color: 'orange', hasContent: false },
      { id: 10, name: '電気のはたらき',                        icon: '⚡', color: 'purple', hasContent: false },
      { id: 11, name: '磁石（じしゃく）のひみつ',              icon: '🧲', color: 'mint',   hasContent: false },
      { id: 12, name: '物と重さ',                             icon: '⚖️', color: 'green',  hasContent: false },
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
            <div class="unit-number">単元 ${u.id}</div>
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
          alert('この単元はただいま準備中です！もうすこし待ってね😊');
        }
      });
    });
  }

  function openUnit(unitId) {
    if (unitId === 1) RikaUnit1.resetLesson();

    showPage('unit');

    document.querySelector('.unit-header-title').textContent =
      unitId === 1 ? '単元1：植物を育てよう' : `単元${unitId}`;
    document.querySelector('.unit-header-sub').textContent = '大日本図書「たのしい理科3」';

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
      RikaUnit1.renderExplanation();
      RikaUnit1.startPractice(async ({ score, maxScore, stars }) => {
        if (_user) {
          await Progress.save({
            userId: _user.id, unitId: UNIT_OFFSET + 1,
            lessonType: 'practice', completed: true, score, maxScore, stars,
          });
          _progress = await Progress.getAll(_user.id);
        }
      });
      RikaUnit1.startTest(async ({ score, maxScore, stars }) => {
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

document.addEventListener('DOMContentLoaded', () => RikaApp.init());
