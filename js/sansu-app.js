// ========== 算数アプリ メインロジック ==========

const SansuApp = (() => {
  let _user     = null;
  let _username = '';
  let _progress = [];

  // 3年生算数の unit_id は 3001〜3014
  const UNIT_OFFSET = 3000;

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

    const UNITS = [
      { id: 1, name: 'かけ算（2・3けた × 1けた）', icon: '✖️', color: 'green',  available: true  },
      { id: 2, name: 'わり算',                     icon: '➗', color: 'orange', available: false },
      { id: 3, name: 'たし算とひき算',              icon: '➕', color: 'mint',   available: false },
      { id: 4, name: '大きい数',                   icon: '🔢', color: 'purple', available: false },
      { id: 5, name: '時こくと時間',               icon: '⏰', color: 'green',  available: false },
      { id: 6, name: 'あまりのあるわり算',         icon: '🍕', color: 'orange', available: false },
      { id: 7, name: '長さ（km）',                icon: '📏', color: 'mint',   available: false },
      { id: 8, name: 'かけ算の筆算（2けた×2けた）', icon: '📝', color: 'purple', available: false },
      { id: 9, name: '重さ',                      icon: '⚖️', color: 'green',  available: false },
      { id: 10, name: '分数',                     icon: '½',  color: 'orange', available: false },
      { id: 11, name: '小数',                     icon: '🔸', color: 'mint',   available: false },
      { id: 12, name: '□を使った式',              icon: '📦', color: 'purple', available: false },
      { id: 13, name: '三角形',                   icon: '📐', color: 'green',  available: false },
      { id: 14, name: 'ぼうグラフと表',           icon: '📊', color: 'orange', available: false },
    ];

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
        if (unitId === 1) openUnit(1);
      });
    });
  }

  // -------- 単元を開く --------
  function openUnit(unitId) {
    if (unitId === 1) SansuUnit1.resetLesson();

    showPage('unit');

    // ヘッダー更新
    document.querySelector('.unit-header-title').textContent =
      unitId === 1 ? '単元1：かけ算（2・3けた × 1けた）' : `単元${unitId}`;
    document.querySelector('.unit-header-sub').textContent = '啓林館「わくわく算数3」';

    // タブ初期化
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

    // 戻るボタン
    const backBtn = document.getElementById('btn-back-home');
    backBtn.onclick = () => { showPage('home'); renderHome(); };

    // 解説・練習・テスト
    if (unitId === 1) {
      SansuUnit1.renderExplanation();
      SansuUnit1.startPractice(async ({ score, maxScore, stars }) => {
        if (_user) {
          await Progress.save({
            userId: _user.id, unitId: UNIT_OFFSET + 1,
            lessonType: 'practice', completed: true, score, maxScore, stars,
          });
          _progress = await Progress.getAll(_user.id);
        }
      });
      SansuUnit1.startTest(async ({ score, maxScore, stars }) => {
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

document.addEventListener('DOMContentLoaded', () => SansuApp.init());
