// ========== 認証モジュール ==========

const Auth = (() => {
  let _currentUser = null;

  // ログインタブに切り替え
  function switchToLogin() {
    document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
    const loginTab = document.querySelector('.auth-tab[data-tab="login"]');
    if (loginTab) loginTab.classList.add('active');
    const usernameWrap = document.getElementById('auth-username-wrap');
    if (usernameWrap) usernameWrap.style.display = 'none';
    const btn = document.getElementById('auth-submit');
    if (btn) btn.textContent = 'ログイン';
  }

  // タブ切り替え
  function initTabs() {
    document.querySelectorAll('.auth-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const mode = tab.dataset.tab;
        document.getElementById('auth-username-wrap').style.display =
          mode === 'signup' ? 'block' : 'none';
        document.getElementById('auth-error').textContent = '';
        document.getElementById('auth-error').style.color = '';
        const btn = document.getElementById('auth-submit');
        if (btn) btn.textContent = mode === 'login' ? 'ログイン' : '新規登録';
      });
    });
  }

  // メールログイン
  async function login(email, password) {
    const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
    if (error) throw error;
    return data.user;
  }

  // 新規登録（Edge Function経由でメール確認不要）
  async function signup(email, password, username) {
    const FUNCTION_URL = 'https://sxwsadvfcvljeuisqdkb.supabase.co/functions/v1/signup-auto-confirm';

    const res = await fetch(FUNCTION_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, username })
    });

    const result = await res.json();

    if (!res.ok || result.error) {
      throw new Error(result.error || '登録に失敗しました');
    }

    // Edge FunctionからのセッションをSupabaseクライアントにセット
    if (result.session) {
      await supabaseClient.auth.setSession({
        access_token:  result.session.access_token,
        refresh_token: result.session.refresh_token,
      });
    }

    return result.user;
  }

  // ログアウト
  async function logout() {
    await supabaseClient.auth.signOut();
  }

  // 現在のユーザー取得
  async function getUser() {
    const { data } = await supabaseClient.auth.getUser();
    _currentUser = data.user;
    return _currentUser;
  }

  // ユーザー名取得
  async function getUsername(userId) {
    const { data } = await supabaseClient
      .from('profiles')
      .select('username')
      .eq('id', userId)
      .single();
    return data?.username || 'ゲスト';
  }

  // フォーム送信ハンドラ初期化
  function initForm(onSuccess) {
    const form = document.getElementById('auth-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const errorEl = document.getElementById('auth-error');
      const btnEl   = document.getElementById('auth-submit');
      const activeTab = document.querySelector('.auth-tab.active')?.dataset.tab || 'login';

      const email    = document.getElementById('auth-email').value.trim();
      const password = document.getElementById('auth-password').value;
      const username = document.getElementById('auth-username')?.value.trim() || '';

      errorEl.textContent = '';
      errorEl.style.color = '';
      btnEl.disabled = true;
      btnEl.textContent = '処理中...';

      try {
        if (activeTab === 'login') {
          const user = await login(email, password);
          onSuccess(user);
        } else {
          // 新規登録
          if (!username) throw new Error('ニックネームを入力してください');
          const user = await signup(email, password, username);

          if (!user || (user.identities && user.identities.length === 0)) {
            // すでに登録済み → ログインへ誘導
            errorEl.style.color = '#e67e22';
            errorEl.textContent = '⚠️ このメールアドレスはすでに登録されています。ログインしてください。';
            switchToLogin();
            document.getElementById('auth-email').value = email;
            btnEl.disabled = false;
            return;
          }

          // 登録完了 → そのままログイン
          onSuccess(user);
        }
      } catch (err) {
        errorEl.style.color = '';
        errorEl.textContent = formatError(err.message);
        btnEl.disabled = false;
        btnEl.textContent = activeTab === 'login' ? 'ログイン' : '新規登録';
      }
    });
  }

  function formatError(msg) {
    if (msg.includes('security purposes') || msg.includes('after') && msg.includes('seconds')) {
      const sec = msg.match(/\d+/)?.[0] || '数';
      return `⏳ ${sec}秒待ってからもう一度試してください`;
    }
    const map = {
      'Invalid login credentials':
        'メールアドレスかパスワードが間違っています',
      'User already registered':
        'このメールアドレスはすでに登録されています。ログインしてください。',
      'Password should be at least 6 characters':
        'パスワードは6文字以上にしてください',
      'Unable to validate email address: invalid format':
        'メールアドレスの形式が正しくありません',
      'Email not confirmed':
        'メールの確認が完了していません。Gmailの確認メールのリンクをクリックしてください。',
      'ニックネームを入力してください':
        'ニックネームを入力してください',
      'signup requires a valid password':
        'パスワードを入力してください',
      'Password should be at least 6 characters.':
        'パスワードは6文字以上にしてください',
    };
    return map[msg] || msg;
  }

  return { initTabs, initForm, login, signup, logout, getUser, getUsername };
})();
