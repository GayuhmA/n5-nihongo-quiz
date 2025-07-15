const vocabularyData = [
    { kanji: "一", romaji: "ichi", arti: "one" },
    { kanji: "二", romaji: "ni", arti: "two" },
    { kanji: "三", romaji: "san", arti: "three" },
    { kanji: "四", romaji: "yon", arti: "four" },
    { kanji: "五", romaji: "go", arti: "five" },
    { kanji: "六", romaji: "roku", arti: "six" },
    { kanji: "七", romaji: "nana", arti: "seven" },
    { kanji: "八", romaji: "hachi", arti: "eight" },
    { kanji: "九", romaji: "kyuu", arti: "nine" },
    { kanji: "十", romaji: "juu", arti: "ten" },
    { kanji: "百", romaji: "hyaku", arti: "hundred" },
    { kanji: "千", romaji: "sen", arti: "thousand" },
    { kanji: "万", romaji: "man", arti: "ten thousand" },
    { kanji: "人", romaji: "hito", arti: "person" },
    { kanji: "男", romaji: "otoko", arti: "man" },
    { kanji: "女", romaji: "onna", arti: "woman" },
    { kanji: "子", romaji: "ko", arti: "child" },
    { kanji: "父", romaji: "chichi", arti: "father" },
    { kanji: "母", romaji: "haha", arti: "mother" },
    { kanji: "兄", romaji: "ani", arti: "older brother" },
    { kanji: "姉", romaji: "ane", arti: "older sister" },
    { kanji: "弟", romaji: "otouto", arti: "younger brother" },
    { kanji: "妹", romaji: "imouto", arti: "younger sister" },
    { kanji: "友", romaji: "tomo", arti: "friend" },
    { kanji: "目", romaji: "me", arti: "eye" },
    { kanji: "耳", romaji: "mimi", arti: "ear" },
    { kanji: "口", romaji: "kuchi", arti: "mouth" },
    { kanji: "手", romaji: "te", arti: "hand" },
    { kanji: "足", romaji: "ashi", arti: "foot" },
    { kanji: "頭", romaji: "atama", arti: "head" },
    { kanji: "顔", romaji: "kao", arti: "face" },
    { kanji: "山", romaji: "yama", arti: "mountain" },
    { kanji: "川", romaji: "kawa", arti: "river" },
    { kanji: "水", romaji: "mizu", arti: "water" },
    { kanji: "火", romaji: "hi", arti: "fire" },
    { kanji: "木", romaji: "ki", arti: "tree" },
    { kanji: "土", romaji: "tsuchi", arti: "earth" },
    { kanji: "空", romaji: "sora", arti: "sky" },
    { kanji: "海", romaji: "umi", arti: "sea" },
    { kanji: "花", romaji: "hana", arti: "flower" },
    { kanji: "草", romaji: "kusa", arti: "grass" },
    { kanji: "犬", romaji: "inu", arti: "dog" },
    { kanji: "猫", romaji: "neko", arti: "cat" },
    { kanji: "鳥", romaji: "tori", arti: "bird" },
    { kanji: "魚", romaji: "sakana", arti: "fish" },
    { kanji: "馬", romaji: "uma", arti: "horse" },
    { kanji: "牛", romaji: "ushi", arti: "cow" },
    { kanji: "米", romaji: "kome", arti: "rice" },
    { kanji: "肉", romaji: "niku", arti: "meat" },
    { kanji: "魚", romaji: "sakana", arti: "fish" },
    { kanji: "卵", romaji: "tamago", arti: "egg" },
    { kanji: "牛乳", romaji: "gyuunyuu", arti: "milk" },
    { kanji: "茶", romaji: "cha", arti: "tea" },
    { kanji: "酒", romaji: "sake", arti: "sake" },
    { kanji: "水", romaji: "mizu", arti: "water" },
    { kanji: "日", romaji: "hi", arti: "day" },
    { kanji: "月", romaji: "tsuki", arti: "moon/month" },
    { kanji: "年", romaji: "toshi", arti: "year" },
    { kanji: "時", romaji: "toki", arti: "time" },
    { kanji: "分", romaji: "fun", arti: "minute" },
    { kanji: "今", romaji: "ima", arti: "now" },
    { kanji: "今朝", romaji: "kesa", arti: "this morning" },
    { kanji: "今日", romaji: "kyou", arti: "today" },
    { kanji: "明日", romaji: "ashita", arti: "tomorrow" },
    { kanji: "昨日", romaji: "kinou", arti: "yesterday" },
    { kanji: "赤", romaji: "aka", arti: "red" },
    { kanji: "青", romaji: "ao", arti: "blue" },
    { kanji: "白", romaji: "shiro", arti: "white" },
    { kanji: "黒", romaji: "kuro", arti: "black" },
    { kanji: "黄", romaji: "kiiro", arti: "yellow" },
    { kanji: "緑", romaji: "midori", arti: "green" },
    { kanji: "行", romaji: "iku", arti: "to go" },
    { kanji: "来", romaji: "kuru", arti: "to come" },
    { kanji: "見", romaji: "miru", arti: "to see" },
    { kanji: "聞", romaji: "kiku", arti: "to hear" },
    { kanji: "言", romaji: "iu", arti: "to say" },
    { kanji: "読", romaji: "yomu", arti: "to read" },
    { kanji: "書", romaji: "kaku", arti: "to write" },
    { kanji: "食", romaji: "taberu", arti: "to eat" },
    { kanji: "飲", romaji: "nomu", arti: "to drink" },
    { kanji: "買", romaji: "kau", arti: "to buy" },
    { kanji: "売", romaji: "uru", arti: "to sell" },
    { kanji: "大", romaji: "ookii", arti: "big" },
    { kanji: "小", romaji: "chiisai", arti: "small" },
    { kanji: "新", romaji: "atarashii", arti: "new" },
    { kanji: "古", romaji: "furui", arti: "old" },
    { kanji: "高", romaji: "takai", arti: "high/expensive" },
    { kanji: "安", romaji: "yasui", arti: "cheap" },
    { kanji: "良", romaji: "yoi", arti: "good" },
    { kanji: "悪", romaji: "warui", arti: "bad" },
    { kanji: "美", romaji: "utsukushii", arti: "beautiful" },
    { kanji: "強", romaji: "tsuyoi", arti: "strong" },
    { kanji: "弱", romaji: "yowai", arti: "weak" },
    { kanji: "家", romaji: "ie", arti: "house" },
    { kanji: "学校", romaji: "gakkou", arti: "school" },
    { kanji: "会社", romaji: "kaisha", arti: "company" },
    { kanji: "店", romaji: "mise", arti: "shop" },
    { kanji: "駅", romaji: "eki", arti: "station" },
    { kanji: "病院", romaji: "byouin", arti: "hospital" },
    { kanji: "銀行", romaji: "ginkou", arti: "bank" },
    { kanji: "図書館", romaji: "toshokan", arti: "library" },
    { kanji: "上", romaji: "ue", arti: "up/above" },
    { kanji: "下", romaji: "shita", arti: "down/below" },
    { kanji: "左", romaji: "hidari", arti: "left" },
    { kanji: "右", romaji: "migi", arti: "right" },
    { kanji: "中", romaji: "naka", arti: "inside" },
    { kanji: "外", romaji: "soto", arti: "outside" },
    { kanji: "車", romaji: "kuruma", arti: "car" },
    { kanji: "電車", romaji: "densha", arti: "train" },
    { kanji: "バス", romaji: "basu", arti: "bus" },
    { kanji: "自転車", romaji: "jitensha", arti: "bicycle" },
    { kanji: "飛行機", romaji: "hikouki", arti: "airplane" },
    { kanji: "本", romaji: "hon", arti: "book" },
    { kanji: "紙", romaji: "kami", arti: "paper" },
    { kanji: "机", romaji: "tsukue", arti: "desk" },
    { kanji: "椅子", romaji: "isu", arti: "chair" },
    { kanji: "電話", romaji: "denwa", arti: "telephone" },
    { kanji: "時計", romaji: "tokei", arti: "clock" },
    { kanji: "鞄", romaji: "kaban", arti: "bag" },
    { kanji: "服", romaji: "fuku", arti: "clothes" },
    { kanji: "靴", romaji: "kutsu", arti: "shoes" },
    { kanji: "帽子", romaji: "boushi", arti: "hat" },
    { kanji: "天気", romaji: "tenki", arti: "weather" },
    { kanji: "雨", romaji: "ame", arti: "rain" },
    { kanji: "雪", romaji: "yuki", arti: "snow" },
    { kanji: "風", romaji: "kaze", arti: "wind" },
    { kanji: "春", romaji: "haru", arti: "spring" },
    { kanji: "夏", romaji: "natsu", arti: "summer" },
    { kanji: "秋", romaji: "aki", arti: "autumn" },
    { kanji: "冬", romaji: "fuyu", arti: "winter" },
    { kanji: "名前", romaji: "namae", arti: "name" },
    { kanji: "国", romaji: "kuni", arti: "country" },
    { kanji: "言葉", romaji: "kotoba", arti: "word" },
    { kanji: "仕事", romaji: "shigoto", arti: "work" },
    { kanji: "勉強", romaji: "benkyou", arti: "study" },
    { kanji: "遊", romaji: "asobu", arti: "to play" },
    { kanji: "休", romaji: "yasumu", arti: "to rest" },
    { kanji: "寝", romaji: "neru", arti: "to sleep" },
    { kanji: "起", romaji: "okiru", arti: "to wake up" },
    { kanji: "洗", romaji: "arau", arti: "to wash" },
    { kanji: "切", romaji: "kiru", arti: "to cut" },
    { kanji: "開", romaji: "hiraku", arti: "to open" },
    { kanji: "閉", romaji: "shimeru", arti: "to close" }
];

let gameState = {
    score: 0,
    lives: 3,
    unansweredQuestions: [],  
    currentQuestionData: null,
    answered: false
};

const screens = {
    start: document.getElementById('startScreen'),
    quiz: document.getElementById('quizScreen'),
    gameOver: document.getElementById('gameOverScreen'),
    victory: document.getElementById('victoryScreen')
};

const elements = {
    highScore: document.getElementById('highScore'),
    currentScore: document.getElementById('currentScore'),
    questionNumber: document.getElementById('questionNumber'),
    totalQuestions: document.getElementById('totalQuestions'),
    questionText: document.getElementById('questionText'),
    kanjiText: document.getElementById('kanjiText'),
    romajiText: document.getElementById('romajiText'),
    optionBtns: document.querySelectorAll('.option-btn'),
    hearts: document.querySelectorAll('.hearts i'),
    finalScore: document.getElementById('finalScore'),
    finalHighScore: document.getElementById('finalHighScore'),
    victoryScore: document.getElementById('victoryScore'),
    victoryHighScore: document.getElementById('victoryHighScore')
};

function initGame() {
    loadHighScore();
    updateHighScoreDisplay();
}

function loadHighScore() {
    const saved = localStorage.getItem('jlptN5HighScore');
    return saved ? parseInt(saved) : 0;
}

function saveHighScore(score) {
    const currentHigh = loadHighScore();
    if (score > currentHigh) {
        localStorage.setItem('jlptN5HighScore', score.toString());
        return true;
    }
    return false;
}

function updateHighScoreDisplay() {
    const highScore = loadHighScore();
    if (elements.highScore) {
        elements.highScore.textContent = highScore;
    }
}

function showScreen(screenId) {
    const allScreens = document.querySelectorAll('.screen');
    allScreens.forEach(screen => {
        screen.classList.remove('active', 'fade-in', 'fade-out');
        screen.classList.add('hidden');
    });
    const nextScreen = screens[screenId];
    nextScreen.classList.remove('hidden');
    nextScreen.classList.add('fade-in', 'active');
    setTimeout(() => {
        nextScreen.classList.remove('fade-in');
    }, 700);
}

function startGame() {
    gameState = {
        score: 0,
        lives: 3,
        unansweredQuestions: [...vocabularyData].sort(() => Math.random() - 0.5),
        currentQuestionData: null,
        answered: false
    };
    updateDisplay();
    showScreen('quiz');
    loadQuestion();
}

function loadQuestion() {
    if (gameState.unansweredQuestions.length === 0) {
        showVictory();
        return;
    }
    const randomIdx = Math.floor(Math.random() * gameState.unansweredQuestions.length);
    gameState.currentQuestionData = gameState.unansweredQuestions[randomIdx];
    gameState.answered = false;

    elements.questionNumber.textContent = (vocabularyData.length - gameState.unansweredQuestions.length + 1);
    elements.totalQuestions.textContent = vocabularyData.length;
    elements.kanjiText.textContent = gameState.currentQuestionData.kanji;
    elements.romajiText.textContent = gameState.currentQuestionData.romaji;

    const progressBar = document.getElementById('progressBar');
    if (progressBar) {
        const percent = ((vocabularyData.length - gameState.unansweredQuestions.length) / vocabularyData.length) * 100;
        progressBar.style.width = percent + '%';
    }

    const correctAnswer = gameState.currentQuestionData.arti;
    const options = [correctAnswer];
    const otherWords = vocabularyData.filter(item => item.arti !== correctAnswer).map(item => item.arti);
    while (options.length < 4) {
        const randomWord = otherWords[Math.floor(Math.random() * otherWords.length)];
        if (!options.includes(randomWord)) {
            options.push(randomWord);
        }
    }
    options.sort(() => Math.random() - 0.5);
    elements.optionBtns.forEach((btn, index) => {
        btn.querySelector('.option-text').textContent = options[index];
        btn.className = 'option-btn py-3 rounded-xl bg-gradient-to-r from-blue-100 to-pink-100 text-gray-700 font-semibold shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300';
        btn.disabled = false;
        btn.style.pointerEvents = 'auto';
    });
}

function selectOption(selectedIndex) {
    if (gameState.answered) return;
    gameState.answered = true;
    const selectedBtn = elements.optionBtns[selectedIndex];
    const selectedAnswer = selectedBtn.querySelector('.option-text').textContent;
    const correctAnswer = gameState.currentQuestionData.arti;
    elements.optionBtns.forEach(btn => {
        btn.disabled = true;
        btn.style.pointerEvents = 'none';
    });
    if (selectedAnswer === correctAnswer) {
        selectedBtn.classList.add('ring-4', 'ring-green-300', 'bg-green-100', 'text-green-700');
        selectedBtn.classList.remove('bg-gradient-to-r', 'from-blue-100', 'to-pink-100', 'scale-105', 'ring-red-300', 'bg-red-100', 'text-red-700');
        gameState.score += 10;
        gameState.unansweredQuestions = gameState.unansweredQuestions.filter(q => q !== gameState.currentQuestionData);
        updateDisplay();
        requestAnimationFrame(() => {
            setTimeout(() => {
                loadQuestion();
            }, 800);
        });
    } else {
        gameState.lives--;
        updateDisplay();
        selectedBtn.classList.remove('ring-green-300', 'bg-green-100', 'text-green-700', 'bg-gradient-to-r', 'from-blue-100', 'to-pink-100', 'scale-105');
        selectedBtn.classList.add('ring-4', 'ring-red-300', 'bg-red-100', 'text-red-700');
        elements.optionBtns.forEach((btn, index) => {
            if (btn.querySelector('.option-text').textContent === correctAnswer) {
                btn.classList.add('ring-4', 'ring-green-300', 'bg-green-100', 'text-green-700');
                btn.classList.remove('bg-gradient-to-r', 'from-blue-100', 'to-pink-100', 'scale-105', 'ring-red-300', 'bg-red-100', 'text-red-700');
            }
        });
        requestAnimationFrame(() => {
            setTimeout(() => {
                if (gameState.lives <= 0) {
                    showGameOver();
                } else {
                    loadQuestion();
                }
            }, 1200);
        });
    }
}

function updateDisplay() {
    elements.currentScore.textContent = gameState.score;
    const hearts = document.querySelectorAll('.hearts span');
    hearts.forEach((heart, index) => {
        if (index < gameState.lives) {
            heart.classList.remove('opacity-30', 'scale-90');
            heart.classList.add('opacity-100', 'scale-100');
        } else {
            heart.classList.add('opacity-30', 'scale-90');
            heart.classList.remove('opacity-100', 'scale-100');
        }
    });
    const progressBar = document.getElementById('progressBar');
    if (progressBar) {
        const percent = ((vocabularyData.length - gameState.unansweredQuestions.length) / vocabularyData.length) * 100;
        progressBar.style.width = percent + '%';
    }
}

function showGameOver() {
    const isNewHighScore = saveHighScore(gameState.score);
    elements.finalScore.textContent = gameState.score;
    elements.finalHighScore.textContent = loadHighScore();
    showScreen('gameOver');
}

function showVictory() {
    const isNewHighScore = saveHighScore(gameState.score);
    if (elements.victoryScore) {
        elements.victoryScore.textContent = gameState.score;
    }
    if (elements.victoryHighScore) {
        elements.victoryHighScore.textContent = loadHighScore();
    }
    showScreen('victory');
}

document.getElementById('startBtn').addEventListener('click', startGame);
document.getElementById('restartBtn').addEventListener('click', startGame);
document.getElementById('backToMenuBtn').addEventListener('click', () => {
    updateHighScoreDisplay();
    showScreen('start');
});
document.getElementById('victoryRestartBtn').addEventListener('click', startGame);
document.getElementById('victoryMenuBtn').addEventListener('click', () => {
    updateHighScoreDisplay();
    showScreen('start');
});

elements.optionBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => selectOption(index));
});

document.addEventListener('DOMContentLoaded', initGame);