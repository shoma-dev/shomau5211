const questions = [
    {
        question: "次の単語 'apple' の意味は？",
        answers: [
            { text: "りんご", correct: true },
            { text: "みかん", correct: false },
            { text: "バナナ", correct: false },
            { text: "ぶどう", correct: false }
        ]
    },
    {
        question: "次の単語 'dog' の意味は？",
        answers: [
            { text: "犬", correct: true },
            { text: "猫", correct: false },
            { text: "鳥", correct: false },
            { text: "魚", correct: false }
        ]
    },
    {
        question: "次の単語 'book' の意味は？",
        answers: [
            { text: "本", correct: true },
            { text: "机", correct: false },
            { text: "椅子", correct: false },
            { text: "ドア", correct: false }
        ]
    }
];

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const startButton = document.getElementById("start-btn");

let currentQuestionIndex = 0;

startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        alert("クイズ終了！お疲れさまでした。");
        location.href = "index.html"; // ホームへ戻る
    }
});

function startQuiz() {
    startScreen.style.display = "none";
    quizScreen.style.display = "block";
    currentQuestionIndex = 0;
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(answer.correct));
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(correct) {
    if (correct) {
        alert("正解！");
    } else {
        alert("不正解...");
    }
    nextButton.style.display = "block";
}