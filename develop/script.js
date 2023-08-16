//This assigns variable to get the button element from html 
var startQuiz = document.getElementById('start-button');
var hideQuestions = document.getElementById("questionContainer").style.visibility = "hidden";


// This code block is used to select p element to use for timer
const timeP = document.querySelector('p');
// This sets a variable called timeSecond to 60 seconds
let timeSecond = 60;

// This will edit the timeP element with our remainng time 
timeP.innerHTML = `Seconds remaining: ${timeSecond}`;


// This listens for click even, will use to "start the quiz"
startQuiz.addEventListener('click', function(){
    // this hides the start button and shows questions upon click
document.getElementById("landing-page").style.visibility = "hidden";
document.getElementById("questionContainer").style.visibility = "visible";

const countDown = setInterval(()=>{
    timeSecond--;
    timeP.innerHTML = `00:${timeSecond}`;

},1000)

// Create if statemenet to set "out of time / you lsoe when timer runs out"
})



 
var answerButton = document.getElementById('A');
answerButton.addEventListener('change', function(){
})



// const questions = [
//     ['What is the correct way to link java to html', '<script>']
//     ['']
// ];


// // const question = document.createElement("p");
// // question.innerText = "This is a paragraph";
// // document.body.appendChild(question);

// document.body.onload = addElement;

// function addElement () {
//   // create a new div element
//   const newDiv = document.createElement("div");

//   // and give it some content
//   const newContent = document.createTextNode("Hi there and greetings!");

//   // add the text node to the newly created div
//   newDiv.appendChild(newContent);

//   // add the newly created element and its content into the DOM
//   const currentDiv = document.getElementById("div1");
//   document.body.insertBefore(newDiv, currentDiv);
// }



// var checkboxA = document.getElementById("A");
// var checkboxB = document.getElementById("B");
// var checkboxC = document.getElementById("C");
// var checkboxD = document.getElementById("D");

document.getElementById("Question").innerHTML = "This is the question";
