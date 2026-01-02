// Vocabulary database
const vocabulary = [
    { word: "hola", translation: "hello", example: "Hola, ¿cómo estás? (Hello, how are you?)" },
    { word: "adiós", translation: "goodbye", example: "¡Adiós! Hasta luego. (Goodbye! See you later.)" },
    { word: "gracias", translation: "thank you", example: "Muchas gracias. (Thank you very much.)" },
    { word: "por favor", translation: "please", example: "Por favor, ayúdame. (Please, help me.)" },
    { word: "sí", translation: "yes", example: "Sí, estoy de acuerdo. (Yes, I agree.)" },
    { word: "no", translation: "no", example: "No, no puedo. (No, I can't.)" },
    { word: "agua", translation: "water", example: "Necesito un vaso de agua. (I need a glass of water.)" },
    { word: "comida", translation: "food", example: "La comida está deliciosa. (The food is delicious.)" },
    { word: "casa", translation: "house", example: "Mi casa es grande. (My house is big.)" },
    { word: "familia", translation: "family", example: "Amo a mi familia. (I love my family.)" },
    { word: "amigo", translation: "friend", example: "Él es mi mejor amigo. (He is my best friend.)" },
    { word: "trabajo", translation: "work", example: "Voy al trabajo todos los días. (I go to work every day.)" },
    { word: "tiempo", translation: "time", example: "No tengo tiempo. (I don't have time.)" },
    { word: "día", translation: "day", example: "Buenos días. (Good morning.)" },
    { word: "noche", translation: "night", example: "Buenas noches. (Good night.)" },
    { word: "libro", translation: "book", example: "Estoy leyendo un libro. (I'm reading a book.)" },
    { word: "escuela", translation: "school", example: "Voy a la escuela. (I go to school.)" },
    { word: "coche", translation: "car", example: "Tengo un coche nuevo. (I have a new car.)" },
    { word: "ciudad", translation: "city", example: "Vivo en una ciudad grande. (I live in a big city.)" },
    { word: "país", translation: "country", example: "España es un país hermoso. (Spain is a beautiful country.)" },
    { word: "amor", translation: "love", example: "Te amo con todo mi amor. (I love you with all my love.)" },
    { word: "feliz", translation: "happy", example: "Estoy muy feliz. (I am very happy.)" },
    { word: "triste", translation: "sad", example: "Estoy triste hoy. (I am sad today.)" },
    { word: "grande", translation: "big", example: "El elefante es grande. (The elephant is big.)" },
    { word: "pequeño", translation: "small", example: "El ratón es pequeño. (The mouse is small.)" },
    { word: "bueno", translation: "good", example: "Eres muy bueno. (You are very good.)" },
    { word: "malo", translation: "bad", example: "Eso es malo. (That is bad.)" },
    { word: "nuevo", translation: "new", example: "Tengo un coche nuevo. (I have a new car.)" },
    { word: "viejo", translation: "old", example: "Esa casa es vieja. (That house is old.)" },
    { word: "rápido", translation: "fast", example: "Corre muy rápido. (He runs very fast.)" }
];

// Verb conjugations
const verbs = {
    "hablar": {
        presente: {
            "yo": "hablo",
            "tú": "hablas",
            "él/ella/usted": "habla",
            "nosotros": "hablamos",
            "vosotros": "habláis",
            "ellos/ellas/ustedes": "hablan"
        },
        preterito: {
            "yo": "hablé",
            "tú": "hablaste",
            "él/ella/usted": "habló",
            "nosotros": "hablamos",
            "vosotros": "hablasteis",
            "ellos/ellas/ustedes": "hablaron"
        },
        futuro: {
            "yo": "hablaré",
            "tú": "hablarás",
            "él/ella/usted": "hablará",
            "nosotros": "hablaremos",
            "vosotros": "hablaréis",
            "ellos/ellas/ustedes": "hablarán"
        },
        imperfecto: {
            "yo": "hablaba",
            "tú": "hablabas",
            "él/ella/usted": "hablaba",
            "nosotros": "hablábamos",
            "vosotros": "hablabais",
            "ellos/ellas/ustedes": "hablaban"
        }
    },
    "comer": {
        presente: {
            "yo": "como",
            "tú": "comes",
            "él/ella/usted": "come",
            "nosotros": "comemos",
            "vosotros": "coméis",
            "ellos/ellas/ustedes": "comen"
        },
        preterito: {
            "yo": "comí",
            "tú": "comiste",
            "él/ella/usted": "comió",
            "nosotros": "comimos",
            "vosotros": "comisteis",
            "ellos/ellas/ustedes": "comieron"
        },
        futuro: {
            "yo": "comeré",
            "tú": "comerás",
            "él/ella/usted": "comerá",
            "nosotros": "comeremos",
            "vosotros": "comeréis",
            "ellos/ellas/ustedes": "comerán"
        },
        imperfecto: {
            "yo": "comía",
            "tú": "comías",
            "él/ella/usted": "comía",
            "nosotros": "comíamos",
            "vosotros": "comíais",
            "ellos/ellas/ustedes": "comían"
        }
    },
    "vivir": {
        presente: {
            "yo": "vivo",
            "tú": "vives",
            "él/ella/usted": "vive",
            "nosotros": "vivimos",
            "vosotros": "vivís",
            "ellos/ellas/ustedes": "viven"
        },
        preterito: {
            "yo": "viví",
            "tú": "viviste",
            "él/ella/usted": "vivió",
            "nosotros": "vivimos",
            "vosotros": "vivisteis",
            "ellos/ellas/ustedes": "vivieron"
        },
        futuro: {
            "yo": "viviré",
            "tú": "vivirás",
            "él/ella/usted": "vivirá",
            "nosotros": "viviremos",
            "vosotros": "viviréis",
            "ellos/ellas/ustedes": "vivirán"
        },
        imperfecto: {
            "yo": "vivía",
            "tú": "vivías",
            "él/ella/usted": "vivía",
            "nosotros": "vivíamos",
            "vosotros": "vivíais",
            "ellos/ellas/ustedes": "vivían"
        }
    },
    "ser": {
        presente: {
            "yo": "soy",
            "tú": "eres",
            "él/ella/usted": "es",
            "nosotros": "somos",
            "vosotros": "sois",
            "ellos/ellas/ustedes": "son"
        },
        preterito: {
            "yo": "fui",
            "tú": "fuiste",
            "él/ella/usted": "fue",
            "nosotros": "fuimos",
            "vosotros": "fuisteis",
            "ellos/ellas/ustedes": "fueron"
        },
        futuro: {
            "yo": "seré",
            "tú": "serás",
            "él/ella/usted": "será",
            "nosotros": "seremos",
            "vosotros": "seréis",
            "ellos/ellas/ustedes": "serán"
        },
        imperfecto: {
            "yo": "era",
            "tú": "eras",
            "él/ella/usted": "era",
            "nosotros": "éramos",
            "vosotros": "erais",
            "ellos/ellas/ustedes": "eran"
        }
    },
    "estar": {
        presente: {
            "yo": "estoy",
            "tú": "estás",
            "él/ella/usted": "está",
            "nosotros": "estamos",
            "vosotros": "estáis",
            "ellos/ellas/ustedes": "están"
        },
        preterito: {
            "yo": "estuve",
            "tú": "estuviste",
            "él/ella/usted": "estuvo",
            "nosotros": "estuvimos",
            "vosotros": "estuvisteis",
            "ellos/ellas/ustedes": "estuvieron"
        },
        futuro: {
            "yo": "estaré",
            "tú": "estarás",
            "él/ella/usted": "estará",
            "nosotros": "estaremos",
            "vosotros": "estaréis",
            "ellos/ellas/ustedes": "estarán"
        },
        imperfecto: {
            "yo": "estaba",
            "tú": "estabas",
            "él/ella/usted": "estaba",
            "nosotros": "estábamos",
            "vosotros": "estabais",
            "ellos/ellas/ustedes": "estaban"
        }
    },
    "tener": {
        presente: {
            "yo": "tengo",
            "tú": "tienes",
            "él/ella/usted": "tiene",
            "nosotros": "tenemos",
            "vosotros": "tenéis",
            "ellos/ellas/ustedes": "tienen"
        },
        preterito: {
            "yo": "tuve",
            "tú": "tuviste",
            "él/ella/usted": "tuvo",
            "nosotros": "tuvimos",
            "vosotros": "tuvisteis",
            "ellos/ellas/ustedes": "tuvieron"
        },
        futuro: {
            "yo": "tendré",
            "tú": "tendrás",
            "él/ella/usted": "tendrá",
            "nosotros": "tendremos",
            "vosotros": "tendréis",
            "ellos/ellas/ustedes": "tendrán"
        },
        imperfecto: {
            "yo": "tenía",
            "tú": "tenías",
            "él/ella/usted": "tenía",
            "nosotros": "teníamos",
            "vosotros": "teníais",
            "ellos/ellas/ustedes": "tenían"
        }
    },
    "hacer": {
        presente: {
            "yo": "hago",
            "tú": "haces",
            "él/ella/usted": "hace",
            "nosotros": "hacemos",
            "vosotros": "hacéis",
            "ellos/ellas/ustedes": "hacen"
        },
        preterito: {
            "yo": "hice",
            "tú": "hiciste",
            "él/ella/usted": "hizo",
            "nosotros": "hicimos",
            "vosotros": "hicisteis",
            "ellos/ellas/ustedes": "hicieron"
        },
        futuro: {
            "yo": "haré",
            "tú": "harás",
            "él/ella/usted": "hará",
            "nosotros": "haremos",
            "vosotros": "haréis",
            "ellos/ellas/ustedes": "harán"
        },
        imperfecto: {
            "yo": "hacía",
            "tú": "hacías",
            "él/ella/usted": "hacía",
            "nosotros": "hacíamos",
            "vosotros": "hacíais",
            "ellos/ellas/ustedes": "hacían"
        }
    },
    "ir": {
        presente: {
            "yo": "voy",
            "tú": "vas",
            "él/ella/usted": "va",
            "nosotros": "vamos",
            "vosotros": "vais",
            "ellos/ellas/ustedes": "van"
        },
        preterito: {
            "yo": "fui",
            "tú": "fuiste",
            "él/ella/usted": "fue",
            "nosotros": "fuimos",
            "vosotros": "fuisteis",
            "ellos/ellas/ustedes": "fueron"
        },
        futuro: {
            "yo": "iré",
            "tú": "irás",
            "él/ella/usted": "irá",
            "nosotros": "iremos",
            "vosotros": "iréis",
            "ellos/ellas/ustedes": "irán"
        },
        imperfecto: {
            "yo": "iba",
            "tú": "ibas",
            "él/ella/usted": "iba",
            "nosotros": "íbamos",
            "vosotros": "ibais",
            "ellos/ellas/ustedes": "iban"
        }
    }
};

// State management
let currentCardIndex = 0;
let shuffledVocabulary = [];
let quizQuestions = [];
let currentQuizIndex = 0;
let quizScore = 0;
let currentTense = "presente";
let stats = {
    cardsStudied: 0,
    quizTotal: 0,
    quizCorrect: 0,
    verbsLearned: new Set()
};

// Load stats from localStorage
function loadStats() {
    const saved = localStorage.getItem('spanishLearningStats');
    if (saved) {
        stats = JSON.parse(saved);
        stats.verbsLearned = new Set(stats.verbsLearned);
    }
}

// Save stats to localStorage
function saveStats() {
    const toSave = {
        ...stats,
        verbsLearned: Array.from(stats.verbsLearned)
    };
    localStorage.setItem('spanishLearningStats', JSON.stringify(toSave));
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadStats();
    setupTabs();
    setupFlashcards();
    setupQuiz();
    setupVerbs();
    updateProgress();
});

// Tab switching
function setupTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.dataset.tab;
            
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            btn.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
            
            if (targetTab === 'progress') {
                updateProgress();
            }
        });
    });
}

// Flashcards functionality
function setupFlashcards() {
    const flashcard = document.getElementById('flashcard');
    const startBtn = document.getElementById('start-btn');
    const nextBtn = document.getElementById('next-btn');
    const flipBtn = document.getElementById('flip-btn');

    startBtn.addEventListener('click', startFlashcards);
    nextBtn.addEventListener('click', nextCard);
    flipBtn.addEventListener('click', flipCard);
    flashcard.addEventListener('click', flipCard);
}

function startFlashcards() {
    shuffledVocabulary = [...vocabulary].sort(() => Math.random() - 0.5);
    currentCardIndex = 0;
    stats.cardsStudied = 0;
    showCard();
    
    document.getElementById('start-btn').style.display = 'none';
    document.getElementById('next-btn').style.display = 'inline-block';
    document.getElementById('flip-btn').style.display = 'inline-block';
}

function showCard() {
    if (currentCardIndex >= shuffledVocabulary.length) {
        document.getElementById('card-word').textContent = '¡Felicidades! You finished all cards!';
        document.getElementById('card-translation').textContent = '';
        document.getElementById('card-example').textContent = '';
        return;
    }

    const card = shuffledVocabulary[currentCardIndex];
    const flashcard = document.getElementById('flashcard');
    flashcard.classList.remove('flipped');
    
    document.getElementById('card-word').textContent = card.word;
    document.getElementById('card-translation').textContent = card.translation;
    document.getElementById('card-example').textContent = card.example;
    
    updateFlashcardProgress();
}

function flipCard() {
    const flashcard = document.getElementById('flashcard');
    flashcard.classList.toggle('flipped');
}

function nextCard() {
    currentCardIndex++;
    stats.cardsStudied++;
    saveStats();
    showCard();
}

function updateFlashcardProgress() {
    const progress = ((currentCardIndex + 1) / shuffledVocabulary.length) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';
    document.getElementById('progress-text').textContent = `${currentCardIndex + 1} / ${shuffledVocabulary.length} cards`;
}

// Quiz functionality
function setupQuiz() {
    const startQuizBtn = document.getElementById('start-quiz-btn');
    const nextQuizBtn = document.getElementById('next-quiz-btn');

    startQuizBtn.addEventListener('click', startQuiz);
    nextQuizBtn.addEventListener('click', nextQuizQuestion);
}

function startQuiz() {
    quizQuestions = [...vocabulary].sort(() => Math.random() - 0.5).slice(0, 10);
    currentQuizIndex = 0;
    quizScore = 0;
    stats.quizTotal = quizQuestions.length;
    stats.quizCorrect = 0;
    
    showQuizQuestion();
    
    document.getElementById('start-quiz-btn').style.display = 'none';
    document.getElementById('next-quiz-btn').style.display = 'inline-block';
    document.getElementById('next-quiz-btn').disabled = true;
    document.getElementById('quiz-score').textContent = '0';
    document.getElementById('quiz-total').textContent = quizQuestions.length;
}

function showQuizQuestion() {
    if (currentQuizIndex >= quizQuestions.length) {
        const percentage = Math.round((quizScore / quizQuestions.length) * 100);
        document.getElementById('quiz-question').innerHTML = `
            <h2>Quiz Complete!</h2>
            <p>Your score: ${quizScore} / ${quizQuestions.length} (${percentage}%)</p>
        `;
        document.getElementById('quiz-options').innerHTML = '';
        document.getElementById('quiz-feedback').textContent = '';
        document.getElementById('next-quiz-btn').textContent = 'Restart Quiz';
        document.getElementById('next-quiz-btn').onclick = () => {
            document.getElementById('next-quiz-btn').textContent = 'Next Question';
            startQuiz();
        };
        stats.quizCorrect = quizScore;
        saveStats();
        return;
    }

    const question = quizQuestions[currentQuizIndex];
    const correctAnswer = question.translation;
    
    // Generate wrong answers
    const wrongAnswers = vocabulary
        .filter(v => v.translation !== correctAnswer)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map(v => v.translation);
    
    const allAnswers = [correctAnswer, ...wrongAnswers].sort(() => Math.random() - 0.5);
    
    document.getElementById('quiz-question').innerHTML = `
        <h2>What does "${question.word}" mean?</h2>
    `;
    
    const optionsDiv = document.getElementById('quiz-options');
    optionsDiv.innerHTML = '';
    
    allAnswers.forEach(answer => {
        const option = document.createElement('div');
        option.className = 'quiz-option';
        option.textContent = answer;
        option.addEventListener('click', () => selectAnswer(answer, correctAnswer, option));
        optionsDiv.appendChild(option);
    });
    
    document.getElementById('quiz-feedback').textContent = '';
    document.getElementById('next-quiz-btn').disabled = true;
}

function selectAnswer(selected, correct, element) {
    const options = document.querySelectorAll('.quiz-option');
    options.forEach(opt => {
        opt.classList.add('disabled');
        opt.style.cursor = 'not-allowed';
        
        if (opt.textContent === correct) {
            opt.classList.add('correct');
        } else if (opt === element && selected !== correct) {
            opt.classList.add('incorrect');
        }
    });
    
    const feedback = document.getElementById('quiz-feedback');
    if (selected === correct) {
        feedback.textContent = '¡Correcto! (Correct!)';
        feedback.className = 'quiz-feedback correct';
        quizScore++;
    } else {
        feedback.textContent = `Incorrecto. The answer is "${correct}".`;
        feedback.className = 'quiz-feedback incorrect';
    }
    
    document.getElementById('quiz-score').textContent = quizScore;
    document.getElementById('next-quiz-btn').disabled = false;
}

function nextQuizQuestion() {
    currentQuizIndex++;
    showQuizQuestion();
}

// Verb conjugation functionality
function setupVerbs() {
    const verbSelect = document.getElementById('verb-select');
    const tenseBtns = document.querySelectorAll('.tense-btn');
    
    // Populate verb select
    Object.keys(verbs).forEach(verb => {
        const option = document.createElement('option');
        option.value = verb;
        option.textContent = verb;
        verbSelect.appendChild(option);
    });
    
    verbSelect.addEventListener('change', showVerbConjugation);
    
    tenseBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tenseBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentTense = btn.dataset.tense;
            const selectedVerb = verbSelect.value;
            if (selectedVerb) {
                showVerbConjugation();
            }
        });
    });
}

function showVerbConjugation() {
    const verbSelect = document.getElementById('verb-select');
    const verb = verbSelect.value;
    const conjugationDiv = document.getElementById('verb-conjugation');
    
    if (!verb || !verbs[verb]) {
        conjugationDiv.innerHTML = '<p class="verb-placeholder">Select a verb to see its conjugations</p>';
        return;
    }
    
    const conjugations = verbs[verb][currentTense];
    if (!conjugations) {
        conjugationDiv.innerHTML = '<p class="verb-placeholder">Conjugation not available</p>';
        return;
    }
    
    stats.verbsLearned.add(verb);
    saveStats();
    
    let html = `<h3 style="text-align: center; margin-bottom: 20px; color: #667eea;">${verb.charAt(0).toUpperCase() + verb.slice(1)} - ${currentTense.charAt(0).toUpperCase() + currentTense.slice(1)}</h3>`;
    html += '<table class="conjugation-table">';
    
    Object.entries(conjugations).forEach(([pronoun, conjugation]) => {
        html += `
            <tr>
                <td>${pronoun}</td>
                <td>${conjugation}</td>
            </tr>
        `;
    });
    
    html += '</table>';
    conjugationDiv.innerHTML = html;
}

// Progress tracking
function updateProgress() {
    document.getElementById('stat-cards').textContent = stats.cardsStudied || 0;
    
    const quizPercentage = stats.quizTotal > 0 
        ? Math.round((stats.quizCorrect / stats.quizTotal) * 100) 
        : 0;
    document.getElementById('stat-quiz').textContent = quizPercentage + '%';
    
    document.getElementById('stat-verbs').textContent = stats.verbsLearned.size || 0;
    
    // Reset button
    document.getElementById('reset-btn').addEventListener('click', () => {
        if (confirm('Are you sure you want to reset all progress?')) {
            stats = {
                cardsStudied: 0,
                quizTotal: 0,
                quizCorrect: 0,
                verbsLearned: new Set()
            };
            saveStats();
            updateProgress();
        }
    });
}

