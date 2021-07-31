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