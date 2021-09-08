//// API Call Function

var data;

async function callApiData(category, difficulty) {
  let response = await fetch(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`);
  data = await response.json();
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
let position = -1;

function randomizeJSONData(data) {
    newArray = new Array(data.results[position].incorrect_answers[0],
    data.results[position].incorrect_answers[1],
    data.results[position].incorrect_answers[2],
    data.results[position].correct_answer);
    
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = newArray[i]
    newArray[i] = newArray[j]
    newArray[j] = temp
  }
};

// Run initial quiz when category/difficulty have been clicked in series

function runQuiz(data) {
  $('.ans').css({
    'background-color': '#fff'
  })
  position++; // This code was is a workaround to bug number 5 which is listed in the relevant section in the Readme
  randomizeJSONData(data);
  $('#question').html(`${data.results[position].question}`)
  $('.ans1').html(`${newArray[0]}`)
  $('.ans2').html(`${newArray[1]}`)
  $('.ans3').html(`${newArray[2]}`)
  $('.ans4').html(`${newArray[3]}`)
};


// Category Selection

let category;

$('.category').click(function (event) {
  category = event.currentTarget.attributes[2].nodeValue
  $('.difficulty').removeClass().addClass('difficulty2 diifficulty');
  $('.category').css({
    'background-color': 'rgb(41, 41, 41)'
  })
  $(this).css({
    'background-color': 'rgb(255, 136, 0)',
    'transform': 'scale(1.05)',
    'box-shadow': '2px 2px 2px rgb(141, 141, 141)'
  });
  
});

// Difficulty Selection

let difficulty;

$('.difficulty').click(function (event) {
  difficulty = event.currentTarget.attributes[1].nodeValue;
  $('.difficulty').removeClass().addClass('difficulty2 diifficulty') // Classes are added to change pointer events from none to auto
  callApiData(category, difficulty);
  populateBP1();
  setTimeout(function () {
    populateBP2();
  }, 4000);
  setTimeout(function () {
    runQuiz(data);
  }, 4001);
});

// Update Score

function updateScore() {
  
  var score = document.getElementById('operand1');
  var potentialScore = document.getElementById('operand2');
  var currentScore = score.innerHTML;
  var currentPotentialScore = potentialScore.innerHTML;
  currentScore++;
  currentPotentialScore++;
}

// Check Answer via event delegation

$(".quiz-box-container").on("click", ".ans1, .ans2, .ans3, .ans4", function () {
  if ($(this).html() === data.results[position].correct_answer) {
    updateScore()
    $(this).css({
      'background-color': 'rgba(35, 251, 57, 1)' // Green for correct
    })
    setTimeout(function(){ runQuiz(data); }, 1500);
  } else {
    $(this).css({
      'background-color': 'red' // Red for incorrect
    })
    setTimeout(function(){ runQuiz(data); }, 1500);
  };
});

// Update Score

// updateScore()

// End Game Results

// endGame()
