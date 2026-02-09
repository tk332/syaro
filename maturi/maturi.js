// シナリオデータ
const chapter1Scenario = [
    { type: "narration", text: "その日は学園内が騒がしかった。それもそうだ。この学園に財閥のお嬢様が初めて登校すると言う話があるからだ。" },
    { type: "narration", text: "騒がしい学園の中、生徒会室から2人の男子生徒が話していた。" },
    { name: "黒波悠馬", side: "right", text: "今日から学園に来る天空財閥の〈天空あかり〉って名前のお嬢様が来る。クラスは俺たちと同じだ。朝の会の前にお嬢様は学園長室に行くから俺達も学園の代表として挨拶しに行くぞ。んで後は………って、おい。聞いてるのか？誠？" },
    { type: "narration", text: "机に伏せて寝ていた男子生徒は起き上がると" },
    { name: "炎魔誠", side: "right", text: "ふぇ…？えっと………ヤッヤダナ、キイテタヨ？クラスメイトの話……だよな？" },
    { name: "黒波悠馬", side: "right", text: "うん。あっそうだ。起きてたんだったら今言ったこと覚えてるよな？(*^^*)" },
    { type: "narration", text: "誠の考えを見透かしたように悠馬は誠を煽った。" },
    { name: "炎魔誠", side: "right", text: "すんませんでした。。。" },
    { type: "narration", text: "ペシッ！！ 悠馬は持っていた紙を細く丸めて誠の頭に向かってフルスイングした。" },
    { name: "炎魔誠", side: "right", text: "痛っええええええ！何するんだよ！" },
    { name: "黒波悠馬", side: "right", text: "おっとすまねぇｗつい手が滑ったぜｗ" },
    { name: "黒波悠馬", side: "right", text: "てかお前も一応この学園の副会長なんだからもう少し真面目にしろよな？今度は覚えろ？（天空あかり）同じクラス！" },
    { name: "炎魔誠", side: "right", text: "あかりちゃんね。俺らと同じクラスか。おっおぼえたからもう睨まないでくれ、、、:( ;´꒳`;):" },
    { type: "narration", text: "誠は悠馬の冷ややかな笑顔を見て半歩引いた。その頃、同時刻では、、、、" },
    { name: "天空あかり", side: "right", text: "はぁ〜…気が乗らん…でも入学してるからなぁ〜。逃げられないんよｗ" },
    { name: "メイド（アシュリー）", side: "left", text: "はい。しかし、あかり様はまだ入学してからまだ1度も登校しておりませんので、学園長と生徒会長殿には会うようにとお父様からの伝言でございます。" },
    { name: "天空あかり", side: "right", text: "うん。でもちょっと気分がのらないんだよ…" },
    { type: "narration", text: "あかりが落ち込んでいると、" },
    { name: "メイド（アシュリー）", side: "left", text: "ふっふふ笑 そう言うと思いました！実は今の生徒会長と副会長はア・イ・ド・ルレベルのイケメンらしいですよ！" },
    { type: "narration", text: "イケメンと聞いたあかりはベッドから起き上がった" },
    { name: "天空あかり", side: "right", text: "え？！ほんま？！っちょご飯食べてくる。制服の準備よっろ〜" },
    { type: "narration", text: "ベッドから飛び起きたあかりは全速力で部屋を出ていった。その後ろからメイドが、" },
    { name: "メイド（アシュリー）", side: "left", text: "廊下は走っちゃダメですよ〜転んじゃいますからね！焦らずゆっくり食べてくださ〜い！じゃないと喉に詰まらせてぽっくり逝きますからね！" },
    { name: "天空あかり", side: "right", text: "う〜い♪" },
    { type: "narration", text: "朝食が終わったあかりは制服に着替えて、メイドから荷物を受け取った。" },
    { name: "天空あかり", side: "right", text: "ありがと♪さっすが〜♪行ってきまーす！イケm.........じゃなくて学校学校♡" },
    { type: "narration", text: "内心イケメンに会いたいだけのあかりはメイドから荷物を受けって外で待っている車に転がり込んだ。" }
];

let currentIndex = 0;
let currentStory = "";

function checkPassword() {
    const input = document.getElementById('pass-input').value;
    if (input === "password") {
        switchScreen('login-screen', 'intro-screen');
    } else {
        document.getElementById('error-msg').innerText = "パスワードが正しくありません";
    }
}

function showStorySelection() {
    const current = document.querySelector('.screen:not(.hidden)').id;
    switchScreen(current, 'selection-screen');
}

function startStory(type, total) {
    currentStory = type;
    currentIndex = 0;
    switchScreen('selection-screen', 'reader-screen');
    
    document.getElementById('current-chapter-info').innerText = `${type} 第1話`;
    document.getElementById('log-container').innerHTML = "";
    document.getElementById('tap-guide').innerText = "TAP TO NEXT...";
    
    const title = document.getElementById('story-title-display');
    title.classList.remove('title-visible');
    setTimeout(() => title.classList.add('title-visible'), 100);
}

function handleNextClick() {
    if (currentIndex < chapter1Scenario.length) {
        const item = chapter1Scenario[currentIndex];
        const container = document.getElementById('log-container');
        const msgDiv = document.createElement('div');
        
        if (item.type === 'narration') {
            msgDiv.className = 'log-narration';
            msgDiv.innerHTML = `<p>${item.text}</p>`;
        } else {
            msgDiv.className = `log-chat ${item.side}`;
            msgDiv.innerHTML = `<span class="log-name">${item.name}</span><p class="log-text">${item.text}</p>`;
        }
        
        container.appendChild(msgDiv);
        msgDiv.scrollIntoView({ behavior: 'smooth', block: 'end' });
        currentIndex++;
        
        if (currentIndex === chapter1Scenario.length) {
            document.getElementById('tap-guide').innerText = "第1話 完結";
        }
    }
}

function switchScreen(hideId, showId) {
    document.getElementById(hideId).classList.add('hidden');
    document.getElementById(showId).classList.remove('hidden');
    window.scrollTo(0,0);
}