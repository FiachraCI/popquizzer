//// API Calls grouped by category

// Mythology
var data;

async function callApiData(category, difficulty) {
  let response = await fetch(`https://opentdb.com/api.php?amount=1&category=${category}&difficulty=${difficulty}&type=multiple`);
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
    <button class="ans1 ans"></button
    ><button class="ans2 ans"></button
    ><button class="ans3 ans"></button
    ><button class="ans4 ans"></button>
  </div>
  <div class="results-area">
          <p class="score results">
            Score:<span id="operand1">0</span>/<span id="operand2">0</span>
          </p>
          <p class="time results">Time:<span id="operand3"></span>:
          <span id="operand4"></span></p>
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

// New array/randomisation of JSON data for multiple choice answers

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
  $('#question').html(`${data.results[0].question}`)
  $('.ans1').html(`${newArray[0]}`)
  $('.ans2').html(`${newArray[1]}`)
  $('.ans3').html(`${newArray[2]}`)
  $('.ans4').html(`${newArray[3]}`)
};


// Mythology Game Selection




// $(this).click(function () {

//   let categoryParent = document.getElementById('mythology');
//   console.log(categoryParent)
//   $('.quiz-box-container')
//   $('#easy')
//     .removeClass()
//     .addClass('difficulty2')
//     .click(function () {
//       callApiData(categoryParent.dataset.cat, 'easy'); //Mythology Originally
//       populateBP1();
//       setTimeout(function () {
//         populateBP2();
//       }, 5000);
//       setTimeout(function () {
//         runQuiz(data);
//       }, 5001);
//     });
// });

let category;
let difficulty;

$('.category').click(function (event) {
  category = event.currentTarget.attributes[2].nodeValue
  console.log(category)

  $('.difficulty').removeClass().addClass('difficulty2 diifficulty')
});

$('.difficulty').click(function (event) {
  difficulty = event.currentTarget.attributes[1].nodeValue;
  console.log(difficulty)
  $('.difficulty').removeClass().addClass('difficulty2 diifficulty')
  callApiData(category, difficulty);
  populateBP1();
  setTimeout(function () {
    populateBP2();
  }, 1000);
  setTimeout(function () {
    runQuiz(data);
  }, 1001);
});

// Check Answer

// Update Score

// updateScore()

// Update Time

// updateTime()

// Visual Feedback For Correct/Incorrect Answers

// visualFB()

// End Game Results

// endGame()

// Check Answer/Generate New question

// function checkAnswer() {

// }