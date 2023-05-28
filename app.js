var mcqs = [
  {
    question: "Q1: What is Full Form of HTML?",
    opt: [
      "Hyper Text Markup Language",
      "High Text Market Language",
      "Higher Text manager Language",
      "High Texting markup Level",
    ],
    ans: "ans0",
  },
  {
    question: "Q2:Which tag is used to create a hyperlink in HTML?",
    opt: ["<h1>", "<a>", "<p>", "<div>"],
    ans: "ans1",
  },
  {
    question: "Q3:Which tag is used to define an unordered list in HTML?",
    opt: ["<ol>", "<li>", "<script.src>", "<ul>"],
    ans: "ans3",
  },
  {
    question: "Q4:What is the correct way to include an image in HTML?",
    opt: [
      "<image src='image.jpg'>",
      "<img src='image.jpg'>",
      "<img href='image.jpg'>",
      "<image href='image.jpg'>",
    ],
    ans: "ans1",
  },
  {
    question:
      "Q5:Which attribute is used to specify the URL of a linked resource in HTML?",
    opt: ["src", "link", "<script.src>", "href"],
    ans: "ans3",
  },
  {
    question: "Q6:Which tag is used to define a table row in HTML?",
    opt: ["<tr>", "<td>", "<th>", "<table>"],
    ans: "ans0",
  },
  {
    question: "Q7:What is the correct HTML element for inserting a line break?",
    opt: ["<break>", "<br>", "<lb>", "<newline>"],
    ans: "ans1",
  },
  {
    question: "Q8:Which tag is used to define a section of an HTML document?",
    opt: ["<div>", "<article>", "<container>", "<section>"],
    ans: "ans3",
  },
  {
    question: "Q9:What is the correct HTML element for the largest heading?",
    opt: ["<h1>", "<heading>", "<h6>", "<head>"],
    ans: "ans0",
  },
  {
    question: "Q10:Which tag is used to embed a video in HTML?",
    opt: ["<media>", "<embed>", "<video>", "<movie>"],
    ans: "ans1",
  }
  
];

//////////////get element from html/////////////
var question = document.getElementById("question");
var options = document.getElementsByClassName("options");
var radio = document.getElementsByClassName("radio");
var display = document.querySelector(".percentage");
var circle = document.querySelector(".circle");
var message = document.getElementById("message");
var index = 0;
var marks = 0;

function quiz() {
  for (i = 0; i < mcqs[0].opt.length; i++) {
    options[i].innerText = mcqs[index].opt[i];
    question.innerText = mcqs[index].question;
  }
}
quiz();

function submit() {
  for (i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      radio[i].checked = false;
      if (radio[i].id == mcqs[index].ans) {
        marks += 5;
      }
    }
  }
  index++;
  if (index == mcqs.length) {
    var totalMarks = (marks / 50) * 100;
    display.innerHTML = totalMarks + "%";
    if (totalMarks >= 70) {
      circle.style.stroke = "green";
      message.innerHTML = "Passed";
    }
    circle.attributes[1].nodeValue = (marks / 50) * 100 + "," + 100;
    display.parentNode.parentNode.parentNode.style.display = "grid";
    return;
  }
  quiz();
}


function reset(){
   index = 0
   marks = 0
   display.parentNode.parentNode.parentNode.style.display = "none";
   message.innerHTML = "Go To Home"
   circle.style.stroke = "rgb(199, 32, 32)"
   quiz()
}