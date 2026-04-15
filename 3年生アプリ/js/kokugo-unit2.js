// ========== 国語 単元2「きつつきの商売（音読）」 ==========

const KokugoUnit2 = (() => {

  // -------- 解説ステップ --------
  const LESSONS = [
    {
      title: '📖 きつつきの商売ってどんなお話？',
      html: `
        <p class="lesson-text">
          「きつつきの商売」は、<strong>きつつき</strong>が森の中で<strong>音のお店</strong>を開くお話だよ。<br>
          森のどうぶつたちに「音」をうってあげる、ふしぎで楽しいお話だよ！
        </p>
        <div class="lesson-highlight">
          ポイント: 音読するとき、<strong>登場人物の気持ち</strong>を考えながら読もう！
        </div>
        <div class="lesson-example">
          <div class="lesson-example-title">登場するどうぶつ</div>
          <p>🐦 <strong>きつつき</strong>: お店のおやじ。木をつついて音を出す</p>
          <p>🐻 <strong>くま</strong>: はじめてのお客さん</p>
          <p>🌲 <strong>森の木</strong>: 音がひびく舞台（ぶたい）</p>
        </div>
      `
    },
    {
      title: '🔊 音を表すことば（オノマトペ）',
      html: `
        <p class="lesson-text">
          このお話には、音を表すことば（<strong>オノマトペ</strong>）がたくさん出てくるよ。<br>
          音読するときは、その音を<strong>頭の中でイメージ</strong>しながら読もう！
        </p>
        <div class="lesson-example">
          <div class="lesson-example-title">お話の中の音ことば</div>
          <p>🌲 木をつつく音: <strong>コツ コツ コツ</strong></p>
          <p>🌊 小川の音: <strong>さら さら</strong></p>
          <p>🍃 葉っぱがこすれる音: <strong>さわ さわ</strong></p>
          <p>🐦 鳥の声: <strong>ぴい ぴい</strong></p>
        </div>
        <div class="lesson-highlight">
          音読のコツ: オノマトペはリズムよく、はっきりと読もう！
        </div>
      `
    },
    {
      title: '🎯 音読のポイント',
      html: `
        <p class="lesson-text">
          上手な音読には3つのポイントがあるよ！
        </p>
        <div class="lesson-example">
          <div class="lesson-example-title">音読の3つのポイント</div>
          <p>① <strong>声の大きさ</strong>: 聞こえるくらいの声で読む</p>
          <p>② <strong>速さ</strong>: 速すぎず、ゆっくりすぎず読む</p>
          <p>③ <strong>気持ち</strong>: 登場人物になりきって読む</p>
        </div>
        <div class="lesson-highlight">
          きつつきのセリフは<strong>自信たっぷり</strong>に、くまのセリフは<strong>おどろいた感じ</strong>で読もう！
        </div>
        <div class="lesson-example">
          <div class="lesson-example-title">くぎり読みも大切</div>
          <p>「、」や「。」のところで<strong>少し間（ま）をおく</strong>と、聞いている人にわかりやすいよ。</p>
        </div>
      `
    },
    {
      title: '📝 お話の内容をたしかめよう',
      html: `
        <p class="lesson-text">
          お話の流れを整理しよう！
        </p>
        <div class="lesson-example">
          <div class="lesson-example-title">お話のながれ</div>
          <p>① きつつきが森の中で<strong>音のお店</strong>を開いた</p>
          <p>② お品書きに<strong>いろいろな音の値段</strong>が書いてある</p>
          <p>③ くまがやってきて、<strong>木をつつく音</strong>を注文した</p>
          <p>④ きつつきが<strong>コツ コツ コツ</strong>と音を出してあげた</p>
          <p>⑤ くまは大満足でかえっていった</p>
        </div>
        <div class="lesson-highlight">
          「きつつきの商売」では、<strong>音が商品</strong>になっているのがおもしろいね！
        </div>
      `
    },
  ];

  // -------- 練習問題 --------
  const PRACTICE_QUESTIONS = [
    {
      type: 'choice',
      question: 'きつつきのお店では何をうっていたの？',
      choices: ['食べ物', '音', '木のみ', '本'],
      answer: '音',
      hint: 'きつつきは木をつついて音を出すよ！'
    },
    {
      type: 'choice',
      question: '「コツ コツ コツ」は何の音？',
      choices: ['小川の音', '葉っぱの音', '木をつつく音', '雨の音'],
      answer: '木をつつく音',
      hint: 'きつつきが木をつつくときの音だよ！'
    },
    {
      type: 'choice',
      question: 'はじめてのお客さんはだれ？',
      choices: ['きつね', 'うさぎ', 'くま', 'りす'],
      answer: 'くま',
      hint: 'お話をよく読んでみてね！'
    },
    {
      type: 'choice',
      question: '「さら さら」はどんな音？',
      choices: ['木をつつく音', '小川の音', '鳥の声', '葉っぱの音'],
      answer: '小川の音',
      hint: '水が流れるときの音だよ！'
    },
    {
      type: 'choice',
      question: '音読のポイントとして正しいのはどれ？',
      choices: ['できるだけ速く読む', '小さな声で読む', '登場人物の気持ちを考えて読む', '文字だけ追って読む'],
      answer: '登場人物の気持ちを考えて読む',
      hint: '気持ちを込めて読むと上手な音読になるよ！'
    },
    {
      type: 'choice',
      question: '「、」のところで読み方はどうする？',
      choices: ['止まらずに読む', '少し間をおく', '大声を出す', '声を下げる'],
      answer: '少し間をおく',
      hint: '「くぎり読み」というよ！'
    },
    {
      type: 'choice',
      question: 'オノマトペとは何？',
      choices: ['人の名前', '音や様子を表すことば', '地名', '動物の種類'],
      answer: '音や様子を表すことば',
      hint: '「コツ コツ」や「さら さら」がそうだよ！'
    },
    {
      type: 'choice',
      question: '「さわ さわ」はどんな音？',
      choices: ['木をつつく音', '小川の音', '葉っぱがこすれる音', '風の音'],
      answer: '葉っぱがこすれる音',
      hint: '葉っぱが風でゆれるときの音だよ！'
    },
  ];

  // -------- テスト問題バンク --------
  const TEST_QUESTION_BANK = [
    {
      type: 'choice',
      question: 'きつつきのお店では何をうっていた？',
      choices: ['食べ物', '音', '木のみ', '本'],
      answer: '音',
    },
    {
      type: 'choice',
      question: '「コツ コツ コツ」は何の音？',
      choices: ['小川の音', '葉っぱの音', '木をつつく音', '雨の音'],
      answer: '木をつつく音',
    },
    {
      type: 'choice',
      question: 'はじめてのお客さんはだれ？',
      choices: ['きつね', 'うさぎ', 'くま', 'りす'],
      answer: 'くま',
    },
    {
      type: 'choice',
      question: '「さら さら」はどんな音？',
      choices: ['木をつつく音', '小川の音', '鳥の声', '葉っぱの音'],
      answer: '小川の音',
    },
    {
      type: 'choice',
      question: '「さわ さわ」はどんな音？',
      choices: ['木をつつく音', '小川の音', '葉っぱがこすれる音', '雨の音'],
      answer: '葉っぱがこすれる音',
    },
    {
      type: 'choice',
      question: 'オノマトペとは何？',
      choices: ['人の名前', '音や様子を表すことば', '地名', '動物の種類'],
      answer: '音や様子を表すことば',
    },
    {
      type: 'choice',
      question: '音読のポイントとして正しいのはどれ？',
      choices: ['できるだけ速く読む', '小さな声で読む', '登場人物の気持ちを考えて読む', '文字だけ追って読む'],
      answer: '登場人物の気持ちを考えて読む',
    },
    {
      type: 'choice',
      question: '「、」のところで読み方はどうする？',
      choices: ['止まらずに読む', '少し間をおく', '大声を出す', '声を下げる'],
      answer: '少し間をおく',
    },
    {
      type: 'choice',
      question: 'きつつきのセリフはどんな感じで読む？',
      choices: ['悲しそうに', '自信たっぷりに', 'こわがって', 'ねむそうに'],
      answer: '自信たっぷりに',
    },
    {
      type: 'choice',
      question: 'くまのセリフはどんな感じで読む？',
      choices: ['おどろいた感じ', '怒った感じ', 'うれしい感じ', '悲しい感じ'],
      answer: 'おどろいた感じ',
    },
    {
      type: 'choice',
      question: '「ぴい ぴい」は何の音？',
      choices: ['木をつつく音', '小川の音', '鳥の声', '葉っぱの音'],
      answer: '鳥の声',
    },
    {
      type: 'choice',
      question: 'このお話で「商品」として売られているものは？',
      choices: ['木のみ', '音', '森の空気', '動物の毛'],
      answer: '音',
    },
  ];

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
        <button class="btn-next-lesson" id="btn-kokugo2-lesson-prev"
          style="background:#ccc;color:#333;${currentLessonIndex === 0 ? 'visibility:hidden' : ''}">
          ← 前へ
        </button>
        <span style="font-size:.82rem; color:var(--text-sub); font-weight:700;">
          ${currentLessonIndex + 1} / ${LESSONS.length}
        </span>
        ${currentLessonIndex < LESSONS.length - 1
          ? `<button class="btn-next-lesson" id="btn-kokugo2-lesson-next">次へ →</button>`
          : `<button class="btn-next-lesson" id="btn-kokugo2-lesson-done" style="background:linear-gradient(135deg,var(--mint),#00838F);">
               練習問題へ進む！ 🎯
             </button>`
        }
      </div>
    `;

    document.getElementById('btn-kokugo2-lesson-prev')?.addEventListener('click', () => {
      currentLessonIndex--;
      renderExplanation();
    });
    document.getElementById('btn-kokugo2-lesson-next')?.addEventListener('click', () => {
      currentLessonIndex++;
      renderExplanation();
    });
    document.getElementById('btn-kokugo2-lesson-done')?.addEventListener('click', () => {
      KokugoApp.saveExplanationDone(2);
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
      if (stars === 3)      { msg = 'かんぺき！音読はかせだね！✨';        mascot = '🎉'; }
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
        renderQuiz({ containerId, questions, mode, onComplete });
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
