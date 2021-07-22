function populateBP2() {
  $('.quiz-box-container').html(
    `<div class="question-area">
    <h3 class="mt-3">
      "In which 1979 film was the spaceship called Nostromo?"
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
          <p class="time results">Time:<span id="operand3">x</span></p>
        </div>
      </div>
</div>`
  );
}

function populateBP1() {
  $('.quiz-box-container').html(
    `<div class="question-area">
    <h1 class="mt-5">
      The quiz is about to begin, get ready!
    </h1>
  </div>`
  );
}

$('#mythology').click(function () {
  $('#easy')
    .removeClass()
    .addClass('mythology_easy difficulty2')
    .click(function () {
      populateBP1();
      setTimeout(function () {
        populateBP2()
      }, 5000);
    })
  $('#medium')
    .removeClass()
    .addClass('mythology_medium difficulty2')
    .click(populateBP);
  $('#hard')
    .removeClass()
    .addClass('mythology_hard difficulty2')
    .click(populateBP);
});