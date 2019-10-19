/** Functions */

const init = () => {

}

const displayQuestion = (question) => {
  const quiz = $(`<div class="card" style="width: 18rem;">
                      <div class= "card-header">
                        ${question.title}
                      </div>
                    </div >`);

  const choicesList = $('<ul class="list-group list-group-flush"></ul>');

  question['choices'].forEach(choice => {
    choicesList.append(`<li type="button" class="list-group-item">${choice}</li>`);
  })
  quiz.append(choicesList);
  $('.quiz').append(quiz);
}

const startApp = (e) => {
  e.preventDefault();
  // Hide intro and display quiz questions
  $('.intro').hide();
  $('.quiz').show();

  displayQuestion(questions[0]);
}

$(document).ready(function() {
  $('.start').on('click', startApp);
})

