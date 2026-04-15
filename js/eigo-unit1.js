// ========== 英語 単元1「Hello! あいさつをしよう」 ==========

const EigoUnit1 = (() => {

  const LESSONS = [
    {
      title: '👋 英語のあいさつ',
      html: `
        <p class="lesson-text">
          英語でのあいさつを覚えよう！<br>
          時間や場面によって使い分けるよ。
        </p>
        <div class="lesson-example">
          <div class="lesson-example-title">場面別あいさつ</div>
          <p>🌅 <strong>Good morning!</strong>（グッド モーニング）→ おはようございます</p>
          <p>☀️ <strong>Hello! / Hi!</strong>（ハロー / ハイ）→ こんにちは</p>
          <p>🌆 <strong>Good afternoon!</strong>（グッド アフタヌーン）→ こんにちは（午後）</p>
          <p>🌙 <strong>Good evening!</strong>（グッド イーブニング）→ こんばんは</p>
          <p>🌛 <strong>Good night!</strong>（グッド ナイト）→ おやすみなさい</p>
          <p>👋 <strong>Goodbye! / Bye!</strong>（グッバイ / バイ）→ さようなら</p>
        </div>
      `
    },
    {
      title: '😊 気持ちを伝えよう',
      html: `
        <p class="lesson-text">
          「元気ですか？」と聞かれたら、英語で答えよう！
        </p>
        <div class="lesson-highlight">
          「How are you?」（ハウ アー ユー）→ 元気ですか？
        </div>
        <div class="lesson-example">
          <div class="lesson-example-title">気持ちの表現</div>
          <p>😊 <strong>I'm fine.</strong>（アイム ファイン）→ 元気です</p>
          <p>😄 <strong>I'm happy.</strong>（アイム ハッピー）→ うれしいです</p>
          <p>😢 <strong>I'm sad.</strong>（アイム サッド）→ かなしいです</p>
          <p>😴 <strong>I'm sleepy.</strong>（アイム スリーピー）→ ねむいです</p>
          <p>😋 <strong>I'm hungry.</strong>（アイム ハングリー）→ おなかがすいています</p>
        </div>
      `
    },
    {
      title: '🙋 自己紹介（じこしょうかい）',
      html: `
        <p class="lesson-text">
          英語で自分の名前を伝えよう！
        </p>
        <div class="kanji-card">
          <div class="kanji-big">👤</div>
          <div class="kanji-reading">My name is ～.</div>
          <div class="kanji-meaning">（マイ ネーム イズ）<br>わたしの名前は〇〇です。</div>
          <div class="kanji-example">例: My name is Taro. → わたしの名前はたろうです。</div>
        </div>
        <div class="lesson-example">
          <div class="lesson-example-title">はじめて会ったとき</div>
          <p>🤝 <strong>Nice to meet you!</strong>（ナイス トゥ ミート ユー）</p>
          <p>→ よろしくおねがいします！</p>
          <p>🤝 <strong>Nice to meet you, too!</strong></p>
          <p>→ こちらこそ、よろしく！</p>
        </div>
      `
    },
    {
      title: '🙏 感謝とあやまり',
      html: `
        <p class="lesson-text">
          「ありがとう」や「ごめんなさい」も英語で言えるようになろう！
        </p>
        <div class="lesson-example">
          <div class="lesson-example-title">感謝・あやまりの表現</div>
          <p>😊 <strong>Thank you!</strong>（サンキュー）→ ありがとう！</p>
          <p>😊 <strong>Thank you very much!</strong>（サンキュー ベリー マッチ）→ どうもありがとう！</p>
          <p>😊 <strong>You're welcome!</strong>（ユア ウェルカム）→ どういたしまして！</p>
          <p>😅 <strong>Sorry!</strong>（ソーリー）→ ごめんなさい！</p>
          <p>🙇 <strong>Excuse me.</strong>（エクスキューズ ミー）→ すみません</p>
        </div>
      `
    },
    {
      title: '✅ あいさつまとめ',
      html: `
        <p class="lesson-text">
          覚えたあいさつを使いこなそう！<br>
          場面に合った英語を選ぼう。
        </p>
        <div class="lesson-example">
          <div class="lesson-example-title">まとめチェック</div>
          <p>🌅 朝会ったとき → <strong>Good morning!</strong></p>
          <p>☀️ 昼に会ったとき → <strong>Hello! / Hi!</strong></p>
          <p>👋 わかれるとき → <strong>Goodbye! / Bye!</strong></p>
          <p>😊 元気かたずねる → <strong>How are you?</strong></p>
          <p>😊 元気と答える → <strong>I'm fine.</strong></p>
          <p>🤝 はじめて会う → <strong>Nice to meet you!</strong></p>
          <p>🙏 感謝する → <strong>Thank you!</strong></p>
          <p>😅 あやまる → <strong>Sorry!</strong></p>
        </div>
        <div class="lesson-highlight">
          英語のあいさつは笑顔で元気よく言おう！😊
        </div>
      `
    }
  ];

  const PRACTICE_QUESTIONS = [
    {
      type: 'choice',
      question: '「こんにちは」の英語は？',
      choices: ['Hello!', 'Goodbye!', 'Thank you!', 'Sorry!'],
      answer: 'Hello!',
      hint: '「ハロー！」と発音するよ。Hi! も同じ意味だよ！'
    },
    {
      type: 'choice',
      question: '「ありがとう」の英語は？',
      choices: ['Thank you!', 'Sorry!', 'Please!', 'Excuse me!'],
      answer: 'Thank you!',
      hint: '「サンキュー！」と発音するよ！'
    },
    {
      type: 'choice',
      question: '「おはようございます」の英語は？',
      choices: ['Good morning!', 'Good night!', 'Good afternoon!', 'Good evening!'],
      answer: 'Good morning!',
      hint: '「グッド モーニング！」。朝のあいさつだよ！'
    },
    {
      type: 'choice',
      question: '「さようなら」の英語は？',
      choices: ['Goodbye!', 'Hello!', 'Sorry!', 'Thank you!'],
      answer: 'Goodbye!',
      hint: '「グッバイ！」または「バイ！」ともいうよ！'
    },
    {
      type: 'choice',
      question: '「ごめんなさい」の英語は？',
      choices: ['Sorry!', 'Thank you!', 'Please!', 'Hello!'],
      answer: 'Sorry!',
      hint: '「ソーリー！」と発音するよ！'
    },
    {
      type: 'choice',
      question: '「元気ですか？」の英語は？',
      choices: ['How are you?', 'What is this?', 'How old are you?', 'What do you like?'],
      answer: 'How are you?',
      hint: '「ハウ アー ユー？」と発音するよ！'
    },
    {
      type: 'choice',
      question: '「私の名前は〇〇です」の英語は？',
      choices: ['My name is ～.', 'I like ～.', 'I have ～.', 'This is ～.'],
      answer: 'My name is ～.',
      hint: '「マイ ネーム イズ」と発音するよ！'
    },
    {
      type: 'choice',
      question: '「よろしくおねがいします」の英語は？',
      choices: ['Nice to meet you!', 'See you!', 'Thank you!', "You're welcome!"],
      answer: 'Nice to meet you!',
      hint: '「ナイス トゥ ミート ユー！」と発音するよ！'
    },
  ];

  const TEST_QUESTION_BANK = (() => {
    const bank = [];
    const qs = [
      // ===== あいさつ・基本表現 (60問) =====
      { q: '「こんにちは」の英語は？', c: ['Hello!', 'Goodbye!', 'Thank you!', 'Sorry!'], a: 'Hello!' },
      { q: '「ありがとう」の英語は？', c: ['Thank you!', 'Sorry!', 'Please!', 'Hello!'], a: 'Thank you!' },
      { q: '「おはようございます」の英語は？', c: ['Good morning!', 'Good night!', 'Good afternoon!', 'Good evening!'], a: 'Good morning!' },
      { q: '「おやすみなさい」の英語は？', c: ['Good night!', 'Good morning!', 'Goodbye!', 'Good evening!'], a: 'Good night!' },
      { q: '「こんばんは」の英語は？', c: ['Good evening!', 'Good morning!', 'Good afternoon!', 'Good night!'], a: 'Good evening!' },
      { q: '「さようなら」の英語は？', c: ['Goodbye!', 'Hello!', 'Sorry!', 'Thank you!'], a: 'Goodbye!' },
      { q: '「ごめんなさい」の英語は？', c: ['Sorry!', 'Thank you!', 'Please!', 'Hello!'], a: 'Sorry!' },
      { q: '「どういたしまして」の英語は？', c: ["You're welcome!", 'Thank you!', 'Sorry!', 'Please!'], a: "You're welcome!" },
      { q: '「元気ですか？」の英語は？', c: ['How are you?', 'What is this?', 'How old are you?', 'What do you like?'], a: 'How are you?' },
      { q: '「元気です」の英語は？', c: ["I'm fine.", "I'm happy.", "I'm sad.", "I'm sleepy."], a: "I'm fine." },
      { q: '「うれしいです」の英語は？', c: ["I'm happy.", "I'm fine.", "I'm sad.", "I'm hungry."], a: "I'm happy." },
      { q: '「かなしいです」の英語は？', c: ["I'm sad.", "I'm happy.", "I'm fine.", "I'm sleepy."], a: "I'm sad." },
      { q: '「ねむいです」の英語は？', c: ["I'm sleepy.", "I'm fine.", "I'm hungry.", "I'm tired."], a: "I'm sleepy." },
      { q: '「おなかがすいています」の英語は？', c: ["I'm hungry.", "I'm happy.", "I'm sleepy.", "I'm fine."], a: "I'm hungry." },
      { q: '「つかれました」の英語は？', c: ["I'm tired.", "I'm fine.", "I'm happy.", "I'm sad."], a: "I'm tired." },
      { q: '「すごくいいです」の英語は？', c: ["I'm great!", "I'm fine.", "I'm happy.", "I'm tired."], a: "I'm great!" },
      { q: '「私の名前は〇〇です」の英語は？', c: ['My name is ～.', 'I like ～.', 'I have ～.', 'This is ～.'], a: 'My name is ～.' },
      { q: '「よろしくおねがいします」の英語は？', c: ['Nice to meet you!', 'See you!', 'Thank you!', "You're welcome!"], a: 'Nice to meet you!' },
      { q: '「すみません」の英語は？', c: ['Excuse me.', 'Sorry!', 'Thank you!', 'Please!'], a: 'Excuse me.' },
      { q: '「おねがいします」の英語は？', c: ['Please.', 'Sorry!', 'Thank you!', 'Excuse me.'], a: 'Please.' },
      { q: '「はい」の英語は？', c: ['Yes.', 'No.', 'OK.', 'Please.'], a: 'Yes.' },
      { q: '「いいえ」の英語は？', c: ['No.', 'Yes.', 'OK.', 'Please.'], a: 'No.' },
      { q: '「こんにちは（午後）」の英語は？', c: ['Good afternoon!', 'Good morning!', 'Good evening!', 'Good night!'], a: 'Good afternoon!' },
      { q: '「Hello」の意味は？', c: ['こんにちは', 'さようなら', 'ありがとう', 'ごめんなさい'], a: 'こんにちは' },
      { q: '「Good morning」の意味は？', c: ['おはようございます', 'おやすみなさい', 'こんばんは', 'こんにちは'], a: 'おはようございます' },
      { q: '「Goodbye」の意味は？', c: ['さようなら', 'こんにちは', 'ありがとう', 'ごめんなさい'], a: 'さようなら' },
      { q: '「Thank you」の意味は？', c: ['ありがとう', 'ごめんなさい', 'こんにちは', 'さようなら'], a: 'ありがとう' },
      { q: '「Sorry」の意味は？', c: ['ごめんなさい', 'ありがとう', 'こんにちは', 'さようなら'], a: 'ごめんなさい' },
      { q: '「Good night」の意味は？', c: ['おやすみなさい', 'おはようございます', 'こんばんは', 'さようなら'], a: 'おやすみなさい' },
      { q: '「Good evening」の意味は？', c: ['こんばんは', 'おはようございます', 'こんにちは', 'おやすみなさい'], a: 'こんばんは' },
      { q: '「How are you?」の意味は？', c: ['元気ですか？', '名前は何ですか？', 'いくつですか？', 'どこですか？'], a: '元気ですか？' },
      { q: '「I\'m fine.」の意味は？', c: ['元気です', 'かなしいです', 'ねむいです', 'おなかがすいています'], a: '元気です' },
      { q: '「I\'m happy.」の意味は？', c: ['うれしいです', 'かなしいです', 'ねむいです', '元気です'], a: 'うれしいです' },
      { q: '「I\'m sad.」の意味は？', c: ['かなしいです', 'うれしいです', '元気です', 'ねむいです'], a: 'かなしいです' },
      { q: '「I\'m sleepy.」の意味は？', c: ['ねむいです', 'かなしいです', 'おなかがすいています', '元気です'], a: 'ねむいです' },
      { q: '「I\'m hungry.」の意味は？', c: ['おなかがすいています', 'ねむいです', '元気です', 'うれしいです'], a: 'おなかがすいています' },
      { q: '「Nice to meet you!」の意味は？', c: ['よろしくおねがいします', 'ありがとう', 'さようなら', 'こんにちは'], a: 'よろしくおねがいします' },
      { q: '「You\'re welcome!」の意味は？', c: ['どういたしまして', 'ありがとう', 'ごめんなさい', 'さようなら'], a: 'どういたしまして' },
      { q: '「Excuse me.」の意味は？', c: ['すみません', 'ごめんなさい', 'ありがとう', 'さようなら'], a: 'すみません' },
      { q: '「Please.」の意味は？', c: ['おねがいします', 'すみません', 'ありがとう', 'ごめんなさい'], a: 'おねがいします' },
      { q: '「Yes.」の意味は？', c: ['はい', 'いいえ', 'そうです', 'ちがいます'], a: 'はい' },
      { q: '「No.」の意味は？', c: ['いいえ', 'はい', 'わかりません', 'そうです'], a: 'いいえ' },
      { q: '「My name is ～.」の意味は？', c: ['私の名前は〜です', '私は〜が好きです', 'これは〜です', '私は〜をもっています'], a: '私の名前は〜です' },
      { q: '「Hi!」の意味は？', c: ['こんにちは', 'さようなら', 'おはよう', 'こんばんは'], a: 'こんにちは' },
      { q: '「Bye!」の意味は？', c: ['さようなら', 'こんにちは', 'おはよう', 'ありがとう'], a: 'さようなら' },
      { q: '「Good afternoon」の意味は？', c: ['こんにちは（午後）', 'おはようございます', 'こんばんは', 'おやすみなさい'], a: 'こんにちは（午後）' },
      { q: '「I\'m tired.」の意味は？', c: ['つかれました', 'ねむいです', 'かなしいです', '元気です'], a: 'つかれました' },
      { q: '「I\'m great!」の意味は？', c: ['すごくいいです', '元気です', 'うれしいです', 'ねむいです'], a: 'すごくいいです' },
      { q: '朝のあいさつはどれ？', c: ['Good morning!', 'Good evening!', 'Good night!', 'Goodbye!'], a: 'Good morning!' },
      { q: '夜のあいさつ（寝る前）はどれ？', c: ['Good night!', 'Good evening!', 'Good morning!', 'Goodbye!'], a: 'Good night!' },
      { q: '夕方・夜に会ったときのあいさつはどれ？', c: ['Good evening!', 'Good morning!', 'Good night!', 'Hello!'], a: 'Good evening!' },
      { q: '別れるときのあいさつはどれ？', c: ['Goodbye!', 'Hello!', 'Good morning!', 'Thank you!'], a: 'Goodbye!' },
      { q: 'はじめて会ったときに使う言葉はどれ？', c: ['Nice to meet you!', 'How are you?', 'Goodbye!', 'Thank you!'], a: 'Nice to meet you!' },
      { q: '感謝するときに使う言葉はどれ？', c: ['Thank you!', 'Sorry!', 'Goodbye!', 'Excuse me.'], a: 'Thank you!' },
      { q: 'あやまるときに使う言葉はどれ？', c: ['Sorry!', 'Thank you!', 'Please!', 'Hello!'], a: 'Sorry!' },
      { q: '「Thank you very much!」の意味は？', c: ['どうもありがとう！', 'どういたしまして', 'すみません', 'ごめんなさい'], a: 'どうもありがとう！' },
      { q: '「どうもありがとう！」の英語は？', c: ['Thank you very much!', 'Thank you!', "You're welcome!", 'Sorry!'], a: 'Thank you very much!' },
      { q: '「See you!」の意味は？', c: ['またね！', 'こんにちは', 'ありがとう', 'はじめまして'], a: 'またね！' },
      { q: '「またね！」の英語は？', c: ['See you!', 'Goodbye!', 'Hello!', 'Nice to meet you!'], a: 'See you!' },
      { q: 'Is "Hello" a greeting（あいさつ）?', c: ['Yes', 'No', 'Maybe', 'I don\'t know'], a: 'Yes' },

      // ===== 数字 1-20 (40問) =====
      { q: '「1」の英語は？', c: ['one', 'two', 'three', 'four'], a: 'one' },
      { q: '「2」の英語は？', c: ['two', 'one', 'three', 'four'], a: 'two' },
      { q: '「3」の英語は？', c: ['three', 'one', 'two', 'four'], a: 'three' },
      { q: '「4」の英語は？', c: ['four', 'three', 'five', 'two'], a: 'four' },
      { q: '「5」の英語は？', c: ['five', 'four', 'six', 'three'], a: 'five' },
      { q: '「6」の英語は？', c: ['six', 'five', 'seven', 'four'], a: 'six' },
      { q: '「7」の英語は？', c: ['seven', 'six', 'eight', 'five'], a: 'seven' },
      { q: '「8」の英語は？', c: ['eight', 'seven', 'nine', 'six'], a: 'eight' },
      { q: '「9」の英語は？', c: ['nine', 'eight', 'ten', 'seven'], a: 'nine' },
      { q: '「10」の英語は？', c: ['ten', 'nine', 'eleven', 'eight'], a: 'ten' },
      { q: '「11」の英語は？', c: ['eleven', 'ten', 'twelve', 'nine'], a: 'eleven' },
      { q: '「12」の英語は？', c: ['twelve', 'eleven', 'thirteen', 'ten'], a: 'twelve' },
      { q: '「13」の英語は？', c: ['thirteen', 'twelve', 'fourteen', 'eleven'], a: 'thirteen' },
      { q: '「14」の英語は？', c: ['fourteen', 'thirteen', 'fifteen', 'twelve'], a: 'fourteen' },
      { q: '「15」の英語は？', c: ['fifteen', 'fourteen', 'sixteen', 'thirteen'], a: 'fifteen' },
      { q: '「16」の英語は？', c: ['sixteen', 'fifteen', 'seventeen', 'fourteen'], a: 'sixteen' },
      { q: '「17」の英語は？', c: ['seventeen', 'sixteen', 'eighteen', 'fifteen'], a: 'seventeen' },
      { q: '「18」の英語は？', c: ['eighteen', 'seventeen', 'nineteen', 'sixteen'], a: 'eighteen' },
      { q: '「19」の英語は？', c: ['nineteen', 'eighteen', 'twenty', 'seventeen'], a: 'nineteen' },
      { q: '「20」の英語は？', c: ['twenty', 'nineteen', 'eighteen', 'ten'], a: 'twenty' },
      { q: '「one」は何？', c: ['1', '2', '3', '4'], a: '1' },
      { q: '「two」は何？', c: ['2', '1', '3', '4'], a: '2' },
      { q: '「three」は何？', c: ['3', '2', '4', '1'], a: '3' },
      { q: '「four」は何？', c: ['4', '3', '5', '2'], a: '4' },
      { q: '「five」は何？', c: ['5', '4', '6', '3'], a: '5' },
      { q: '「six」は何？', c: ['6', '5', '7', '4'], a: '6' },
      { q: '「seven」は何？', c: ['7', '6', '8', '5'], a: '7' },
      { q: '「eight」は何？', c: ['8', '7', '9', '6'], a: '8' },
      { q: '「nine」は何？', c: ['9', '8', '10', '7'], a: '9' },
      { q: '「ten」は何？', c: ['10', '9', '11', '8'], a: '10' },
      { q: '「eleven」は何？', c: ['11', '10', '12', '9'], a: '11' },
      { q: '「twelve」は何？', c: ['12', '11', '13', '10'], a: '12' },
      { q: '「thirteen」は何？', c: ['13', '12', '14', '11'], a: '13' },
      { q: '「fourteen」は何？', c: ['14', '13', '15', '12'], a: '14' },
      { q: '「fifteen」は何？', c: ['15', '14', '16', '13'], a: '15' },
      { q: '「sixteen」は何？', c: ['16', '15', '17', '14'], a: '16' },
      { q: '「seventeen」は何？', c: ['17', '16', '18', '15'], a: '17' },
      { q: '「eighteen」は何？', c: ['18', '17', '19', '16'], a: '18' },
      { q: '「nineteen」は何？', c: ['19', '18', '20', '17'], a: '19' },
      { q: '「twenty」は何？', c: ['20', '19', '18', '15'], a: '20' },

      // ===== 色 (40問) =====
      { q: '「赤」の英語は？', c: ['red', 'blue', 'green', 'yellow'], a: 'red' },
      { q: '「青」の英語は？', c: ['blue', 'red', 'green', 'purple'], a: 'blue' },
      { q: '「緑」の英語は？', c: ['green', 'blue', 'red', 'yellow'], a: 'green' },
      { q: '「黄色」の英語は？', c: ['yellow', 'green', 'orange', 'red'], a: 'yellow' },
      { q: '「オレンジ」の英語は？', c: ['orange', 'yellow', 'red', 'pink'], a: 'orange' },
      { q: '「むらさき」の英語は？', c: ['purple', 'blue', 'pink', 'red'], a: 'purple' },
      { q: '「ピンク」の英語は？', c: ['pink', 'purple', 'red', 'orange'], a: 'pink' },
      { q: '「白」の英語は？', c: ['white', 'black', 'gray', 'brown'], a: 'white' },
      { q: '「黒」の英語は？', c: ['black', 'white', 'gray', 'brown'], a: 'black' },
      { q: '「茶色」の英語は？', c: ['brown', 'black', 'gray', 'orange'], a: 'brown' },
      { q: '「灰色」の英語は？', c: ['gray', 'brown', 'black', 'white'], a: 'gray' },
      { q: '「red」の意味は？', c: ['赤', '青', '緑', '黄色'], a: '赤' },
      { q: '「blue」の意味は？', c: ['青', '赤', '緑', 'むらさき'], a: '青' },
      { q: '「green」の意味は？', c: ['緑', '青', '赤', '黄色'], a: '緑' },
      { q: '「yellow」の意味は？', c: ['黄色', '緑', 'オレンジ', '赤'], a: '黄色' },
      { q: '「orange」（色）の意味は？', c: ['オレンジ', '黄色', '赤', 'ピンク'], a: 'オレンジ' },
      { q: '「purple」の意味は？', c: ['むらさき', '青', 'ピンク', '赤'], a: 'むらさき' },
      { q: '「pink」の意味は？', c: ['ピンク', 'むらさき', '赤', 'オレンジ'], a: 'ピンク' },
      { q: '「white」の意味は？', c: ['白', '黒', '灰色', '茶色'], a: '白' },
      { q: '「black」の意味は？', c: ['黒', '白', '灰色', '茶色'], a: '黒' },
      { q: '「brown」の意味は？', c: ['茶色', '黒', '灰色', 'オレンジ'], a: '茶色' },
      { q: '「gray」の意味は？', c: ['灰色', '茶色', '黒', '白'], a: '灰色' },
      { q: 'りんごの色は何というの？', c: ['red', 'blue', 'green', 'yellow'], a: 'red' },
      { q: 'バナナの色は何というの？', c: ['yellow', 'green', 'red', 'orange'], a: 'yellow' },
      { q: 'そらの色は何というの？', c: ['blue', 'green', 'red', 'purple'], a: 'blue' },
      { q: 'くさの色は何というの？', c: ['green', 'blue', 'yellow', 'brown'], a: 'green' },
      { q: 'ゆきの色は何というの？', c: ['white', 'gray', 'black', 'blue'], a: 'white' },
      { q: 'よるのそらの色は何というの？', c: ['black', 'gray', 'blue', 'white'], a: 'black' },
      { q: 'What color is a strawberry（いちご）?', c: ['red', 'blue', 'green', 'yellow'], a: 'red' },
      { q: 'What color is the sun（たいよう）?', c: ['yellow', 'blue', 'green', 'red'], a: 'yellow' },
      { q: 'What color is an orange（オレンジ）?', c: ['orange', 'red', 'yellow', 'green'], a: 'orange' },
      { q: 'What color is a panda（パンダ）?', c: ['black and white', 'brown', 'gray', 'orange'], a: 'black and white' },
      { q: '「I like red.」の意味は？', c: ['私は赤が好きです', '私は青が好きです', '赤です', '赤が見えます'], a: '私は赤が好きです' },
      { q: '「I like blue.」の意味は？', c: ['私は青が好きです', '私は緑が好きです', '青です', '青が見えます'], a: '私は青が好きです' },
      { q: '「What color?」の意味は？', c: ['何色ですか？', '何ですか？', '何個ですか？', 'どこですか？'], a: '何色ですか？' },
      { q: '「何色が好きですか？」の英語は？', c: ['What color do you like?', 'What do you like?', 'What color?', 'Do you like colors?'], a: 'What color do you like?' },
      { q: '「I like green.」の意味は？', c: ['私は緑が好きです', '私は黄色が好きです', '緑です', 'きれいな緑'], a: '私は緑が好きです' },
      { q: '「I like pink.」の意味は？', c: ['私はピンクが好きです', '私はむらさきが好きです', 'ピンクです', 'かわいいピンク'], a: '私はピンクが好きです' },
      { q: '「rainbow（にじ）」は何色あるの？（英語で）', c: ['seven', 'five', 'six', 'eight'], a: 'seven' },
      { q: '「dark blue」の意味は？', c: ['こいあお', 'うすあお', '青', 'むらさき'], a: 'こいあお' },

      // ===== 果物・食べ物 (40問) =====
      { q: '「りんご」の英語は？', c: ['apple', 'orange', 'grape', 'melon'], a: 'apple' },
      { q: '「バナナ」の英語は？', c: ['banana', 'apple', 'peach', 'cherry'], a: 'banana' },
      { q: '「オレンジ」（くだもの）の英語は？', c: ['orange', 'apple', 'grape', 'melon'], a: 'orange' },
      { q: '「いちご」の英語は？', c: ['strawberry', 'cherry', 'grape', 'peach'], a: 'strawberry' },
      { q: '「ぶどう」の英語は？', c: ['grape', 'apple', 'melon', 'peach'], a: 'grape' },
      { q: '「メロン」の英語は？', c: ['melon', 'grape', 'apple', 'orange'], a: 'melon' },
      { q: '「もも」の英語は？', c: ['peach', 'apple', 'cherry', 'grape'], a: 'peach' },
      { q: '「さくらんぼ」の英語は？', c: ['cherry', 'peach', 'strawberry', 'grape'], a: 'cherry' },
      { q: '「ごはん」の英語は？', c: ['rice', 'bread', 'cake', 'pizza'], a: 'rice' },
      { q: '「パン」の英語は？', c: ['bread', 'rice', 'cake', 'hamburger'], a: 'bread' },
      { q: '「牛乳」の英語は？', c: ['milk', 'juice', 'water', 'tea'], a: 'milk' },
      { q: '「ジュース」の英語は？', c: ['juice', 'milk', 'water', 'tea'], a: 'juice' },
      { q: '「ピザ」の英語は？', c: ['pizza', 'cake', 'bread', 'hamburger'], a: 'pizza' },
      { q: '「ハンバーガー」の英語は？', c: ['hamburger', 'pizza', 'bread', 'cake'], a: 'hamburger' },
      { q: '「ケーキ」の英語は？', c: ['cake', 'bread', 'pizza', 'hamburger'], a: 'cake' },
      { q: '「apple」の意味は？', c: ['りんご', 'バナナ', 'ぶどう', 'いちご'], a: 'りんご' },
      { q: '「banana」の意味は？', c: ['バナナ', 'りんご', 'もも', 'さくらんぼ'], a: 'バナナ' },
      { q: '「strawberry」の意味は？', c: ['いちご', 'さくらんぼ', 'ぶどう', 'もも'], a: 'いちご' },
      { q: '「grape」の意味は？', c: ['ぶどう', 'りんご', 'メロン', 'もも'], a: 'ぶどう' },
      { q: '「melon」の意味は？', c: ['メロン', 'ぶどう', 'りんご', 'オレンジ'], a: 'メロン' },
      { q: '「peach」の意味は？', c: ['もも', 'りんご', 'さくらんぼ', 'ぶどう'], a: 'もも' },
      { q: '「cherry」の意味は？', c: ['さくらんぼ', 'もも', 'いちご', 'ぶどう'], a: 'さくらんぼ' },
      { q: '「rice」の意味は？', c: ['ごはん', 'パン', 'ケーキ', 'ピザ'], a: 'ごはん' },
      { q: '「bread」の意味は？', c: ['パン', 'ごはん', 'ケーキ', 'ハンバーガー'], a: 'パン' },
      { q: '「milk」の意味は？', c: ['牛乳', 'ジュース', '水', 'お茶'], a: '牛乳' },
      { q: '「juice」の意味は？', c: ['ジュース', '牛乳', '水', 'お茶'], a: 'ジュース' },
      { q: '「pizza」の意味は？', c: ['ピザ', 'ケーキ', 'パン', 'ハンバーガー'], a: 'ピザ' },
      { q: '「hamburger」の意味は？', c: ['ハンバーガー', 'ピザ', 'パン', 'ケーキ'], a: 'ハンバーガー' },
      { q: '「cake」の意味は？', c: ['ケーキ', 'パン', 'ピザ', 'ハンバーガー'], a: 'ケーキ' },
      { q: '「I like apples.」の意味は？', c: ['私はりんごが好きです', '私はバナナが好きです', 'りんごを食べます', 'りんごがあります'], a: '私はりんごが好きです' },
      { q: '「I like pizza.」の意味は？', c: ['私はピザが好きです', '私はケーキが好きです', 'ピザを食べます', 'ピザがあります'], a: '私はピザが好きです' },
      { q: '「I like milk.」の意味は？', c: ['私は牛乳が好きです', '私はジュースが好きです', '牛乳を飲みます', '牛乳があります'], a: '私は牛乳が好きです' },
      { q: '「私はバナナが好きです」の英語は？', c: ['I like bananas.', 'I have bananas.', 'I eat bananas.', 'Bananas are good.'], a: 'I like bananas.' },
      { q: '「私はいちごが好きです」の英語は？', c: ['I like strawberries.', 'I have strawberries.', 'I eat strawberries.', 'Strawberries are good.'], a: 'I like strawberries.' },
      { q: '「Do you like apples?」の意味は？', c: ['りんごが好きですか？', 'りんごを持っていますか？', 'りんごを食べますか？', 'りんごはどこですか？'], a: 'りんごが好きですか？' },
      { q: '「What do you like?」の意味は？', c: ['何が好きですか？', '何を食べますか？', '何をしますか？', '何がありますか？'], a: '何が好きですか？' },
      { q: '「私はケーキが好きです」の英語は？', c: ['I like cake.', 'I have cake.', 'I eat cake.', 'Cake is good.'], a: 'I like cake.' },
      { q: '「orange」（くだもの）の意味は？', c: ['オレンジ', 'りんご', 'バナナ', 'メロン'], a: 'オレンジ' },
      { q: '「water」の意味は？', c: ['水', '牛乳', 'ジュース', 'お茶'], a: '水' },
      { q: '「私はごはんが好きです」の英語は？', c: ['I like rice.', 'I have rice.', 'I eat rice.', 'Rice is good.'], a: 'I like rice.' },

      // ===== 動物 (40問) =====
      { q: '「ねこ」の英語は？', c: ['cat', 'dog', 'bird', 'fish'], a: 'cat' },
      { q: '「いぬ」の英語は？', c: ['dog', 'cat', 'rabbit', 'bear'], a: 'dog' },
      { q: '「とり」の英語は？', c: ['bird', 'fish', 'cat', 'dog'], a: 'bird' },
      { q: '「さかな」の英語は？', c: ['fish', 'bird', 'dog', 'cat'], a: 'fish' },
      { q: '「うさぎ」の英語は？', c: ['rabbit', 'cat', 'dog', 'bear'], a: 'rabbit' },
      { q: '「くま」の英語は？', c: ['bear', 'rabbit', 'lion', 'elephant'], a: 'bear' },
      { q: '「ライオン」の英語は？', c: ['lion', 'bear', 'elephant', 'monkey'], a: 'lion' },
      { q: '「ぞう」の英語は？', c: ['elephant', 'lion', 'bear', 'monkey'], a: 'elephant' },
      { q: '「さる」の英語は？', c: ['monkey', 'elephant', 'lion', 'panda'], a: 'monkey' },
      { q: '「パンダ」の英語は？', c: ['panda', 'monkey', 'bear', 'rabbit'], a: 'panda' },
      { q: '「へび」の英語は？', c: ['snake', 'frog', 'fish', 'bird'], a: 'snake' },
      { q: '「かえる」の英語は？', c: ['frog', 'snake', 'fish', 'bird'], a: 'frog' },
      { q: '「cat」の意味は？', c: ['ねこ', 'いぬ', 'とり', 'さかな'], a: 'ねこ' },
      { q: '「dog」の意味は？', c: ['いぬ', 'ねこ', 'うさぎ', 'くま'], a: 'いぬ' },
      { q: '「bird」の意味は？', c: ['とり', 'さかな', 'ねこ', 'いぬ'], a: 'とり' },
      { q: '「fish」の意味は？', c: ['さかな', 'とり', 'いぬ', 'ねこ'], a: 'さかな' },
      { q: '「rabbit」の意味は？', c: ['うさぎ', 'ねこ', 'いぬ', 'くま'], a: 'うさぎ' },
      { q: '「bear」の意味は？', c: ['くま', 'うさぎ', 'ライオン', 'ぞう'], a: 'くま' },
      { q: '「lion」の意味は？', c: ['ライオン', 'くま', 'ぞう', 'さる'], a: 'ライオン' },
      { q: '「elephant」の意味は？', c: ['ぞう', 'ライオン', 'くま', 'さる'], a: 'ぞう' },
      { q: '「monkey」の意味は？', c: ['さる', 'ぞう', 'ライオン', 'パンダ'], a: 'さる' },
      { q: '「panda」の意味は？', c: ['パンダ', 'さる', 'くま', 'うさぎ'], a: 'パンダ' },
      { q: '「snake」の意味は？', c: ['へび', 'かえる', 'さかな', 'とり'], a: 'へび' },
      { q: '「frog」の意味は？', c: ['かえる', 'へび', 'さかな', 'とり'], a: 'かえる' },
      { q: '「I like dogs.」の意味は？', c: ['私はいぬが好きです', '私はねこが好きです', 'いぬがいます', 'いぬを見ます'], a: '私はいぬが好きです' },
      { q: '「I like cats.」の意味は？', c: ['私はねこが好きです', '私はいぬが好きです', 'ねこがいます', 'ねこを見ます'], a: '私はねこが好きです' },
      { q: '「I like pandas.」の意味は？', c: ['私はパンダが好きです', '私はくまが好きです', 'パンダがいます', 'パンダを見ます'], a: '私はパンダが好きです' },
      { q: '「私はうさぎが好きです」の英語は？', c: ['I like rabbits.', 'I have rabbits.', 'Rabbits are cute.', 'I see rabbits.'], a: 'I like rabbits.' },
      { q: '「私はさかなが好きです」の英語は？', c: ['I like fish.', 'I have fish.', 'Fish are nice.', 'I see fish.'], a: 'I like fish.' },
      { q: '「What animal do you like?」の意味は？', c: ['どんな動物が好きですか？', '何を食べますか？', 'どこにいますか？', '何をしますか？'], a: 'どんな動物が好きですか？' },
      { q: 'ひつじの英語は？', c: ['sheep', 'cow', 'horse', 'pig'], a: 'sheep' },
      { q: 'うしの英語は？', c: ['cow', 'sheep', 'horse', 'pig'], a: 'cow' },
      { q: 'うまの英語は？', c: ['horse', 'cow', 'sheep', 'pig'], a: 'horse' },
      { q: 'ぶたの英語は？', c: ['pig', 'cow', 'horse', 'sheep'], a: 'pig' },
      { q: 'とらの英語は？', c: ['tiger', 'lion', 'bear', 'elephant'], a: 'tiger' },
      { q: 'きりんの英語は？', c: ['giraffe', 'elephant', 'horse', 'lion'], a: 'giraffe' },
      { q: 'どんな動物がジャングルにすんでいますか（英語）？', c: ['lion', 'fish', 'frog', 'rabbit'], a: 'lion' },
      { q: '「tiger」の意味は？', c: ['とら', 'ライオン', 'くま', 'ぞう'], a: 'とら' },
      { q: '「giraffe」の意味は？', c: ['きりん', 'ぞう', 'うま', 'ライオン'], a: 'きりん' },
      { q: '「sheep」の意味は？', c: ['ひつじ', 'うし', 'うま', 'ぶた'], a: 'ひつじ' },

      // ===== スポーツ・活動 (40問) =====
      { q: '「サッカー」の英語は？', c: ['soccer', 'baseball', 'basketball', 'tennis'], a: 'soccer' },
      { q: '「野球」の英語は？', c: ['baseball', 'soccer', 'basketball', 'tennis'], a: 'baseball' },
      { q: '「バスケットボール」の英語は？', c: ['basketball', 'soccer', 'baseball', 'tennis'], a: 'basketball' },
      { q: '「水泳」の英語は？', c: ['swimming', 'running', 'tennis', 'soccer'], a: 'swimming' },
      { q: '「走ること」の英語は？', c: ['running', 'swimming', 'tennis', 'baseball'], a: 'running' },
      { q: '「テニス」の英語は？', c: ['tennis', 'soccer', 'baseball', 'basketball'], a: 'tennis' },
      { q: '「soccer」の意味は？', c: ['サッカー', '野球', 'バスケットボール', 'テニス'], a: 'サッカー' },
      { q: '「baseball」の意味は？', c: ['野球', 'サッカー', 'バスケットボール', 'テニス'], a: '野球' },
      { q: '「basketball」の意味は？', c: ['バスケットボール', 'サッカー', '野球', 'テニス'], a: 'バスケットボール' },
      { q: '「swimming」の意味は？', c: ['水泳', '走ること', 'テニス', 'サッカー'], a: '水泳' },
      { q: '「running」の意味は？', c: ['走ること', '水泳', 'テニス', '野球'], a: '走ること' },
      { q: '「tennis」の意味は？', c: ['テニス', 'サッカー', '野球', 'バスケットボール'], a: 'テニス' },
      { q: '「I can swim.」の意味は？', c: ['私は泳げます', '私は走れます', '私は飛べます', '私はおよぎが好きです'], a: '私は泳げます' },
      { q: '「I can run.」の意味は？', c: ['私は走れます', '私は泳げます', '私は飛べます', '私は走るのが好きです'], a: '私は走れます' },
      { q: '「I can\'t swim.」の意味は？', c: ['私は泳げません', '私は泳げます', '私は走れません', '私は飛べません'], a: '私は泳げません' },
      { q: '「I can\'t run fast.」の意味は？', c: ['私は速く走れません', '私は走れます', '私は速く泳げません', '私は走るのが好きではありません'], a: '私は速く走れません' },
      { q: '「私はサッカーができます」の英語は？', c: ['I can play soccer.', 'I like soccer.', 'I play soccer.', 'Soccer is fun.'], a: 'I can play soccer.' },
      { q: '「私は野球ができません」の英語は？', c: ['I can\'t play baseball.', 'I don\'t like baseball.', 'I play baseball.', 'Baseball is hard.'], a: "I can't play baseball." },
      { q: '「Can you swim?」の意味は？', c: ['泳げますか？', '泳ぎますか？', '泳ぐのが好きですか？', '泳ぎを教えてください'], a: '泳げますか？' },
      { q: '「I can play tennis.」の意味は？', c: ['私はテニスができます', '私はテニスが好きです', 'テニスをします', 'テニスは楽しいです'], a: '私はテニスができます' },
      { q: '「volleyball」の意味は？', c: ['バレーボール', 'バスケットボール', 'サッカー', 'テニス'], a: 'バレーボール' },
      { q: '「バレーボール」の英語は？', c: ['volleyball', 'basketball', 'soccer', 'tennis'], a: 'volleyball' },
      { q: '「jump」の意味は？', c: ['とぶ', '走る', '泳ぐ', '歌う'], a: 'とぶ' },
      { q: '「とぶ」の英語は？', c: ['jump', 'run', 'swim', 'sing'], a: 'jump' },
      { q: '「sing」の意味は？', c: ['歌う', 'おどる', '走る', 'とぶ'], a: '歌う' },
      { q: '「歌う」の英語は？', c: ['sing', 'dance', 'run', 'jump'], a: 'sing' },
      { q: '「dance」の意味は？', c: ['おどる', '歌う', '走る', 'とぶ'], a: 'おどる' },
      { q: '「おどる」の英語は？', c: ['dance', 'sing', 'run', 'jump'], a: 'dance' },
      { q: '「I can sing.」の意味は？', c: ['私は歌えます', '私は踊れます', '私は走れます', '私は歌が好きです'], a: '私は歌えます' },
      { q: '「I can dance.」の意味は？', c: ['私はおどれます', '私は歌えます', '私は走れます', '私はおどりが好きです'], a: '私はおどれます' },
      { q: '「I can\'t dance.」の意味は？', c: ['私はおどれません', '私はおどれます', '私は歌えません', '私は走れません'], a: '私はおどれません' },
      { q: '「What sport do you like?」の意味は？', c: ['どんなスポーツが好きですか？', '何をしますか？', 'スポーツをしますか？', 'どこでスポーツをしますか？'], a: 'どんなスポーツが好きですか？' },
      { q: '「I like soccer.」の意味は？', c: ['私はサッカーが好きです', '私はサッカーができます', 'サッカーをします', 'サッカーは楽しいです'], a: '私はサッカーが好きです' },
      { q: '「I like baseball.」の意味は？', c: ['私は野球が好きです', '私は野球ができます', '野球をします', '野球は楽しいです'], a: '私は野球が好きです' },
      { q: '「play」の意味は？', c: ['する・あそぶ', '走る', '飛ぶ', '歌う'], a: 'する・あそぶ' },
      { q: '「する・あそぶ」の英語は？', c: ['play', 'run', 'jump', 'sing'], a: 'play' },
      { q: '「I can jump high.」の意味は？', c: ['私は高くとべます', '私は速く走れます', '私はよく泳げます', '私は上手に歌えます'], a: '私は高くとべます' },
      { q: '「私はバスケットボールが好きです」の英語は？', c: ['I like basketball.', 'I can play basketball.', 'I play basketball.', 'Basketball is fun.'], a: 'I like basketball.' },
      { q: '「私は水泳ができます」の英語は？', c: ['I can swim.', 'I like swimming.', 'I swim.', 'Swimming is fun.'], a: 'I can swim.' },
      { q: '「私はテニスができません」の英語は？', c: ["I can't play tennis.", "I don't like tennis.", "I play tennis.", "Tennis is hard."], a: "I can't play tennis." },

      // ===== 形・文房具・教室 (40問) =====
      { q: '「まる」（丸い形）の英語は？', c: ['circle', 'triangle', 'square', 'heart'], a: 'circle' },
      { q: '「さんかく」（三角形）の英語は？', c: ['triangle', 'circle', 'square', 'heart'], a: 'triangle' },
      { q: '「しかく」（四角形）の英語は？', c: ['square', 'circle', 'triangle', 'heart'], a: 'square' },
      { q: '「ハート」の英語は？', c: ['heart', 'circle', 'triangle', 'square'], a: 'heart' },
      { q: '「えんぴつ」の英語は？', c: ['pencil', 'pen', 'book', 'bag'], a: 'pencil' },
      { q: '「ペン」の英語は？', c: ['pen', 'pencil', 'book', 'ruler'], a: 'pen' },
      { q: '「本」の英語は？', c: ['book', 'bag', 'desk', 'pencil'], a: 'book' },
      { q: '「かばん」の英語は？', c: ['bag', 'book', 'pen', 'desk'], a: 'bag' },
      { q: '「つくえ」の英語は？', c: ['desk', 'chair', 'board', 'bag'], a: 'desk' },
      { q: '「いす」の英語は？', c: ['chair', 'desk', 'board', 'book'], a: 'chair' },
      { q: '「黒板」の英語は？', c: ['board', 'desk', 'chair', 'book'], a: 'board' },
      { q: '「circle」の意味は？', c: ['まる', 'さんかく', 'しかく', 'ハート'], a: 'まる' },
      { q: '「triangle」の意味は？', c: ['さんかく', 'まる', 'しかく', 'ハート'], a: 'さんかく' },
      { q: '「square」の意味は？', c: ['しかく', 'まる', 'さんかく', 'ハート'], a: 'しかく' },
      { q: '「heart」の意味は？', c: ['ハート', 'まる', 'さんかく', 'しかく'], a: 'ハート' },
      { q: '「pencil」の意味は？', c: ['えんぴつ', 'ペン', '本', 'かばん'], a: 'えんぴつ' },
      { q: '「pen」の意味は？', c: ['ペン', 'えんぴつ', '本', 'ものさし'], a: 'ペン' },
      { q: '「book」の意味は？', c: ['本', 'かばん', 'つくえ', 'えんぴつ'], a: '本' },
      { q: '「bag」の意味は？', c: ['かばん', '本', 'ペン', 'つくえ'], a: 'かばん' },
      { q: '「desk」の意味は？', c: ['つくえ', 'いす', '黒板', 'かばん'], a: 'つくえ' },
      { q: '「chair」の意味は？', c: ['いす', 'つくえ', '黒板', '本'], a: 'いす' },
      { q: '「board」の意味は？', c: ['黒板', 'つくえ', 'いす', '本'], a: '黒板' },
      { q: '「ruler」の意味は？', c: ['ものさし', 'えんぴつ', 'ペン', 'かばん'], a: 'ものさし' },
      { q: '「ものさし」の英語は？', c: ['ruler', 'pencil', 'pen', 'bag'], a: 'ruler' },
      { q: '「eraser」の意味は？', c: ['消しゴム', 'えんぴつ', 'ペン', '本'], a: '消しゴム' },
      { q: '「消しゴム」の英語は？', c: ['eraser', 'pencil', 'pen', 'ruler'], a: 'eraser' },
      { q: '「scissors」の意味は？', c: ['はさみ', 'ペン', 'えんぴつ', 'ものさし'], a: 'はさみ' },
      { q: '「はさみ」の英語は？', c: ['scissors', 'pen', 'pencil', 'ruler'], a: 'scissors' },
      { q: '「window」の意味は？', c: ['まど', 'とびら', 'かべ', '床'], a: 'まど' },
      { q: '「まど」の英語は？', c: ['window', 'door', 'wall', 'floor'], a: 'window' },
      { q: '「door」の意味は？', c: ['とびら', 'まど', 'かべ', '床'], a: 'とびら' },
      { q: '「とびら」の英語は？', c: ['door', 'window', 'wall', 'floor'], a: 'door' },
      { q: '「star」（形）の意味は？', c: ['ほし形', 'まる', 'さんかく', 'しかく'], a: 'ほし形' },
      { q: '「ほし形」の英語は？', c: ['star', 'circle', 'triangle', 'square'], a: 'star' },
      { q: '「diamond」（形）の意味は？', c: ['ひし形', 'まる', 'さんかく', 'ハート'], a: 'ひし形' },
      { q: '「ひし形」の英語は？', c: ['diamond', 'circle', 'square', 'heart'], a: 'diamond' },
      { q: '「What shape is this?」の意味は？', c: ['これは何の形ですか？', 'これは何ですか？', 'これは何色ですか？', 'これはどこですか？'], a: 'これは何の形ですか？' },
      { q: '「This is a circle.」の意味は？', c: ['これはまるです', 'これはさんかくです', 'これはしかくです', 'これはハートです'], a: 'これはまるです' },
      { q: '「I have a pencil.」の意味は？', c: ['私はえんぴつをもっています', '私はえんぴつが好きです', 'えんぴつがあります', 'えんぴつをください'], a: '私はえんぴつをもっています' },
      { q: '「I have a book.」の意味は？', c: ['私は本をもっています', '私は本が好きです', '本があります', '本をください'], a: '私は本をもっています' },
    ];
    qs.forEach(({ q, c, a }) => bank.push({ type: 'choice', question: q, choices: c, answer: a }));
    return bank;
  })();

  function getTestQuestions() {
    const shuffled = [...TEST_QUESTION_BANK].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 10);
  }

  let currentLessonIndex = 0;

  function renderExplanation() {
    const container = document.getElementById('eigo-unit1-explanation');
    if (!container) return;
    const lesson = LESSONS[currentLessonIndex];
    container.innerHTML = `
      <div class="lesson-card pop-in">
        <div class="lesson-card-title">${lesson.title}</div>
        ${lesson.html}
      </div>
      <div style="display:flex; justify-content:space-between; align-items:center; margin-top:8px;">
        <button class="btn-next-lesson" id="btn-eigo-lesson-prev"
          style="background:#ccc;color:#333;${currentLessonIndex === 0 ? 'visibility:hidden' : ''}">
          ← 前へ
        </button>
        <span style="font-size:.82rem; color:var(--text-sub); font-weight:700;">
          ${currentLessonIndex + 1} / ${LESSONS.length}
        </span>
        ${currentLessonIndex < LESSONS.length - 1
          ? `<button class="btn-next-lesson" id="btn-eigo-lesson-next">次へ →</button>`
          : `<button class="btn-next-lesson" id="btn-eigo-lesson-done" style="background:linear-gradient(135deg,var(--mint),#00838F);">
               練習問題へ進む！ 🎯
             </button>`
        }
      </div>
    `;
    document.getElementById('btn-eigo-lesson-prev')?.addEventListener('click', () => {
      currentLessonIndex--;
      renderExplanation();
    });
    document.getElementById('btn-eigo-lesson-next')?.addEventListener('click', () => {
      currentLessonIndex++;
      renderExplanation();
    });
    document.getElementById('btn-eigo-lesson-done')?.addEventListener('click', () => {
      EigoApp.saveExplanationDone(1);
      document.querySelectorAll('.unit-tab')[1]?.click();
    });
  }

  function startPractice(onComplete) {
    renderQuiz({ containerId: 'eigo-unit1-practice', questions: PRACTICE_QUESTIONS, mode: 'practice', onComplete });
  }

  function startTest(onComplete) {
    renderQuiz({ containerId: 'eigo-unit1-test', questions: getTestQuestions(), mode: 'test', onComplete });
  }

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
    const shuffledQuestions = questions.map(q => ({ ...q, choices: q.choices ? shuffleArray(q.choices) : q.choices }));
    let qIndex = 0, score = 0;
    const results = new Array(shuffledQuestions.length).fill(null);

    function render() {
      if (qIndex >= shuffledQuestions.length) { showResult(); return; }
      const q = shuffledQuestions[qIndex];
      const dots = shuffledQuestions.map((_, i) => {
        let cls = i < qIndex ? (results[i] ? 'correct' : 'wrong') : i === qIndex ? 'current' : '';
        return `<div class="quiz-dot ${cls}"></div>`;
      }).join('');
      container.innerHTML = `
        <div class="quiz-progress">
          <div class="quiz-progress-dots">${dots}</div>
          <div class="quiz-count">${qIndex + 1}/${shuffledQuestions.length}</div>
        </div>
        <div class="quiz-card pop-in">
          <div class="quiz-question-num">問題 ${qIndex + 1}</div>
          <div class="quiz-question">${q.question}</div>
          <div class="quiz-choices">
            ${q.choices.map(c => `<button class="quiz-choice" data-val="${c}">${c}</button>`).join('')}
          </div>
          <div class="quiz-feedback"></div>
        </div>
        <button class="btn-quiz-next">次の問題 →</button>
      `;
      const feedbackEl = container.querySelector('.quiz-feedback');
      const nextBtn = container.querySelector('.btn-quiz-next');
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
      nextBtn?.addEventListener('click', () => { qIndex++; render(); });
    }

    function showResult() {
      const stars = Progress.calcStars(score, shuffledQuestions.length);
      const starStr = '⭐'.repeat(stars) + '☆'.repeat(3 - stars);
      let msg, mascot;
      if (stars === 3)      { msg = 'かんぺき！英語はかせだね！✨'; mascot = '🎉'; }
      else if (stars === 2) { msg = 'よくできました！もうすこし！';  mascot = '😊'; }
      else if (stars === 1) { msg = 'がんばったね！もう一度読もう！'; mascot = '💪'; }
      else                  { msg = 'もう一度チャレンジしよう！';    mascot = '🌏'; }
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
      container.querySelector('.btn-home')?.addEventListener('click', () => EigoApp.showPage('home'));
      onComplete({ score, maxScore: shuffledQuestions.length, stars });
    }

    render();
  }

  function burstStars() {
    const emojis = ['⭐', '✨', '🌟', '💫', '🌏'];
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
