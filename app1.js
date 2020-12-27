var point = 0;
var quizPoints = document.getElementById("counterScore")
var quizKey = [
  {
    question:
      "In which year of First World War Germany declared war on Russia and France?",
    answer: "1914",
    option: ["1914", "1915", "1916", "1917"],
  },
  {
    question: "ICAO stands for",
    answer: "International Civil Aviation Organization",
    option: [
      "Indian Corporation of Agriculture Organization",
      "Institute of Company of Accounts Organization",
      "International Civil Aviation Organization",
      "None of the above",
    ],
  },
  {
    question: "What is the domain name for the country Tuvalu?",
    answer: ".tv",
    option: [".tv", ".tl", ".tt", ".tu"],
  },
  {
    question: "On Twitter, what is the character limit for a Tweet?",
    answer: "280",
    option: ["280", "160", "200", "100"],
  },
  {
    question:
      "What internet protocol was documented in RFC 1459?",
    answer: "IRC",
    option: [
      "HTTP",
      "IRC",
      "HTTPS",
      "FTP",
    ],
  },
  {
    question:
      "What is the codename of the eighth generation Intel Core micro-architecture launched in October 2017?",
    answer: "Coffee Lake",
    option: [
      "Sandy Bridge",
      "Skylake",
      "Broadwell",
      "Coffee Lake",
    ],
  },
  {
    question:
      "What port does HTTP run on?",
    answer: "80",
    option: [
      "23",
      "443",
      "80",
      "53",
    ],
  },
  {
    question:
      "What does the International System of Quantities refer 1024 bytes as?",
    answer: "Kibibyte",
    option: [
      "Kilobyte",
      "Kelobyte",
      "Kibibyte",
      "Kylobyte",
    ],
  },
  {
    question:
      "How many Hz does the video standard PAL support?",
    answer: "50",
    option: [
      "59",
      "60",
      "25",
      "50",
    ],
  },
  {
    question:
      "In certain diseases antibiotics are administered. The object is:",
    answer: "inhibit the growth of bacteria",
    option: [
      "stimulate production of white blood cells for fighting the disease",
      "stimulate production of antibodies",
      "inhibit the growth of bacteria",
      "produce toxins against bacteria",
    ],
  }
];
var numSpan = 0
function countSpan(e) {
  var span = document.getElementById("span")
  span.innerHTML=e
}
    var timerSec=59
    function timer() {
      var timerm = document.getElementById("timerm")
      var timerMin = 1
      timerm.innerHTML= timerMin
      if(timerMin == 1 & timerSec == 0){
        timerm.innerHTML= 0
        timerSec = 59
      }
      var timers = document.getElementById("timers")
      timers.innerHTML= timerSec
      timerSec--

      if (timerSec == 0 & timerMin == 0) {
        
        quizCount=0
          numSpan=0
          var quiz = document.getElementById("quiz")
          quiz.className += " dspn"
          var container = document.getElementById("container")
          container.className="container"
          quizPoints.innerHTML=scoreCounter
          clearInterval(time)
      }
    }

var quizCount = 0;
var scoreCounter = 0;

function next(e) {
  //show q
  var quest = document.getElementById("question");
  quest.innerHTML = quizKey[e].question;
  //show option
  var p = document.getElementsByClassName("option");

  for (var j = 0; j < p.length; j++) {
    p[j].innerHTML = quizKey[e].option[j];
  }
}

function check(e) {
  var radio = document.getElementsByClassName("radio");
  for (var i = 0; i < radio.length; i++) {
    var attr = radio[i].hasAttribute("checked");
    if (attr == true) {
      radio[i].removeAttribute("checked");
    }
  }
  var points = e;
  points.setAttribute("checked", "");
}
function value(e) {
  var radio = document.getElementsByClassName("radio");
  for (var i = 0; i < radio.length; i++) {
    var val = quizKey[e].option[i];
    radio[i].setAttribute("value", val);
  }
}
value(quizCount);
function nextQuestion() {
  if (numSpan == 10) {
    numSpan=1
  }
        if (quizCount == 10) {
          quizCount=0
          numSpan=0
          var quiz = document.getElementById("quiz")
          quiz.className += " dspn"
          var container = document.getElementById("container")
          container.className="container"
          quizPoints.innerHTML=scoreCounter
          clearInterval(time)
        }
  value(quizCount);
  setValue(quizCount);
  next(quizCount);
  countSpan()
  quizCount++;
  numSpan++
  countSpan(numSpan)
}


function setValue(e) {
  if(e<10){
    var radio = document.getElementsByClassName("radio");
    for (var i = 0; i < radio.length; i++) {
      var classFound = radio[i].hasAttribute("checked");
      if (classFound == true) {
        var p = radio[i].nextSibling.innerHTML;
        if (p == quizKey[e-1].answer) {
          scoreCounter++
        }
      }
    }
 }
}
var time = setInterval(timer, 1000)
function start() {
  window.location.href = "index.html";
}
