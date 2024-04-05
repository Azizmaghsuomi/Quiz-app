const qusetions = [
    {
      qusetion: "Css stand for?",
      answers: [
        { text: "cscading style Sheet", correct: true },
        { text: "casting style Sheet", correct: false },
        { text: "cscading section Sheet", correct: false },
        { text: "cscading some Sheet", correct: false },
      ],
    },
    {
      qusetion: "what is javascript?",
      answers: [
        { text: "a web browser", correct: false },
        { text: "an operting system", correct: false },
        { text: "a very popular progrming language", correct: true },
        { text: "an andriod app", correct: false },
      ],
    },
    {
      qusetion: "what is bootstrap",
      answers: [
        { text: "a progrming language", correct: false },
        { text: "a version control system", correct: false },
        { text: "database", correct: false },
        { text: "a frant-end delopment framefork", correct: true },
      ],
    },
    {
      qusetion: "which of the following is Not a javascript data type?",
      answers: [
        { text: "Boolean", correct: false },
        { text: "Integer", correct: true },
        { text: "Object", correct: false },
        { text: "string", correct: false },
      ],
    },
    {
      qusetion: "what is reactJs?",
      answers: [
        { text: "database", correct: false },
        { text: "a version control system", correct: false },
        { text: "back-end programing language", correct: false },
        { text: "a frant-end delopment framefork", correct: true },
      ],
    },
  ];
  
  const qusetionElemt = document.getElementById("question");
  const answerBtns = document.getElementById("answerBtns");
  const nextBtn = document.querySelector(".next-btn");
  
  let currentQustionIndex = 0;
  let score = 0;
  
  function startQuiz() {
    currentQustionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQustion();
  }
  
  function showQustion() {
    resetState();
    const currentQustion = qusetions[currentQustionIndex];
    const qusetionNum = currentQustionIndex + 1;
    qusetionElemt.innerHTML = qusetionNum + "." + currentQustion.qusetion;
  
    currentQustion.answers.forEach((answer) => {
      const btn = document.createElement("button");
      btn.innerHTML = answer.text;
      btn.classList.add("Btn");
      answerBtns.appendChild(btn);
  
      if (answer.correct) {
        btn.dataset.correct = answer.correct;
      }
      btn.addEventListener("click", selectAnswer);
    });
  }
  
  function resetState() {
    nextBtn.style.display = "none";
    while (answerBtns.firstChild) {
      answerBtns.removeChild(answerBtns.firstChild);
    }
  }
  
  function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
  
    if (isCorrect) {
      selectedBtn.classList.add("correct");
      score++;
    } else {
      selectedBtn.classList.add("incorrect");
    }
  
    Array.from(answerBtns.children).forEach((btn) => {
      if (btn.dataset.correct === "true") {
        btn.classList.add("correct");
      }
      btn.disabled = true;
    });
  
    nextBtn.style.display = "block";
  }
  
  function showScore() {
    resetState();
    qusetionElemt.innerHTML = `You scored ${score} out of ${qusetions.length}`;
    nextBtn.innerHTML = "Play Again";
    nextBtn.style.display = "block";
  }
  
  function handleNextBtn() {
    currentQustionIndex++;
    if (currentQustionIndex < qusetions.length) {
      showQustion();
    } else {
      showScore();
    }
  }
  
  nextBtn.addEventListener("click", () => {
    if (currentQustionIndex < qusetions.length) {
      handleNextBtn();
    } else {
      startQuiz();
    }
  });
  
  startQuiz();
  