// This assigns variable to get the button element from html 
var startQuiz = document.getElementById('start-button');
var hideQuestions = document.getElementById("questionContainer").style.visibility = "hidden";

// These variables get element for answer buttons 
var answerButtonA = document.getElementById('A');
var answerButtonB = document.getElementById('B');
var answerButtonC = document.getElementById('C');
var answerButtonD = document.getElementById('D');


// This code block is used to select p element to use for timer
const timeP = document.querySelector('p');
// This sets a variable called timeSecond to 60 seconds []
let timeSecond = 60;
// This will edit the timeP element with our remainng time left in countdown
timeP.innerHTML = `Seconds remaining: ${timeSecond}`;
// This listens for click even, will use to "start the quiz"
startQuiz.addEventListener('click', function(){
// This hides the start button and shows questions upon click
document.getElementById("landing-page").style.visibility = "hidden";
document.getElementById("questionContainer").style.visibility = "visible";

const countDown = setInterval(()=>{
    timeSecond--;
    timeP.innerHTML = `00:${timeSecond}`;
},1000)
if(timeSecond < 0){
    alert("out of time");
}
})


// We need to edit the placeholder value of each button, 
// every new question (after button click for answer current question)

// This array will hold the questions, options, and answers to verify correct/false

let questionArr = {
Question1: {
    Question: "This is the question for q1",
    Options: ['Answer A', 'Answer B', 'Answer C', 'Answer D'],
    CorrectOption: 'A'
},
Question2: {
    Question: "This is the question for q2",
    Options: ['Answer A', 'Answer B', 'Answer C', 'Answer D'],
    CorrectOption: 'A'
},
question3: {
    Question: "This is the question for q3",
    Options: ['Answer A', 'Answer B', 'Answer C', 'Answer D'],
    CorrectOption: 'A'
},
Question4: { 
    Question: "This is the question for q4",
    Options: ['Answer A', 'Answer B', 'Answer C', 'Answer D'],
    CorrectOption: 'A'
},
Question5: {
    Question: "This is the question for q5",
    Options: ['Answer A', 'Answer B', 'Answer C', 'Answer D'],
    CorrectOption: 'A'
}};

// This gives the answer buttons labels from array
$('#A').attr('value',questionArr.Question1.Options[0]);
$('#B').attr('value',questionArr.Question1.Options[1]);
$('#C').attr('value',questionArr.Question1.Options[2]);
$('#D').attr('value',questionArr.Question1.Options[3]);

//

document.getElementsByTagName('input').onclick = function(){
    i=0;
    for(let i =0; i < 5; i++){

    var questionTag = document.getElementById('Question');
 
}
};

