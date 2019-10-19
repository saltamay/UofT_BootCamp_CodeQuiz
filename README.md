# code-quiz
A timed quiz application with multiple choice questions on JavaScript fundamentals that stores high scores for users to gauge progress compared to peers

## Table of Contents

1. [About the Project](#about-the-project)
2. [API(s) Used](#apis(s)-used)
3. [Development Strategy](#development-strategy)
4. [Additional Features](#additional-features)
5. [Getting Started](#getting-started) 
6. [Built With](#built-with)
7. [Test](#test)
8. [Licence](#licence)

## About the Project

As I proceed in my career as a web developer, I will probably be asked to complete a coding assessment. These assessments are typically a combination of multiple-choice questions and interactive challenges. As a bootcamp student, I want to build a code quiz application with multiple-choice questions on JavaScript that stores high scores so I can gauge my progress compared my peers. 

Initial design of the app has the following deliverables:

 * The user arrives at the landing page and is presented with a call-to-action to "Start Quiz." Also navigation options to "View Highscores" and the "Time" value set at 0.
 
 * Clicking the "Start Quiz" button presents the user with a series of questions. The timer is initialized with a value and immediately begins countdown.
 
 * Score is calculated by time remaining. Answering quickly and correctly results in a higher score. Answering incorrectly results in a time penalty (for example, 15 seconds are subtracted from time remaining).
 
 * When time runs out and/or all questions are answered, the user is presented with their final score and asked to enter their initials. Their final score and initials are then stored in `localStorage`.
 
 * It is also responsive and designed with mobile first principle.
 
 ## Minimun Requirements
 
 * Functional, deployed application.

 * GitHub repository with README describing project.

 * The first view of the application displays a button that starts the quiz.

 * Clicking the start button displays a series of questions.

 * Once the quiz begins, a timer starts.

 * If a question is answered incorrectly, additional time is subtracted from the timer.

* The timer stops when all questions have been answered or the timer reaches 0.

* After the game ends, the user can save their initials and score to a highscores view using local storage.

## Demo

![Demo My Code Quiz App](src/public/assets/showcase/demo.gif?raw=true)

## Development Strategy

1. Setup the ui where users can start the quiz or see the scores
2. Setup 'questions.js' that store questions in an object collection
3. Setup app.js that has the following functionalities:
    1. init() function that initilizes the app; this funtion will contain to _initialize the game_, like resetting scores or loading the   questions.
    2. startApp() function that starts the app; this task handles starting the game ex. show start page, display navigation, loads the  score from localStorage or sets up localStorage, listen for user click event
    3. startBtn_onClick(event) that handles the click event ex. show the questions, start the counter
    4. gameLogic() that deals with the game logic by starting the timer, and listen for click events of all quiz question buttons.
    5. quizBtns_onClick(event) that handles what to do when you click on a question's "answer button", call a function that determines if question is answered correctly (or not).
    6. determineIfQuestionIsRightOrWrong(question) given a question, determines if the answer is right or wrong if question is correct, change the score and add some points, if question is incorrect, change the score and decrease points
    7. changeTheScore(value) function will increase -or- decrease the score.
    8. endGame() function will ask for initials, update the local storage and score table
    
## Additional Features

* Add ui features to alert the user of correct or incorrect answers. Be sure to include the appropriate license.

* Customize the application theme.

* Create multiple quizzes and an option for users to choose between them.

* Add the application to personal portfolio.

  
