// API Calls grouped by category

// Mythology
var data;

async function myt_e() {
  let response = await fetch(`https://opentdb.com/api.php?amount=1&category=20&difficulty=easy&type=multiple`);
  console.log(response)
  data = await response.json();
  console.log(data)
}

async function myt_m() {
  let response = await fetch(`https://opentdb.com/api.php?amount=1&category=20&difficulty=medium&type=multiple`);
  console.log(response)
  data = await response.json();
  console.log(data)
}

async function myt_h() {
  let response = await fetch(`https://opentdb.com/api.php?amount=1&category=20&difficulty=hard&type=multiple`);
  console.log(response)
  data = await response.json();
  console.log(data)
}

// Quiz Boilerplate Function

function populateBP2() {
  $('.quiz-box-container').html(
    `<div class="question-area">
    <h3 class="mt-3" id="question">
    </h3>
  </div>
  <div class="answer-area">
    <button class="ans1 ans">Answer 1</button
    ><button class="ans2 ans">Answer 2</button
    ><button class="ans3 ans">Answer 3</button
    ><button class="ans4 ans">Answer 4</button>
  </div>
  <div class="results-area">
          <p class="score results">
            Score:<span id="operand1">0</span>/<span id="operand2">0</span>
          </p>
          <p class="time results">Time:<span id="operand3"></span>:<span id="operand4"></span></p>
        </div>
      </div>
</div>`
  );
}

// Ner array/randomisation of JSON data for multiple choice answers

let newArray;

function randomizeJSONData(data) {
  newArray = new Array(data.results[0].incorrect_answers[0],
    data.results[0].incorrect_answers[1],
    data.results[0].incorrect_answers[2],
    data.results[0].correct_answer);

  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = newArray[i]
    newArray[i] = newArray[j]
    newArray[j] = temp
  }
};

// Run initial quiz when category/difficulty have been clicked in series

function runQuiz(data) {
  randomizeJSONData(data);
  $("#question").html(`${data.results[0].question}`)
  $('.ans1').html(`${newArray[0]}`)
  $('.ans2').html(`${newArray[1]}`)
  $('.ans3').html(`${newArray[2]}`)
  $('.ans4').html(`${newArray[3]}`)
};


// Quiz Initialization Message

function populateBP1() {
  $('.quiz-box-container').html(
    `<div class="question-area">
    <h2 class="mt-5">
      The quiz is about to begin!
    </h2>
    <h1 class="mt-5">Get ready!</h1>
  </div>`
  );
}

// Mythology Game Selection

$('#mythology').click(function () {
  $('#easy')
    .removeClass()
    .addClass('difficulty2')
    .click(function () {
      myt_e();
      populateBP1();
      setTimeout(function () {
        populateBP2();
      }, 5000);
      setTimeout(function () {
        runQuiz(data);
      }, 5001);
    });
});

$('#mythology').click(function () {
  $('#medium')
    .removeClass()
    .addClass('difficulty2')
    .click(function () {
      myt_m();
      populateBP1();
      setTimeout(function () {
        populateBP2();
      }, 5000);
      setTimeout(function () {
        runQuiz(data);
      }, 5001);
    });
});

$('#mythology').click(function () {
  $('#hard')
    .removeClass()
    .addClass('difficulty2')
    .click(function () {
      myt_h();
      populateBP1();
      setTimeout(function () {
        populateBP2();
      }, 5000);
      setTimeout(function () {
        runQuiz(data);
      }, 5001);
    });
});