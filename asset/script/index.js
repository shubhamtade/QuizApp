// https://quizapi.io/api/v1/questions?difficulty=Easy&limit=5&apiKey=0x9ETGcteUhoM6oydyYmcclYYHwZsvTnryQR4kb1


const qaObject = [
  {
    question: "What is the capital of France?",
    answer: [
      { text: "Mumbai", correct: false },
      { text: "London", correct: false },
      { text: "Paris", correct: true },
      { text: "Akola", correct: false },
    ],
  },
  {
    question: "What is the square root of 64?",
    answer: [
      { text: "9", correct: false },
      { text: "8", correct: false },
      { text: "16", correct: false },
      { text: "64", correct: true },
    ],
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    answer: [
      { text: "Sonia", correct: false },
      { text: "Me", correct: false },
      { text: "Don't Know", correct: false },
      { text: "William Shakespeare", correct: true },
    ],
  },
  {
    question: "What is the largest mammal on Earth?",
    answer: [
      { text: "blue whale", correct: true },
      { text: "Horse", correct: false },
      { text: "Frog", correct: false },
      { text: "Dog", correct: false },
    ],
  },
  {
    question: "What is the chemical symbol for water?",
    answer: [
      { text: "O2", correct: false },
      { text: "H2O", correct: true },
      { text: "H2", correct: false },
      { text: "NACL", correct: false },
    ],
  },
  {
    question: "Who discovered the theory of relativity?",
    answer: [
      { text: "Nikola Tesla", correct: false },
      { text: "Mahatma Gandhi", correct: false },
      { text: "Rahul Gandhi", correct: false },
      { text: "Albert Einstein", correct: true },
    ],
  },
  {
    question: "What is the tallest mountain in the world?",
    answer: [
      { text: "Mount Everest", correct: true },
      { text: "Mount Kailas", correct: false },
      { text: "Mount Tabu", correct: false },
      { text: "Mount Kia", correct: false },
    ],
  },
  {
    question: "What is the currency of Japan?",
    answer: [
      { text: "Dollar", correct: false },
      { text: "Rubel", correct: false },
      { text: "Japanese Yen", correct: true },
      { text: "Ruppee", correct: false },
    ],
  },
  {
    question: "Who painted the 'Mona Lisa'?",
    answer: [
      { text: "Mukesh Ambani", correct: false },
      { text: "Narendra Modi", correct: false },
      { text: "Leonardo da Vinci", correct: true },
      { text: "You", correct: false },
    ],
  },
  {
    question: "What is the largest planet in our solar system?",
    answer: [
      { text: "Jupiter", correct: true },
      { text: "Sun", correct: false },
      { text: "Moon", correct: false },
      { text: "Earth", correct: false },
    ],
  },
];

const que = document.querySelector(".que");
const option = document.querySelector(".option");
const next_btn = document.querySelector("#next-btn");
const restBtn = document.querySelector(".rest-btn");

let currentQuestionIndex = 0;
let userAnswers = [];

function start() {
  que.innerHTML = `${currentQuestionIndex + 1}. ${
    qaObject[currentQuestionIndex]?.question || result()
  }`;

  option.innerHTML = "";

  for (let i = 0; i < 4; i++) {
    const list = document.createElement("li");
    list.textContent = qaObject[currentQuestionIndex].answer[i].text;
    option.appendChild(list);

    list.addEventListener("click", () => {
      userAnswers[currentQuestionIndex] =
        qaObject[currentQuestionIndex].answer[i].correct; // Store the index of the selected answer
    });
  }

  next_btn.style.display = "flex";
}

function reset_all() {
  document.querySelector(".container").style.display = "block";
  document.querySelector(".result_content").style.display = "none";

  currentQuestionIndex = 0;
  userAnswers = [];

  start();
}

function result() {
  console.log(userAnswers);

  document.querySelector(".container").style.display = "none";
  document.querySelector(".result_content").style.display = "flex";

  document.querySelector(".score").innerHTML = `<p>Your result : ${
    userAnswers.filter(Boolean).length
  }/${qaObject.length}</p>
  
        <p>Que. Attempt : ${userAnswers.length}</p>`;
}

function updateQue() {
  if (currentQuestionIndex !== qaObject.length) {
    currentQuestionIndex += 1;

    start();
  }
}

next_btn.addEventListener("click", updateQue);

start();
