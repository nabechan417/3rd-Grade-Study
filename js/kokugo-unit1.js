// ========== 国語 単元1「3年生の漢字」 ==========

const KokugoUnit1 = (() => {

  // -------- 3年生で学ぶ漢字（光村図書 3年）--------
  // 3年生配当漢字200字から厳選した30字を使用
  const KANJI_LIST = [
    { kanji: '州', on: 'しゅう', kun: 'す', meaning: '地域・土地', examples: ['本州（ほんしゅう）', '州（しゅう）'] },
    { kanji: '島', on: 'とう',   kun: 'しま', meaning: '島', examples: ['島（しま）', '島国（しまぐに）'] },
    { kanji: '湖', on: 'こ',    kun: 'みずうみ', meaning: 'みずうみ', examples: ['湖（みずうみ）', '琵琶湖（びわこ）'] },
    { kanji: '港', on: 'こう',   kun: 'みなと', meaning: '船のとまるところ', examples: ['港（みなと）', '空港（くうこう）'] },
    { kanji: '橋', on: 'きょう', kun: 'はし', meaning: 'はし', examples: ['橋（はし）', '橋本（はしもと）'] },
    { kanji: '農', on: 'のう',   kun: '',     meaning: '農業・たがやす', examples: ['農業（のうぎょう）', '農家（のうか）'] },
    { kanji: '畑', on: '',      kun: 'はたけ・はた', meaning: 'はたけ', examples: ['畑（はたけ）', '麦畑（むぎばたけ）'] },
    { kanji: '植', on: 'しょく', kun: 'う（える）', meaning: 'うえる', examples: ['植える（うえる）', '植物（しょくぶつ）'] },
    { kanji: '葉', on: 'よう',   kun: 'は',  meaning: 'はっぱ', examples: ['葉（は）', '落ち葉（おちば）'] },
    { kanji: '根', on: 'こん',   kun: 'ね',  meaning: 'ね', examples: ['根（ね）', '根本（こんぽん）'] },
    { kanji: '実', on: 'じつ',   kun: 'み・みの（る）', meaning: 'み・ほんとう', examples: ['木の実（このみ）', '実は（じつは）'] },
    { kanji: '豆', on: 'とう',   kun: 'まめ', meaning: 'まめ', examples: ['豆（まめ）', '大豆（だいず）'] },
    { kanji: '温', on: 'おん',   kun: 'あたた（かい）', meaning: 'あたたかい', examples: ['温かい（あたたかい）', '気温（きおん）'] },
    { kanji: '寒', on: 'かん',   kun: 'さむ（い）', meaning: 'さむい', examples: ['寒い（さむい）', '寒波（かんぱ）'] },
    { kanji: '暑', on: 'しょ',   kun: 'あつ（い）', meaning: 'あつい', examples: ['暑い（あつい）', '暑さ（あつさ）'] },
    { kanji: '感', on: 'かん',   kun: '',    meaning: 'かんじる', examples: ['感じる（かんじる）', '感動（かんどう）'] },
    { kanji: '想', on: 'そう',   kun: '',    meaning: 'おもう・かんがえ', examples: ['想像（そうぞう）', '感想（かんそう）'] },
    { kanji: '意', on: 'い',    kun: '',    meaning: 'こころ・おもい', examples: ['意見（いけん）', '注意（ちゅうい）'] },
    { kanji: '悲', on: 'ひ',    kun: 'かな（しい）', meaning: 'かなしい', examples: ['悲しい（かなしい）', '悲しみ（かなしみ）'] },
    { kanji: '幸', on: 'こう',   kun: 'しあわ（せ）・さいわ（い）', meaning: 'しあわせ', examples: ['幸せ（しあわせ）', '幸運（こううん）'] },
    { kanji: '速', on: 'そく',   kun: 'はや（い）', meaning: 'はやい', examples: ['速い（はやい）', '速度（そくど）'] },
    { kanji: '重', on: 'じゅう', kun: 'おも（い）', meaning: 'おもい・かさなる', examples: ['重い（おもい）', '体重（たいじゅう）'] },
    { kanji: '軽', on: 'けい',   kun: 'かる（い）', meaning: 'かるい', examples: ['軽い（かるい）', '軽量（けいりょう）'] },
    { kanji: '院', on: 'いん',   kun: '',    meaning: '建物', examples: ['病院（びょういん）', '院長（いんちょう）'] },
    { kanji: '駅', on: 'えき',   kun: '',    meaning: 'えき', examples: ['駅（えき）', '駅前（えきまえ）'] },
    { kanji: '館', on: 'かん',   kun: '',    meaning: '大きな建物', examples: ['図書館（としょかん）', '映画館（えいがかん）'] },
    { kanji: '祭', on: 'さい',   kun: 'まつ（り）', meaning: 'まつり', examples: ['祭り（まつり）', '文化祭（ぶんかさい）'] },
    { kanji: '礼', on: 'れい',   kun: '',    meaning: 'れい・おじぎ', examples: ['礼（れい）', '礼儀（れいぎ）'] },
    { kanji: '勉', on: 'べん',   kun: '',    meaning: 'つとめる', examples: ['勉強（べんきょう）', '勉学（べんがく）'] },
    { kanji: '漢', on: 'かん',   kun: '',    meaning: '漢字の漢', examples: ['漢字（かんじ）', '漢字（かんじ）'] },
  ];

  // -------- 解説ステップ --------
  const LESSONS = [
    {
      title: '📖 3年生で習う漢字',
      html: `
        <p class="lesson-text">
          3年生では <strong>200字</strong> の漢字を習うよ。<br>
          読み方や書き方、使い方をしっかり覚えよう！
        </p>
        <div class="lesson-highlight">
          ポイント: 漢字には<strong>音読み（おんよみ）</strong>と<strong>訓読み（くんよみ）</strong>があるよ！
        </div>
        <div class="lesson-example">
          <div class="lesson-example-title">音読みと訓読みのちがい</div>
          <p>🔊 <strong>音読み</strong>: 中国からきた読み方（カタカナで書く）</p>
          <p>&nbsp;&nbsp;&nbsp;例: 島 → <strong>トウ</strong>（島国・とうごく）</p>
          <p>📝 <strong>訓読み</strong>: 日本のもともとの読み方（ひらがな）</p>
          <p>&nbsp;&nbsp;&nbsp;例: 島 → <strong>しま</strong>（島・しま）</p>
        </div>
        <div class="kanji-card">
          <div class="kanji-big">島</div>
          <div class="kanji-reading">音: とう ／ 訓: しま</div>
          <div class="kanji-meaning">意味: しま</div>
          <div class="kanji-example">使い方: 島（しま）・島国（しまぐに）</div>
        </div>
      `
    },
    {
      title: '🌿 自然・場所の漢字',
      html: `
        <p class="lesson-text">
          自然や場所に関係する漢字を覚えよう！
        </p>
        <div class="kanji-card">
          <div class="kanji-big">湖</div>
          <div class="kanji-reading">音: こ ／ 訓: みずうみ</div>
          <div class="kanji-meaning">意味: 陸地の中にある大きな水のたまり</div>
          <div class="kanji-example">使い方: 湖（みずうみ）・琵琶湖（びわこ）</div>
        </div>
        <div class="kanji-card">
          <div class="kanji-big">港</div>
          <div class="kanji-reading">音: こう ／ 訓: みなと</div>
          <div class="kanji-meaning">意味: 船がとまる場所</div>
          <div class="kanji-example">使い方: 港（みなと）・空港（くうこう）</div>
        </div>
        <div class="kanji-card">
          <div class="kanji-big">橋</div>
          <div class="kanji-reading">音: きょう ／ 訓: はし</div>
          <div class="kanji-meaning">意味: 川などをわたるはし</div>
          <div class="kanji-example">使い方: 橋（はし）・橋本（はしもと）</div>
        </div>
      `
    },
    {
      title: '🌱 植物の漢字',
      html: `
        <p class="lesson-text">
          植物に関係する漢字を覚えよう！
        </p>
        <div class="kanji-card">
          <div class="kanji-big">葉</div>
          <div class="kanji-reading">音: よう ／ 訓: は</div>
          <div class="kanji-meaning">意味: 木や草のはっぱ</div>
          <div class="kanji-example">使い方: 葉（は）・落ち葉（おちば）・言葉（ことば）</div>
        </div>
        <div class="kanji-card">
          <div class="kanji-big">根</div>
          <div class="kanji-reading">音: こん ／ 訓: ね</div>
          <div class="kanji-meaning">意味: 植物の根っこ</div>
          <div class="kanji-example">使い方: 根（ね）・根本（こんぽん）・根気（こんき）</div>
        </div>
        <div class="kanji-card">
          <div class="kanji-big">実</div>
          <div class="kanji-reading">音: じつ ／ 訓: み・みのる</div>
          <div class="kanji-meaning">意味: 木の実、ほんとう</div>
          <div class="kanji-example">使い方: 木の実（このみ）・実は（じつは）・実力（じつりょく）</div>
        </div>
      `
    },
    {
      title: '💭 気持ちの漢字',
      html: `
        <p class="lesson-text">
          気持ちや心に関係する漢字を覚えよう！
        </p>
        <div class="kanji-card">
          <div class="kanji-big">感</div>
          <div class="kanji-reading">音: かん</div>
          <div class="kanji-meaning">意味: かんじる・こころにひびく</div>
          <div class="kanji-example">使い方: 感じる（かんじる）・感動（かんどう）・感想（かんそう）</div>
        </div>
        <div class="kanji-card">
          <div class="kanji-big">悲</div>
          <div class="kanji-reading">音: ひ ／ 訓: かなしい</div>
          <div class="kanji-meaning">意味: かなしい</div>
          <div class="kanji-example">使い方: 悲しい（かなしい）・悲しみ（かなしみ）</div>
        </div>
        <div class="kanji-card">
          <div class="kanji-big">幸</div>
          <div class="kanji-reading">音: こう ／ 訓: しあわせ・さいわい</div>
          <div class="kanji-meaning">意味: しあわせ</div>
          <div class="kanji-example">使い方: 幸せ（しあわせ）・幸運（こううん）</div>
        </div>
      `
    },
    {
      title: '🏛️ 建物・行事の漢字',
      html: `
        <p class="lesson-text">
          建物や行事に関係する漢字を覚えよう！
        </p>
        <div class="kanji-card">
          <div class="kanji-big">館</div>
          <div class="kanji-reading">音: かん</div>
          <div class="kanji-meaning">意味: 大きな建物</div>
          <div class="kanji-example">使い方: 図書館（としょかん）・映画館（えいがかん）・体育館（たいいくかん）</div>
        </div>
        <div class="kanji-card">
          <div class="kanji-big">駅</div>
          <div class="kanji-reading">音: えき</div>
          <div class="kanji-meaning">意味: 電車がとまるところ</div>
          <div class="kanji-example">使い方: 駅（えき）・駅前（えきまえ）・終点（しゅうてん）</div>
        </div>
        <div class="kanji-card">
          <div class="kanji-big">祭</div>
          <div class="kanji-reading">音: さい ／ 訓: まつり</div>
          <div class="kanji-meaning">意味: まつり・行事</div>
          <div class="kanji-example">使い方: 祭り（まつり）・文化祭（ぶんかさい）・お祭り（おまつり）</div>
        </div>
        <div class="lesson-highlight">
          まとめ: 漢字は読み方・書き方・使い方の3つを覚えよう！
        </div>
      `
    }
  ];

  // -------- 練習問題 --------
  const PRACTICE_QUESTIONS = [
    {
      type: 'choice',
      question: '「<strong>湖</strong>」の読み方は？',
      choices: ['みずうみ', 'しま', 'みなと', 'はし'],
      answer: 'みずうみ',
      hint: '陸地の中にある大きな水のたまりのことだよ！'
    },
    {
      type: 'choice',
      question: '「<strong>港</strong>」の読み方は？',
      choices: ['みなと', 'こうえん', 'みずうみ', 'うみべ'],
      answer: 'みなと',
      hint: '船がとまる場所を「みなと」というよ！'
    },
    {
      type: 'choice',
      question: '「<strong>葉</strong>」の読み方は？',
      choices: ['は', 'ね', 'み', 'くき'],
      answer: 'は',
      hint: '木の「はっぱ」のことだよ！'
    },
    {
      type: 'choice',
      question: '「感動」の読み方は？',
      choices: ['かんどう', 'かんがえ', 'かんしゃ', 'かんたん'],
      answer: 'かんどう',
      hint: '心がゆり動かされることだよ！'
    },
    {
      type: 'choice',
      question: '「<strong>悲</strong>しい」の読み方は？',
      choices: ['かなしい', 'うれしい', 'さびしい', 'くるしい'],
      answer: 'かなしい',
      hint: '「悲」は心がいたむ気持ちを表すよ！'
    },
    {
      type: 'choice',
      question: '「図書<strong>館</strong>」の読み方は？',
      choices: ['としょかん', 'としょしつ', 'としょぼ', 'としょだい'],
      answer: 'としょかん',
      hint: '本をかりることができる建物だよ！'
    },
    {
      type: 'choice',
      question: '「<strong>橋</strong>」の読み方は？',
      choices: ['はし', 'みち', 'かわ', 'みずうみ'],
      answer: 'はし',
      hint: '川や谷をわたるためのものだよ！'
    },
    {
      type: 'choice',
      question: '「幸<strong>せ</strong>」の「幸」の読み方は？',
      choices: ['しあわ', 'うれし', 'たのし', 'よろこ'],
      answer: 'しあわ',
      hint: '「しあわせ」はいいことがたくさんある状態だよ！'
    },
  ];

  // -------- テスト問題バンク --------
  const TEST_QUESTION_BANK = (() => {
    const bank = [];

    // 漢字の読み問題（訓読み）
    const yomiQuestions = [
      { kanji: '島', choices: ['しま', 'やま', 'うみ', 'かわ'],          answer: 'しま' },
      { kanji: '湖', choices: ['みずうみ', 'かわ', 'いけ', 'うみ'],       answer: 'みずうみ' },
      { kanji: '港', choices: ['みなと', 'えき', 'くうこう', 'ふね'],     answer: 'みなと' },
      { kanji: '橋', choices: ['はし', 'みち', 'かわ', 'やま'],           answer: 'はし' },
      { kanji: '葉', choices: ['は', 'み', 'ね', 'くき'],                answer: 'は' },
      { kanji: '根', choices: ['ね', 'は', 'み', 'くき'],                answer: 'ね' },
      { kanji: '実', choices: ['み', 'は', 'ね', 'くき'],                answer: 'み' },
      { kanji: '豆', choices: ['まめ', 'こめ', 'むぎ', 'いも'],           answer: 'まめ' },
      { kanji: '温', choices: ['あたたかい', 'つめたい', 'さむい', 'あつい'], answer: 'あたたかい' },
      { kanji: '寒', choices: ['さむい', 'あつい', 'あたたかい', 'すずしい'], answer: 'さむい' },
      { kanji: '暑', choices: ['あつい', 'さむい', 'すずしい', 'あたたかい'], answer: 'あつい' },
      { kanji: '速', choices: ['はやい', 'おそい', 'おもい', 'かるい'],    answer: 'はやい' },
      { kanji: '重', choices: ['おもい', 'かるい', 'はやい', 'おそい'],    answer: 'おもい' },
      { kanji: '軽', choices: ['かるい', 'おもい', 'はやい', 'おそい'],    answer: 'かるい' },
      { kanji: '悲', choices: ['かなしい', 'うれしい', 'たのしい', 'さびしい'], answer: 'かなしい' },
      { kanji: '畑', choices: ['はたけ', 'たんぼ', 'もり', 'にわ'],       answer: 'はたけ' },
      { kanji: '祭', choices: ['まつり', 'ぎょうじ', 'えんかい', 'しあい'], answer: 'まつり' },
    ];
    yomiQuestions.forEach(({ kanji, choices, answer }) => {
      bank.push({ type: 'choice', question: `「<strong>${kanji}</strong>」の読み方は？`, choices, answer });
    });

    // 熟語の読み問題
    const jukugoQuestions = [
      { word: '農業', choices: ['のうぎょう', 'りんぎょう', 'ぼくぎょう', 'こうぎょう'], answer: 'のうぎょう' },
      { word: '植物', choices: ['しょくぶつ', 'どうぶつ', 'こんちゅう', 'しょくりょう'], answer: 'しょくぶつ' },
      { word: '感動', choices: ['かんどう', 'かんしゃ', 'かんたん', 'かんがえ'],     answer: 'かんどう' },
      { word: '想像', choices: ['そうぞう', 'そうたい', 'そうだん', 'そうこう'],     answer: 'そうぞう' },
      { word: '意見', choices: ['いけん', 'いがい', 'いたい', 'いき'],             answer: 'いけん' },
      { word: '図書館', choices: ['としょかん', 'としょしつ', 'としょぼ', 'としょたい'], answer: 'としょかん' },
      { word: '病院', choices: ['びょういん', 'びょうどう', 'びょうき', 'びょうてき'], answer: 'びょういん' },
      { word: '体重', choices: ['たいじゅう', 'たいりょく', 'たいそう', 'たいど'],   answer: 'たいじゅう' },
      { word: '速度', choices: ['そくど', 'そくりょく', 'そくたつ', 'そくほう'],    answer: 'そくど' },
      { word: '幸運', choices: ['こううん', 'こうてい', 'こうかん', 'こうどう'],    answer: 'こううん' },
      { word: '空港', choices: ['くうこう', 'くうき', 'くうかん', 'くうぐん'],     answer: 'くうこう' },
      { word: '勉強', choices: ['べんきょう', 'べんり', 'べんごし', 'べんかい'],    answer: 'べんきょう' },
      { word: '漢字', choices: ['かんじ', 'かんが', 'かんたん', 'かんこく'],       answer: 'かんじ' },
    ];
    jukugoQuestions.forEach(({ word, choices, answer }) => {
      bank.push({ type: 'choice', question: `「<strong>${word}</strong>」の読み方は？`, choices, answer });
    });

    // 文章の中の漢字問題
    const bunQuestions = [
      { q: '川に「<strong>はし</strong>」をかける。正しい漢字は？', c: ['橋', '箸', '端', '柱'], a: '橋' },
      { q: '「<strong>みなと</strong>」に船がとまっている。正しい漢字は？', c: ['港', '湊', '浜', '海'], a: '港' },
      { q: '秋に「<strong>おちば</strong>」を拾った。「落ち」のあとの漢字は？', c: ['葉', '波', '花', '実'], a: '葉' },
      { q: '「<strong>きおん</strong>」が高い日はあつい。「気」のあとの漢字は？', c: ['温', '暖', '熱', '火'], a: '温' },
      { q: '「<strong>まつり</strong>」で太鼓をたたく。正しい漢字は？', c: ['祭', '際', '察', '節'], a: '祭' },
      { q: 'えき前のみちは「<strong>はやい</strong>」車が多い。正しい漢字は？', c: ['速', '早', '疾', '急'], a: '速' },
    ];
    bunQuestions.forEach(({ q, c, a }) => {
      bank.push({ type: 'choice', question: q, choices: c, answer: a });
    });

    return bank;
  })();

  function getTestQuestions() {
    const shuffled = [...TEST_QUESTION_BANK].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 10);
  }

  let currentLessonIndex = 0;

  // -------- レンダリング: 解説 --------
  function renderExplanation() {
    const container = document.getElementById('kokugo-unit1-explanation');
    if (!container) return;

    const lesson = LESSONS[currentLessonIndex];

    container.innerHTML = `
      <div class="lesson-card pop-in">
        <div class="lesson-card-title">${lesson.title}</div>
        ${lesson.html}
      </div>
      <div style="display:flex; justify-content:space-between; align-items:center; margin-top:8px;">
        <button class="btn-next-lesson" id="btn-kokugo-lesson-prev"
          style="background:#ccc;color:#333;${currentLessonIndex === 0 ? 'visibility:hidden' : ''}">
          ← 前へ
        </button>
        <span style="font-size:.82rem; color:var(--text-sub); font-weight:700;">
          ${currentLessonIndex + 1} / ${LESSONS.length}
        </span>
        ${currentLessonIndex < LESSONS.length - 1
          ? `<button class="btn-next-lesson" id="btn-kokugo-lesson-next">次へ →</button>`
          : `<button class="btn-next-lesson" id="btn-kokugo-lesson-done" style="background:linear-gradient(135deg,var(--mint),#00838F);">
               練習問題へ進む！ 🎯
             </button>`
        }
      </div>
    `;

    document.getElementById('btn-kokugo-lesson-prev')?.addEventListener('click', () => {
      currentLessonIndex--;
      renderExplanation();
    });
    document.getElementById('btn-kokugo-lesson-next')?.addEventListener('click', () => {
      currentLessonIndex++;
      renderExplanation();
    });

    document.getElementById('btn-kokugo-lesson-done')?.addEventListener('click', () => {
      KokugoApp.saveExplanationDone(1);
      document.querySelectorAll('.unit-tab')[1]?.click();
    });
  }

  // -------- 練習問題 --------
  function startPractice(onComplete) {
    renderQuiz({
      containerId: 'kokugo-unit1-practice',
      questions:   PRACTICE_QUESTIONS,
      mode:        'practice',
      onComplete,
    });
  }

  // -------- テスト --------
  function startTest(onComplete) {
    renderQuiz({
      containerId: 'kokugo-unit1-test',
      questions:   getTestQuestions(),
      mode:        'test',
      onComplete,
    });
  }

  // -------- 共通クイズレンダラー --------
  function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function renderQuiz({ containerId, questions, mode, onComplete }) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // 選択肢をシャッフルした問題リストを作成
    const shuffledQuestions = questions.map(q => ({
      ...q,
      choices: q.choices ? shuffleArray(q.choices) : q.choices,
    }));

    let qIndex = 0;
    let score   = 0;
    const results = new Array(shuffledQuestions.length).fill(null);

    function render() {
      if (qIndex >= shuffledQuestions.length) { showResult(); return; }

      const q = shuffledQuestions[qIndex];
      const dots = shuffledQuestions.map((_, i) => {
        let cls = '';
        if (i < qIndex)        cls = results[i] ? 'correct' : 'wrong';
        else if (i === qIndex) cls = 'current';
        return `<div class="quiz-dot ${cls}"></div>`;
      }).join('');

      const answerArea = q.type === 'choice'
        ? `<div class="quiz-choices">
             ${q.choices.map(c =>
               `<button class="quiz-choice" data-val="${c}">${c}</button>`
             ).join('')}
           </div>`
        : `<div class="quiz-input-wrap">
             <input class="quiz-input" type="text"
               placeholder="こたえ" autocomplete="off">
             <button class="btn-check">かくにん</button>
           </div>`;

      container.innerHTML = `
        <div class="quiz-progress">
          <div class="quiz-progress-dots">${dots}</div>
          <div class="quiz-count">${qIndex + 1}/${shuffledQuestions.length}</div>
        </div>
        <div class="quiz-card pop-in">
          <div class="quiz-question-num">問題 ${qIndex + 1}</div>
          <div class="quiz-question">${q.question}</div>
          ${answerArea}
          <div class="quiz-feedback"></div>
        </div>
        <button class="btn-quiz-next">次の問題 →</button>
      `;

      const feedbackEl = container.querySelector('.quiz-feedback');
      const nextBtn    = container.querySelector('.btn-quiz-next');

      function onAnswer(selected) {
        const correct = String(selected).trim() === String(q.answer).trim();
        results[qIndex] = correct;
        if (correct) score++;

        feedbackEl.className = `quiz-feedback show ${correct ? 'correct' : 'wrong'}`;
        feedbackEl.innerHTML = correct
          ? `⭐ 正解！${mode === 'practice' && q.hint ? `<br><small>${q.hint}</small>` : ''}`
          : `❌ ざんねん... 正しいこたえは「<strong>${q.answer}</strong>」だよ。${mode === 'practice' && q.hint ? `<br><small>${q.hint}</small>` : ''}`;

        nextBtn.classList.add('show');
        setTimeout(() => nextBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 100);
        if (correct) burstStars();
      }

      container.querySelectorAll('.quiz-choice').forEach(btn => {
        btn.addEventListener('click', () => {
          if (feedbackEl.classList.contains('show')) return;
          container.querySelectorAll('.quiz-choice').forEach(b => {
            b.disabled = true;
            if (b.dataset.val === q.answer) b.classList.add('correct');
          });
          if (btn.dataset.val !== q.answer) btn.classList.add('wrong');
          onAnswer(btn.dataset.val);
        });
      });

      const inputEl  = container.querySelector('.quiz-input');
      const checkBtn = container.querySelector('.btn-check');

      function checkInput() {
        if (feedbackEl.classList.contains('show')) return;
        const val = inputEl?.value;
        if (!val) { inputEl?.classList.add('shake'); return; }
        const correct = String(val).trim() === String(q.answer).trim();
        inputEl.classList.add(correct ? 'correct' : 'wrong');
        inputEl.disabled = true;
        if (checkBtn) checkBtn.disabled = true;
        onAnswer(val);
      }

      checkBtn?.addEventListener('click', checkInput);
      inputEl?.addEventListener('keydown', e => { if (e.key === 'Enter') checkInput(); });

      nextBtn?.addEventListener('click', () => { qIndex++; render(); });
    }

    function showResult() {
      const stars   = Progress.calcStars(score, shuffledQuestions.length);
      const starStr = '⭐'.repeat(stars) + '☆'.repeat(3 - stars);

      let msg, mascot;
      if (stars === 3)      { msg = 'かんぺき！漢字はかせだね！✨';        mascot = '🎉'; }
      else if (stars === 2) { msg = 'よくできました！もうすこし！';         mascot = '😊'; }
      else if (stars === 1) { msg = 'がんばったね！もう一度読もう！';       mascot = '💪'; }
      else                  { msg = 'もう一度チャレンジしてみよう！';       mascot = '🌱'; }

      container.innerHTML = `
        <div class="result-card pop-in">
          <div class="result-mascot">${mascot}</div>
          <div class="result-title">おわった！</div>
          <div class="result-score">${score}<span> / ${shuffledQuestions.length}問せいかい</span></div>
          <div class="result-stars">${starStr}</div>
          <div class="result-message">${msg}</div>
          <div class="result-buttons">
            <button class="btn-retry">もう一度</button>
            <button class="btn-home">ホームへ</button>
          </div>
        </div>
      `;

      container.querySelector('.btn-retry')?.addEventListener('click', () => {
        renderQuiz({ containerId, questions: getTestQuestions(), mode, onComplete });
      });
      container.querySelector('.btn-home')?.addEventListener('click', () => {
        KokugoApp.showPage('home');
      });

      onComplete({ score, maxScore: shuffledQuestions.length, stars });
    }

    render();
  }

  function burstStars() {
    const emojis = ['⭐', '✨', '🌟', '💫', '📖'];
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        const el = document.createElement('div');
        el.className = 'star-burst';
        el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        el.style.left = `${30 + Math.random() * 40}vw`;
        el.style.top  = `${40 + Math.random() * 20}vh`;
        document.body.appendChild(el);
        setTimeout(() => el.remove(), 1100);
      }, i * 120);
    }
  }

  function resetLesson() { currentLessonIndex = 0; }

  return { LESSONS, PRACTICE_QUESTIONS, TEST_QUESTION_BANK, renderExplanation, startPractice, startTest, resetLesson };
})();
