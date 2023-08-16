//This assigns variable to get the button element from html 
var startQuiz = document.getElementById('start-button');

// This listens for click even, will use to "start the quiz"
startQuiz.addEventListener('click', function(){
document.getElementById("start-button").style.display = "none";
// This is where I should "unhide (display) the question div, and buttons"
})
 

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

var checkboxA = document.getElementById("A");
var checkboxB = document.getElementById("B");
var checkboxC = document.getElementById("C");
var checkboxD = document.getElementById("D");

