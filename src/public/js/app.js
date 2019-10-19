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

  const stopWatch = () => {
    if (totalTime === 0) {
      // gameTime = totalTime;
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
    $('#nameSubmit').on('click', handleInputSubmit);
  }

  const displayScorecard = () => {
    $('.quiz').hide();
    $('.score-card').show();
    $('.score-card').html(`<div class="card" style="width: 18rem;">
  <div class="card-header">
    Score: ${gameTime}
    <div class="input-group mb-3">
    <input type="text" class="form-control player" placeholder="Initials" aria-label="Username" aria-describedby="basic-addon1">
    <div class="input-group-append">
    <button class="btn btn-outline-secondary" type="button" id="nameSubmit">Submit</button>
    </div>
  </div>
  </div>
  <ul class="list-group list-group-flush d-flex flex-row">
    <li class="list-group-item">${wrong}</li>
    <li class="list-group-item">${correct}</li>
    <li class="list-group-item">${(correct / total * 100).toFixed(0)}%</li>
  </ul>
</div>`)
  } 

  const handleInputSubmit = (e) => {

    e.preventDefault();

    $('.score-card').hide();
    $('.score-table').show();

    const playerName = $('.player').val();
    const player = {
      name: playerName,
      score: gameTime
    }
    // console.log(player);
    saveToLocalStorage(player);
    displayRankings(player);
  }

  const displayRankings = (currentPlayer) => {
    const players = JSON.parse(localStorage.getItem('players'));
    sortArray(players);
    // console.log(players);

    const rankings = $(`<div class="card" style="width: 18rem;">
                      <div class= "card-header">
                        Score Table
                      </div>
                    </div >`);

    const playerList = $('<ul class="list-group list-group-flush"></ul>');

    players.forEach((player, index) => {
      if (currentPlayer.name === player.name) {
        playerList.append(`<li type="button" class="list-group-item font-weight-bold mt-3">${index + 1}. ${player.name} ${player.score}</li>`);
      }else{
        playerList.append(`<li type="button" class="list-group-item mt-3">${index + 1}. ${player.name} ${player.score}</li>`);
      }
    })
    rankings.append(playerList);
    $('.score-table').append(rankings);
  }

  // Array that sorts the players array by the score
  const sortArray = (arr) => {
    arr.sort((a, b) => {
      const scoreA = a.score;
      const scoreB = b.score;
      if (scoreA < scoreB)
        return 1
      if (scoreA > scoreB)
        return -1
      return 0
    })
  }

  // Saves the player to the LocalStorage
  const saveToLocalStorage = (player) => {
    if (localStorage.getItem('players') === null) {
      const players = [];
      players.push(player);
      localStorage.setItem('players', JSON.stringify(players));
    } else {
      const players = JSON.parse(localStorage.getItem('players'));
      players.push(player);
      localStorage.setItem('players', JSON.stringify(players));
    }
  }

  

  init();
}

QuizGame();












