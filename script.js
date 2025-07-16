let currentLanguage = 'en';

const vocabularyData = [
    { kanji: "一", romaji: "ichi", arti: "one", arti_id: "satu" },
    { kanji: "二", romaji: "ni", arti: "two", arti_id: "dua" },
    { kanji: "三", romaji: "san", arti: "three", arti_id: "tiga" },
    { kanji: "四", romaji: "yon", arti: "four", arti_id: "empat" },
    { kanji: "五", romaji: "go", arti: "five", arti_id: "lima" },
    { kanji: "六", romaji: "roku", arti: "six", arti_id: "enam" },
    { kanji: "七", romaji: "nana", arti: "seven", arti_id: "tujuh" },
    { kanji: "八", romaji: "hachi", arti: "eight", arti_id: "delapan" },
    { kanji: "九", romaji: "kyuu", arti: "nine", arti_id: "sembilan" },
    { kanji: "十", romaji: "juu", arti: "ten", arti_id: "sepuluh" },
    { kanji: "百", romaji: "hyaku", arti: "hundred", arti_id: "seratus" },
    { kanji: "千", romaji: "sen", arti: "thousand", arti_id: "seribu" },
    { kanji: "万", romaji: "man", arti: "ten thousand", arti_id: "sepuluh ribu" },
    { kanji: "人", romaji: "hito", arti: "person", arti_id: "orang" },
    { kanji: "男", romaji: "otoko", arti: "man", arti_id: "pria" },
    { kanji: "女", romaji: "onna", arti: "woman", arti_id: "wanita" },
    { kanji: "子", romaji: "ko", arti: "child", arti_id: "anak" },
    { kanji: "父", romaji: "chichi", arti: "father", arti_id: "ayah" },
    { kanji: "母", romaji: "haha", arti: "mother", arti_id: "ibu" },
    { kanji: "兄", romaji: "ani", arti: "older brother", arti_id: "kakak laki-laki" },
    { kanji: "姉", romaji: "ane", arti: "older sister", arti_id: "kakak perempuan" },
    { kanji: "弟", romaji: "otouto", arti: "younger brother", arti_id: "adik laki-laki" },
    { kanji: "妹", romaji: "imouto", arti: "younger sister", arti_id: "adik perempuan" },
    { kanji: "友", romaji: "tomo", arti: "friend", arti_id: "teman" },
    { kanji: "目", romaji: "me", arti: "eye", arti_id: "mata" },
    { kanji: "耳", romaji: "mimi", arti: "ear", arti_id: "telinga" },
    { kanji: "口", romaji: "kuchi", arti: "mouth", arti_id: "mulut" },
    { kanji: "手", romaji: "te", arti: "hand", arti_id: "tangan" },
    { kanji: "足", romaji: "ashi", arti: "foot", arti_id: "kaki" },
    { kanji: "頭", romaji: "atama", arti: "head", arti_id: "kepala" },
    { kanji: "顔", romaji: "kao", arti: "face", arti_id: "wajah" },
    { kanji: "山", romaji: "yama", arti: "mountain", arti_id: "gunung" },
    { kanji: "川", romaji: "kawa", arti: "river", arti_id: "sungai" },
    { kanji: "水", romaji: "mizu", arti: "water", arti_id: "air" },
    { kanji: "火", romaji: "hi", arti: "fire", arti_id: "api" },
    { kanji: "木", romaji: "ki", arti: "tree", arti_id: "pohon" },
    { kanji: "土", romaji: "tsuchi", arti: "earth", arti_id: "tanah" },
    { kanji: "空", romaji: "sora", arti: "sky", arti_id: "langit" },
    { kanji: "海", romaji: "umi", arti: "sea", arti_id: "laut" },
    { kanji: "花", romaji: "hana", arti: "flower", arti_id: "bunga" },
    { kanji: "草", romaji: "kusa", arti: "grass", arti_id: "rumput" },
    { kanji: "犬", romaji: "inu", arti: "dog", arti_id: "anjing" },
    { kanji: "猫", romaji: "neko", arti: "cat", arti_id: "kucing" },
    { kanji: "鳥", romaji: "tori", arti: "bird", arti_id: "burung" },
    { kanji: "魚", romaji: "sakana", arti: "fish", arti_id: "ikan" },
    { kanji: "馬", romaji: "uma", arti: "horse", arti_id: "kuda" },
    { kanji: "牛", romaji: "ushi", arti: "cow", arti_id: "sapi" },
    { kanji: "米", romaji: "kome", arti: "rice", arti_id: "beras" },
    { kanji: "肉", romaji: "niku", arti: "meat", arti_id: "daging" },
    { kanji: "卵", romaji: "tamago", arti: "egg", arti_id: "telur" },
    { kanji: "牛乳", romaji: "gyuunyuu", arti: "milk", arti_id: "susu" },
    { kanji: "茶", romaji: "cha", arti: "tea", arti_id: "teh" },
    { kanji: "酒", romaji: "sake", arti: "sake", arti_id: "sake" },
    { kanji: "日", romaji: "hi", arti: "day", arti_id: "hari" },
    { kanji: "月", romaji: "tsuki", arti: "moon/month", arti_id: "bulan" },
    { kanji: "年", romaji: "toshi", arti: "year", arti_id: "tahun" },
    { kanji: "時", romaji: "toki", arti: "time", arti_id: "waktu" },
    { kanji: "分", romaji: "fun", arti: "minute", arti_id: "menit" },
    { kanji: "今", romaji: "ima", arti: "now", arti_id: "sekarang" },
    { kanji: "今朝", romaji: "kesa", arti: "this morning", arti_id: "pagi ini" },
    { kanji: "今日", romaji: "kyou", arti: "today", arti_id: "hari ini" },
    { kanji: "明日", romaji: "ashita", arti: "tomorrow", arti_id: "besok" },
    { kanji: "昨日", romaji: "kinou", arti: "yesterday", arti_id: "kemarin" },
    { kanji: "赤", romaji: "aka", arti: "red", arti_id: "merah" },
    { kanji: "青", romaji: "ao", arti: "blue", arti_id: "biru" },
    { kanji: "白", romaji: "shiro", arti: "white", arti_id: "putih" },
    { kanji: "黒", romaji: "kuro", arti: "black", arti_id: "hitam" },
    { kanji: "黄", romaji: "kiiro", arti: "yellow", arti_id: "kuning" },
    { kanji: "緑", romaji: "midori", arti: "green", arti_id: "hijau" },
    { kanji: "行", romaji: "iku", arti: "to go", arti_id: "pergi" },
    { kanji: "来", romaji: "kuru", arti: "to come", arti_id: "datang" },
    { kanji: "見", romaji: "miru", arti: "to see", arti_id: "melihat" },
    { kanji: "聞", romaji: "kiku", arti: "to hear", arti_id: "mendengar" },
    { kanji: "言", romaji: "iu", arti: "to say", arti_id: "berkata" },
    { kanji: "読", romaji: "yomu", arti: "to read", arti_id: "membaca" },
    { kanji: "書", romaji: "kaku", arti: "to write", arti_id: "menulis" },
    { kanji: "食", romaji: "taberu", arti: "to eat", arti_id: "makan" },
    { kanji: "飲", romaji: "nomu", arti: "to drink", arti_id: "minum" },
    { kanji: "買", romaji: "kau", arti: "to buy", arti_id: "membeli" },
    { kanji: "売", romaji: "uru", arti: "to sell", arti_id: "menjual" },
    { kanji: "大", romaji: "ookii", arti: "big", arti_id: "besar" },
    { kanji: "小", romaji: "chiisai", arti: "small", arti_id: "kecil" },
    { kanji: "新", romaji: "atarashii", arti: "new", arti_id: "baru" },
    { kanji: "古", romaji: "furui", arti: "old", arti_id: "lama" },
    { kanji: "高", romaji: "takai", arti: "high/expensive", arti_id: "tinggi/mahal" },
    { kanji: "安", romaji: "yasui", arti: "cheap", arti_id: "murah" },
    { kanji: "良", romaji: "yoi", arti: "good", arti_id: "baik" },
    { kanji: "悪", romaji: "warui", arti: "bad", arti_id: "buruk" },
    { kanji: "美", romaji: "utsukushii", arti: "beautiful", arti_id: "cantik" },
    { kanji: "強", romaji: "tsuyoi", arti: "strong", arti_id: "kuat" },
    { kanji: "弱", romaji: "yowai", arti: "weak", arti_id: "lemah" },
    { kanji: "家", romaji: "ie", arti: "house", arti_id: "rumah" },
    { kanji: "学校", romaji: "gakkou", arti: "school", arti_id: "sekolah" },
    { kanji: "会社", romaji: "kaisha", arti: "company", arti_id: "perusahaan" },
    { kanji: "店", romaji: "mise", arti: "shop", arti_id: "toko" },
    { kanji: "駅", romaji: "eki", arti: "station", arti_id: "stasiun" },
    { kanji: "病院", romaji: "byouin", arti: "hospital", arti_id: "rumah sakit" },
    { kanji: "銀行", romaji: "ginkou", arti: "bank", arti_id: "bank" },
    { kanji: "図書館", romaji: "toshokan", arti: "library", arti_id: "perpustakaan" },
    { kanji: "上", romaji: "ue", arti: "up/above", arti_id: "atas" },
    { kanji: "下", romaji: "shita", arti: "down/below", arti_id: "bawah" },
    { kanji: "左", romaji: "hidari", arti: "left", arti_id: "kiri" },
    { kanji: "右", romaji: "migi", arti: "right", arti_id: "kanan" },
    { kanji: "中", romaji: "naka", arti: "inside", arti_id: "dalam" },
    { kanji: "外", romaji: "soto", arti: "outside", arti_id: "luar" },
    { kanji: "車", romaji: "kuruma", arti: "car", arti_id: "mobil" },
    { kanji: "電車", romaji: "densha", arti: "train", arti_id: "kereta" },
    { kanji: "バス", romaji: "basu", arti: "bus", arti_id: "bus" },
    { kanji: "自転車", romaji: "jitensha", arti: "bicycle", arti_id: "sepeda" },
    { kanji: "飛行機", romaji: "hikouki", arti: "airplane", arti_id: "pesawat" },
    { kanji: "本", romaji: "hon", arti: "book", arti_id: "buku" },
    { kanji: "紙", romaji: "kami", arti: "paper", arti_id: "kertas" },
    { kanji: "机", romaji: "tsukue", arti: "desk", arti_id: "meja" },
    { kanji: "椅子", romaji: "isu", arti: "chair", arti_id: "kursi" },
    { kanji: "電話", romaji: "denwa", arti: "telephone", arti_id: "telepon" },
    { kanji: "時計", romaji: "tokei", arti: "clock", arti_id: "jam" },
    { kanji: "鞄", romaji: "kaban", arti: "bag", arti_id: "tas" },
    { kanji: "服", romaji: "fuku", arti: "clothes", arti_id: "pakaian" },
    { kanji: "靴", romaji: "kutsu", arti: "shoes", arti_id: "sepatu" },
    { kanji: "帽子", romaji: "boushi", arti: "hat", arti_id: "topi" },
    { kanji: "天気", romaji: "tenki", arti: "weather", arti_id: "cuaca" },
    { kanji: "雨", romaji: "ame", arti: "rain", arti_id: "hujan" },
    { kanji: "雪", romaji: "yuki", arti: "snow", arti_id: "salju" },
    { kanji: "風", romaji: "kaze", arti: "wind", arti_id: "angin" },
    { kanji: "春", romaji: "haru", arti: "spring", arti_id: "musim semi" },
    { kanji: "夏", romaji: "natsu", arti: "summer", arti_id: "musim panas" },
    { kanji: "秋", romaji: "aki", arti: "autumn", arti_id: "musim gugur" },
    { kanji: "冬", romaji: "fuyu", arti: "winter", arti_id: "musim dingin" },
    { kanji: "名前", romaji: "namae", arti: "name", arti_id: "nama" },
    { kanji: "国", romaji: "kuni", arti: "country", arti_id: "negara" },
    { kanji: "言葉", romaji: "kotoba", arti: "word", arti_id: "kata" },
    { kanji: "仕事", romaji: "shigoto", arti: "work", arti_id: "pekerjaan" },
    { kanji: "勉強", romaji: "benkyou", arti: "study", arti_id: "belajar" },
    { kanji: "遊", romaji: "asobu", arti: "to play", arti_id: "bermain" },
    { kanji: "休", romaji: "yasumu", arti: "to rest", arti_id: "beristirahat" },
    { kanji: "寝", romaji: "neru", arti: "to sleep", arti_id: "tidur" },
    { kanji: "起", romaji: "okiru", arti: "to wake up", arti_id: "bangun" },
    { kanji: "洗", romaji: "arau", arti: "to wash", arti_id: "mencuci" },
    { kanji: "切", romaji: "kiru", arti: "to cut", arti_id: "memotong" },
    { kanji: "開", romaji: "hiraku", arti: "to open", arti_id: "membuka" },
    { kanji: "閉", romaji: "shimeru", arti: "to close", arti_id: "menutup" }
];

function loadLanguage() {
    const saved = localStorage.getItem('jlptN5Language');
    return saved || 'en';
}

function saveLanguage(lang) {
    localStorage.setItem('jlptN5Language', lang);
    currentLanguage = lang;
}

function getCurrentTranslation(item) {
    return currentLanguage === 'id' ? item.arti_id : item.arti;
}

function updateLanguageUI() {
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
        if (btn.dataset.lang === currentLanguage) {
            btn.classList.add('bg-blue-500', 'text-white');
            btn.classList.remove('bg-gray-200', 'text-gray-700');
        } else {
            btn.classList.remove('bg-blue-500', 'text-white');
            btn.classList.add('bg-gray-200', 'text-gray-700');
        }
    });
}

let gameState = {
    score: 0,
    lives: 3,
    unansweredQuestions: [],  
    currentQuestionData: null,
    answered: false,
    currentOptionsIndex: null 
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
    currentLanguage = loadLanguage();
    loadHighScore();
    updateHighScoreDisplay();
    updateLanguageUI();
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
        answered: false,
        currentOptionsIndex: null 
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

    const correctAnswer = getCurrentTranslation(gameState.currentQuestionData);
    const correctIdx = vocabularyData.findIndex(item => item === gameState.currentQuestionData);
    let optionIndexes = [correctIdx];
    let otherIndexes = vocabularyData.map((item, idx) => idx).filter(idx => idx !== correctIdx);
    while (optionIndexes.length < 4) {
        const randomIdx = otherIndexes[Math.floor(Math.random() * otherIndexes.length)];
        if (!optionIndexes.includes(randomIdx)) {
            optionIndexes.push(randomIdx);
        }
    }
    optionIndexes = optionIndexes.sort(() => Math.random() - 0.5);
    gameState.currentOptionsIndex = optionIndexes;

    elements.optionBtns.forEach((btn, index) => {
        const vocabIdx = optionIndexes[index];
        btn.querySelector('.option-text').textContent = getCurrentTranslation(vocabularyData[vocabIdx]);
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
    const correctAnswer = getCurrentTranslation(gameState.currentQuestionData);
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
            const vocabIdx = gameState.currentOptionsIndex[index];
            if (getCurrentTranslation(vocabularyData[vocabIdx]) === correctAnswer) {
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

function updateCurrentQuestionOptions() {
    if (!gameState.currentQuestionData || !gameState.currentOptionsIndex) return;
    elements.kanjiText.textContent = gameState.currentQuestionData.kanji;
    elements.romajiText.textContent = gameState.currentQuestionData.romaji;
    elements.optionBtns.forEach((btn, index) => {
        const vocabIdx = gameState.currentOptionsIndex[index];
        btn.querySelector('.option-text').textContent = getCurrentTranslation(vocabularyData[vocabIdx]);
    });
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

function switchLanguage(lang) {
    saveLanguage(lang);
    updateLanguageUI();
    const quizScreen = screens.quiz;
    if (!quizScreen.classList.contains('hidden') && gameState.currentQuestionData) {
        updateCurrentQuestionOptions();
    } else if (gameState.currentQuestionData) {
        loadQuestion();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initGame();
    
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            switchLanguage(btn.dataset.lang);
        });
    });
});
