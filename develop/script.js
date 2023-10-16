// Assigns variable to get the button element from HTML
const startQuiz = document.getElementById('start-button');
const questionContainer = document.getElementById("questionContainer");
const timeP = document.querySelector('p');
const questionTag = document.getElementById('Question');

// Hide the questions at the start
questionContainer.style.visibility = "hidden";

// Variables for answer buttons
const answerButtonA = document.getElementById('A');
const answerButtonB = document.getElementById('B');
const answerButtonC = document.getElementById('C');
const answerButtonD = document.getElementById('D');

let timeSecond = 60;
timeP.innerHTML = `Timer: ${timeSecond}s`;

// Questions for the quiz
const questions = [
  {
    text: "Which of these is not a JavaScript data type?",
    options: ['Number', 'String', 'Boolean', 'Character'],
    correctOption: 'D'
  },
  {
    text: "How do you declare a JavaScript variable?",
    options: ['variable name;', 'var name;', 'variable = name;', 'var name =;'],
    correctOption: 'B'
  },
  {
    text: "Which of these is a correct way to comment out multiple lines in JavaScript?",
    options: ['//This comment ...', '/*This comment ...*/', '--This comment ...--', '~~This comment ...~~'],
    correctOption: 'B'
  },
  // ... more questions
];

let currentQuestionIndex = 0;

startQuiz.addEventListener('click', function() {
  document.getElementById("landing-page").style.visibility = "hidden";
  questionContainer.style.visibility = "visible";
  displayQuestion(currentQuestionIndex);

  const countDown = setInterval(() => {
    timeSecond--;
    timeP.innerHTML = `Time remaining: ${timeSecond}s`;

    if (timeSecond <= 0) {
      alert("Out of time!");
      clearInterval(countDown);
    }
  }, 1000);
});

function displayQuestion(index) {
  const question = questions[index];
  questionTag.textContent = question.text;
  answerButtonA.value = question.options[0];
  answerButtonB.value = question.options[1];
  answerButtonC.value = question.options[2];
  answerButtonD.value = question.options[3];
}

// Handle answer selection
[answerButtonA, answerButtonB, answerButtonC, answerButtonD].forEach((button, index) => {
  button.addEventListener('click', function() {
    if (button.id === questions[currentQuestionIndex].correctOption) {
      alert('Correct!');
    } else {
      alert('Wrong!');
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
      displayQuestion(currentQuestionIndex);
    } else {
      alert('Quiz finished!');
      // Reset for the sake of this example, in real-life you might redirect or show a score
      currentQuestionIndex = 0;
      displayQuestion(currentQuestionIndex);
    }
  });
});
