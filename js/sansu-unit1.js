// ========== 算数 単元1「かけ算（2・3けた × 1けた）」 ==========

const SansuUnit1 = (() => {

  // -------- 解説ステップ --------
  const LESSONS = [
    {
      title: '🔢 かけ算のおさらい',
      html: `
        <p class="lesson-text">
          2年生でかけ算の <strong>九九（くく）</strong> を学んだね！<br>
          3年生では、<strong>もっと大きな数のかけ算</strong>を学ぶよ。
        </p>
        <div class="lesson-highlight">
          ポイント: 九九を使えば、大きい数のかけ算もできるよ！
        </div>
        <div class="lesson-example">
          <div class="lesson-example-title">九九のおさらい</div>
          <p>3 × 4 = <strong>12</strong></p>
          <p>7 × 6 = <strong>42</strong></p>
          <p>8 × 9 = <strong>72</strong></p>
        </div>
        <div class="lesson-example">
          <div class="lesson-example-title">今日のめあて</div>
          <p>23 × 3 = ？ のような計算ができるようになろう！</p>
        </div>
      `
    },
    {
      title: '✨ 2けた × 1けたのしくみ',
      html: `
        <p class="lesson-text">
          <strong>23 × 3</strong> を計算してみよう。<br>
          23 を <strong>20 と 3</strong> に分けて考えるよ！
        </p>
        <div class="lesson-example">
          <div class="lesson-example-title">分けて計算</div>
          <p>23 × 3</p>
          <p>= (20 + 3) × 3</p>
          <p>= <strong>20 × 3</strong> + <strong>3 × 3</strong></p>
          <p>= 60 + 9</p>
          <p>= <strong>69</strong></p>
        </div>
        <div class="lesson-highlight">
          コツ: 十の位と一の位に分けて計算しよう！
        </div>
        <div class="lesson-example">
          <div class="lesson-example-title">練習してみよう</div>
          <p>32 × 3 = (30 + 2) × 3 = 90 + 6 = <strong>96</strong></p>
          <p>41 × 2 = (40 + 1) × 2 = 80 + 2 = <strong>82</strong></p>
        </div>
      `
    },
    {
      title: '📝 ひっ算の仕方（くり上がりなし）',
      html: `
        <p class="lesson-text">
          大きい数のかけ算は <strong>ひっ算（筆算）</strong> を使うと便利だよ。<br>
          <strong>一の位 → 十の位</strong> の順番に計算するよ！
        </p>
        <div class="lesson-example">
          <div class="lesson-example-title">23 × 3 のひっ算</div>
          <div class="sansu-calc-box">
            <div>&nbsp;2&nbsp;3</div>
            <div>×&nbsp;&nbsp;&nbsp;3</div>
            <div class="sansu-calc-line"><strong>6&nbsp;9</strong></div>
          </div>
          <p>① 一の位: 3 × 3 = <strong>9</strong></p>
          <p>② 十の位: 2 × 3 = <strong>6</strong></p>
          <p>こたえ: <strong>69</strong></p>
        </div>
        <div class="lesson-highlight">
          ポイント: 一の位から順番に！位をそろえて書こう！
        </div>
      `
    },
    {
      title: '🔼 くり上がりのあるひっ算',
      html: `
        <p class="lesson-text">
          <strong>36 × 4</strong> のように、一の位の計算で <strong>10 以上</strong>になるときは<br>
          <strong>くり上がり</strong> が起こるよ！
        </p>
        <div class="lesson-example">
          <div class="lesson-example-title">36 × 4 のひっ算</div>
          <div class="sansu-calc-box">
            <div><small style="font-size:.7em;">②2くり上がり</small></div>
            <div>&nbsp;3&nbsp;6</div>
            <div>×&nbsp;&nbsp;&nbsp;4</div>
            <div class="sansu-calc-line"><strong>1&nbsp;4&nbsp;4</strong></div>
          </div>
          <p>① 一の位: 6 × 4 = 24 → <strong>4</strong> を書いて <strong>2</strong> をくり上げる</p>
          <p>② 十の位: 3 × 4 = 12 → 12 + 2（くり上がり）= <strong>14</strong></p>
          <p>こたえ: <strong>144</strong></p>
        </div>
        <div class="lesson-highlight">
          コツ: くり上がった数を小さく書いておくと忘れないよ！
        </div>
        <div class="lesson-example">
          <div class="lesson-example-title">もう一つ例</div>
          <p>47 × 3</p>
          <p>① 7 × 3 = 21 → 一の位: <strong>1</strong>、くり上がり: <strong>2</strong></p>
          <p>② 4 × 3 = 12 → 12 + 2 = <strong>14</strong></p>
          <p>こたえ: <strong>141</strong></p>
        </div>
      `
    },
    {
      title: '🏆 3けた × 1けたのひっ算',
      html: `
        <p class="lesson-text">
          3けたの数のかけ算も同じ考え方でできるよ。<br>
          <strong>一の位 → 十の位 → 百の位</strong> の順に計算しよう！
        </p>
        <div class="lesson-example">
          <div class="lesson-example-title">123 × 3 のひっ算</div>
          <div class="sansu-calc-box">
            <div>1&nbsp;2&nbsp;3</div>
            <div>×&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3</div>
            <div class="sansu-calc-line"><strong>3&nbsp;6&nbsp;9</strong></div>
          </div>
          <p>① 一の位: 3 × 3 = <strong>9</strong></p>
          <p>② 十の位: 2 × 3 = <strong>6</strong></p>
          <p>③ 百の位: 1 × 3 = <strong>3</strong></p>
          <p>こたえ: <strong>369</strong></p>
        </div>
        <div class="lesson-example">
          <div class="lesson-example-title">くり上がりあり: 245 × 3</div>
          <p>① 5 × 3 = 15 → <strong>5</strong>、くり上がり <strong>1</strong></p>
          <p>② 4 × 3 = 12 → 12 + 1 = 13 → <strong>3</strong>、くり上がり <strong>1</strong></p>
          <p>③ 2 × 3 = 6 → 6 + 1 = <strong>7</strong></p>
          <p>こたえ: <strong>735</strong></p>
        </div>
        <div class="lesson-highlight">
          まとめ: 何けたでも一の位から順番に計算するよ！
        </div>
      `
    }
  ];

  // -------- 練習問題（8問・ヒントあり）--------
  const PRACTICE_QUESTIONS = [
    {
      type: 'choice',
      question: '<span class="num">12 × 3</span> は？',
      choices: ['36', '33', '42', '26'],
      answer: '36',
      hint: '10 × 3 = 30、2 × 3 = 6、合わせて 36 だよ！'
    },
    {
      type: 'input',
      question: '<span class="num">21 × 4</span> は？',
      answer: '84',
      hint: '20 × 4 = 80、1 × 4 = 4、合わせて 84 だよ！'
    },
    {
      type: 'choice',
      question: '<span class="num">34 × 2</span> は？',
      choices: ['68', '66', '72', '64'],
      answer: '68',
      hint: '30 × 2 = 60、4 × 2 = 8、合わせて 68 だよ！'
    },
    {
      type: 'input',
      question: '<span class="num">36 × 3</span> は？',
      answer: '108',
      hint: '6 × 3 = 18（くり上がり 1）、3 × 3 + 1 = 10 → 108 だよ！'
    },
    {
      type: 'choice',
      question: '<span class="num">25 × 4</span> は？',
      choices: ['100', '90', '110', '80'],
      answer: '100',
      hint: '5 × 4 = 20（くり上がり 2）、2 × 4 + 2 = 10 → 100 だよ！'
    },
    {
      type: 'input',
      question: '<span class="num">123 × 3</span> は？',
      answer: '369',
      hint: '3×3=9、2×3=6、1×3=3 で 369 だよ！'
    },
    {
      type: 'choice',
      question: 'えんぴつが <span class="num">1本 12円</span>。<span class="num">4本</span> 買うといくら？',
      choices: ['48円', '44円', '52円', '40円'],
      answer: '48円',
      hint: '12 × 4 = 48 だよ！'
    },
    {
      type: 'input',
      question: '<span class="num">47 × 5</span> は？',
      answer: '235',
      hint: '7 × 5 = 35（くり上がり 3）、4 × 5 + 3 = 23 → 235 だよ！'
    },
  ];

  // -------- テスト問題バンク（自動生成）--------
  const TEST_QUESTION_BANK = (() => {
    const bank = [];

    // ── 2けた × 1けた（くり上がりなし）──
    [
      [11,2],[12,2],[13,2],[21,3],[22,4],[11,4],[31,2],[12,3],[32,2],[41,2],
      [23,2],[21,4],[11,3],[22,3],[33,2],[11,6],[21,2],[31,3],[12,4],[13,3],
    ].forEach(([a, b]) => {
      bank.push({ type: 'input', question: `<span class="num">${a} × ${b}</span> は？`, answer: String(a * b) });
    });

    // ── 2けた × 1けた（くり上がりあり）──
    [
      [14,3],[16,4],[15,3],[17,4],[18,3],[19,2],[25,3],[26,4],[27,3],[28,2],
      [35,4],[36,3],[37,2],[38,4],[45,3],[46,2],[47,3],[48,2],[55,4],[56,3],
      [34,3],[43,4],[52,3],[63,2],[74,3],[85,2],[96,3],[67,4],[78,2],[89,3],
    ].forEach(([a, b]) => {
      bank.push({ type: 'input', question: `<span class="num">${a} × ${b}</span> は？`, answer: String(a * b) });
    });

    // ── 3けた × 1けた ──
    [
      [111,3],[121,4],[112,3],[213,2],[132,3],[211,4],[123,4],[231,3],[312,2],[321,3],
      [245,3],[135,6],[124,5],[236,3],[347,2],[253,3],[346,2],[415,3],[524,2],[632,3],
    ].forEach(([a, b]) => {
      bank.push({ type: 'input', question: `<span class="num">${a} × ${b}</span> は？`, answer: String(a * b) });
    });

    // ── 選択式（文章問題）──
    [
      { a: 12, b: 5, unit: '円', word: `1こ<span class="num">12円</span>のあめを<span class="num">5こ</span>買うと？` },
      { a: 24, b: 3, unit: '本', word: `えんぴつが1はこに<span class="num">24本</span>入っています。<span class="num">3はこ</span>では何本？` },
      { a: 15, b: 4, unit: '枚', word: `カードが1じょに<span class="num">15枚</span>。<span class="num">4じょ</span>では何枚？` },
      { a: 32, b: 3, unit: '本', word: `花が1つかみに<span class="num">32本</span>。<span class="num">3つかみ</span>では何本？` },
    ].forEach(({ a, b, unit, word }) => {
      const ans = a * b;
      // ダミー選択肢を生成
      const dummies = [-2, +2, -5].map(d => ans + d * b).filter(v => v > 0 && v !== ans);
      const choices = [...new Set([ans, ...dummies.slice(0, 3)])].sort(() => Math.random() - 0.5);
      bank.push({
        type: 'choice',
        question: word,
        choices: choices.map(v => `${v}${unit}`),
        answer: `${ans}${unit}`,
      });
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
    const container = document.getElementById('sansu-unit1-explanation');
    if (!container) return;

    const lesson = LESSONS[currentLessonIndex];

    container.innerHTML = `
      <div class="lesson-card pop-in">
        <div class="lesson-card-title">${lesson.title}</div>
        ${lesson.html}
      </div>
      <div style="display:flex; justify-content:space-between; align-items:center; margin-top:8px;">
        <span style="font-size:.82rem; color:var(--text-sub); font-weight:700;">
          ${currentLessonIndex + 1} / ${LESSONS.length}
        </span>
        ${currentLessonIndex < LESSONS.length - 1
          ? `<button class="btn-next-lesson" id="btn-sansu-lesson-next">次へ →</button>`
          : `<button class="btn-next-lesson" id="btn-sansu-lesson-done" style="background:linear-gradient(135deg,var(--mint),#00838F);">
               練習問題へ進む！ 🎯
             </button>`
        }
      </div>
    `;

    document.getElementById('btn-sansu-lesson-next')?.addEventListener('click', () => {
      currentLessonIndex++;
      renderExplanation();
    });

    document.getElementById('btn-sansu-lesson-done')?.addEventListener('click', () => {
      SansuApp.saveExplanationDone(1);
      document.querySelectorAll('.unit-tab')[1]?.click();
    });
  }

  // -------- 練習問題 --------
  function startPractice(onComplete) {
    renderQuiz({
      containerId: 'sansu-unit1-practice',
      questions:   PRACTICE_QUESTIONS,
      mode:        'practice',
      onComplete,
    });
  }

  // -------- テスト --------
  function startTest(onComplete) {
    renderQuiz({
      containerId: 'sansu-unit1-test',
      questions:   getTestQuestions(),
      mode:        'test',
      onComplete,
    });
  }

  // -------- 共通クイズレンダラー --------
  function renderQuiz({ containerId, questions, mode, onComplete }) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let qIndex = 0;
    let score   = 0;
    const results = new Array(questions.length).fill(null);

    function render() {
      if (qIndex >= questions.length) { showResult(); return; }

      const q = questions[qIndex];
      const dots = questions.map((_, i) => {
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
               inputmode="numeric" placeholder="こたえ" autocomplete="off">
             <button class="btn-check">かくにん</button>
           </div>`;

      container.innerHTML = `
        <div class="quiz-progress">
          <div class="quiz-progress-dots">${dots}</div>
          <div class="quiz-count">${qIndex + 1}/${questions.length}</div>
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
          : `❌ ざんねん... 正しいこたえは <strong>${q.answer}</strong> だよ。${mode === 'practice' && q.hint ? `<br><small>${q.hint}</small>` : ''}`;

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
      const stars   = Progress.calcStars(score, questions.length);
      const starStr = '⭐'.repeat(stars) + '☆'.repeat(3 - stars);

      let msg, mascot;
      if (stars === 3)      { msg = 'かんぺき！すごいね！✨';              mascot = '🎉'; }
      else if (stars === 2) { msg = 'よくできました！もうすこしで満点！';  mascot = '😊'; }
      else if (stars === 1) { msg = 'がんばりました！もう一度やってみよう！'; mascot = '💪'; }
      else                  { msg = 'もう一度チャレンジしてみよう！';      mascot = '🌱'; }

      container.innerHTML = `
        <div class="result-card pop-in">
          <div class="result-mascot">${mascot}</div>
          <div class="result-title">おわった！</div>
          <div class="result-score">${score}<span> / ${questions.length}問せいかい</span></div>
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
        SansuApp.showPage('home');
      });

      onComplete({ score, maxScore: questions.length, stars });
    }

    render();
  }

  // -------- 星エフェクト --------
  function burstStars() {
    const emojis = ['⭐', '✨', '🌟', '💫', '🎉'];
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
