/** App Function */

const QuizGame = () => {
  
  // Set time
  let totalTime = 10;
  let gameTime = 0;

  // Set scores
  let correct = 0;
  let wrong = 0;
  const total = questions.length;

  const init = () => {
    $(document).ready(function () {
      // console.log(questions);
      $('.start').on('click', startGame);
    })
  }

  const startGame = (e) => {
    e.preventDefault();
    // Hide intro and display quiz questions
    $('.intro').hide();
    $('.quiz').show();

    displayQuestion();
    $('.time').text(totalTime);
    stopWatch();
  }

  const displayQuestion = () => {
    // let index = 0;
    const question = questions.shift();
    console.log(questions);
    const quiz = $(`<div class="card" style="width: 18rem;">
                      <div class= "card-header">
                        ${question.title}
                      </div>
                    </div >`);

    const choicesList = $('<ul class="list-group list-group-flush"></ul>');

    choicesList.on('click', (e) => { handleAnswerClick(e, question.answer) })

    question['choices'].forEach(choice => {
      choicesList.append(`<li type="button" class="list-group-item mt-3">${choice}</li>`);
    })
    quiz.append(choicesList);
    $('.quiz').append(quiz);
  }
  
  const handleAnswerClick = (e, answer) => {
    e.preventDefault();

    if ($(e.target).html() === answer) {
      e.target.style.backgroundColor = 'green';
      correct++;
      totalTime++;
      setTimeout(() => {
        $('.quiz').empty();
        if (questions.length !== 0) {
          displayQuestion();
        }else {
          gameTime = totalTime;
          endGame();
          $('.time').text(totalTime);
          totalTime = 0;
        }
      }, 1000);
    } else {
      wrong++;
      e.target.style.backgroundColor = 'red';
      setTimeout(() => {
        totalTime -= 9;
        if (totalTime <= 0) {
          totalTime = 0
        }
        $('.quiz').empty();
        displayQuestion();
      }, 1000);
    }
  }

  const displayScorecard = () => {
    $('.quiz').hide();
    $('.score-card').show();
    $('.score-card').html(`<div class="card" style="width: 18rem;">
  <div class="card-header">
    Score: ${gameTime}
  </div>
  <ul class="list-group list-group-flush d-flex flex-direction-row">
    <li class="list-group-item">${wrong}</li>
    <li class="list-group-item">${correct}</li>
    <li class="list-group-item">${(correct / total * 100).toFixed(0)}%</li>
  </ul>
</div>`)
  } 

  const stopWatch = () => {
    if (totalTime === 0) {
      gameTime = totalTime;
      endGame();
      $('.time').text(totalTime);
    }
    if (totalTime > 0) {
      $('.time').text(totalTime--);
      setTimeout(stopWatch, 1000);
    }
  }

  const endGame = () => {
    displayScorecard();
  }

  init();
}

QuizGame();












