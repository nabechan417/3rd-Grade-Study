// ========== 国語アプリ メインロジック ==========

const KokugoApp = (() => {
  let _user     = null;
  let _username = '';
  let _progress = [];

  // 3年生国語の unit_id は 4001〜4014
  const UNIT_OFFSET = 4000;

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

  // -------- ホーム画面 --------
  function renderHome() {
    const stars = _progress
      .filter(p => p.unit_id >= UNIT_OFFSET + 1 && p.unit_id <= UNIT_OFFSET + 14)
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

    // 単元の解放状態を進捗から判定する（前の単元のテストまたは練習が完了していれば解放）
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
      { id: 1,  name: '漢字（自然・場所・気持ち）',  icon: '漢', color: 'green',  hasContent: true  },
      { id: 2,  name: 'きつつきの商売（音読）',       icon: '🐦', color: 'orange', hasContent: true  },
      { id: 3,  name: 'こまを楽しむ（説明文）',       icon: '🌀', color: 'mint',   hasContent: false },
      { id: 4,  name: '国語辞典を使おう',             icon: '📚', color: 'purple', hasContent: false },
      { id: 5,  name: '気持ちをこめて（手紙）',       icon: '✉️', color: 'green',  hasContent: false },
      { id: 6,  name: 'はじめて知ったことを知らせよう', icon: '📝', color: 'orange', hasContent: false },
      { id: 7,  name: 'ローマ字',                    icon: '🔤', color: 'mint',   hasContent: false },
      { id: 8,  name: 'ちいちゃんのかげおくり',       icon: '☀️', color: 'purple', hasContent: false },
      { id: 9,  name: '詩を楽しもう',                icon: '🎵', color: 'green',  hasContent: false },
      { id: 10, name: 'すがたをかえる大豆（説明文）', icon: '🫘', color: 'orange', hasContent: false },
      { id: 11, name: '食べ物のひみつ（報告文）',    icon: '🍱', color: 'mint',   hasContent: false },
      { id: 12, name: '三年とうげ（物語）',          icon: '🏔️', color: 'purple', hasContent: false },
      { id: 13, name: 'モチモチの木（物語）',        icon: '🌳', color: 'green',  hasContent: false },
      { id: 14, name: 'ことわざ・慣用句',           icon: '💬', color: 'orange', hasContent: false },
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
          <div class="unit-icon ${u.color}" style="font-size:${u.icon.length === 1 && /\p{Script=Han}/u.test(u.icon) ? '1.4rem' : '1.8rem'}">${u.icon}</div>
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

  // -------- 単元を開く --------
  function openUnit(unitId) {
    if (unitId === 1) KokugoUnit1.resetLesson();
    if (unitId === 2) KokugoUnit2.resetLesson();

    showPage('unit');

    const unitTitles = {
      1: '単元1：漢字（自然・場所・気持ち）',
      2: '単元2：きつつきの商売（音読）',
    };
    document.querySelector('.unit-header-title').textContent =
      unitTitles[unitId] || `単元${unitId}`;
    document.querySelector('.unit-header-sub').textContent = '光村図書「国語 三 上／下」';

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
      KokugoUnit1.renderExplanation();
      KokugoUnit1.startPractice(async ({ score, maxScore, stars }) => {
        if (_user) {
          await Progress.save({
            userId: _user.id, unitId: UNIT_OFFSET + 1,
            lessonType: 'practice', completed: true, score, maxScore, stars,
          });
          _progress = await Progress.getAll(_user.id);
        }
      });
      KokugoUnit1.startTest(async ({ score, maxScore, stars }) => {
        if (_user) {
          await Progress.save({
            userId: _user.id, unitId: UNIT_OFFSET + 1,
            lessonType: 'test', completed: true, score, maxScore, stars,
          });
          _progress = await Progress.getAll(_user.id);
        }
      });
    }

    if (unitId === 2) {
      KokugoUnit2.renderExplanation();
      KokugoUnit2.startPractice(async ({ score, maxScore, stars }) => {
        if (_user) {
          await Progress.save({
            userId: _user.id, unitId: UNIT_OFFSET + 2,
            lessonType: 'practice', completed: true, score, maxScore, stars,
          });
          _progress = await Progress.getAll(_user.id);
        }
      });
      KokugoUnit2.startTest(async ({ score, maxScore, stars }) => {
        if (_user) {
          await Progress.save({
            userId: _user.id, unitId: UNIT_OFFSET + 2,
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

document.addEventListener('DOMContentLoaded', () => KokugoApp.init());
