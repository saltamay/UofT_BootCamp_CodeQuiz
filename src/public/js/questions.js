const questions = [
  {
    title: 'What is the correct way to call the random method on the Math global object?',
    code: '',
    choices: ['random.Math()', 'Math(randon)', 'Math.random()', 'math.random()'],
    answer: 'Math.random()'
  },
  {
    title: 'What is the outcome of the following code snippet?',
    code: 'console.log(\'Hello world\');',
    choices: [
      'log(\'Hello world\') is printed to the console', 
      '\'Hello world\' is printed to the console with single quatation marks',
      'Hello world is stored as a variable',
      'Hello world is printed to the console'
    ],
    answer: 'Hello world is printed to the console'
  },
  {
    title: 'What are variables used for in JavaScript?',
    code: '',
    choices: [
      'For changing language settings',
      'For storing or holding data',
      'For changing a value\'s data type'
    ],
    answer: 'For storing or holding data'
  },
  {
    title: 'What is the correct way to call a string’s built-in method?',
    code: '',
    choices: [
      "toUpperCase('str')",
      "'str'.toUpperCase()",
      "toUpperCase.'str'()",
      "'str'.toUpperCase"
    ],
    answer: "'str'.toUpperCase()"
  },
  {
    title: "What is string interpolation?",
    code: "",
    choices: [
      "Printing a string to the console",
      "Using template literals to embed variables into strings",
      "Joining multiple strings together using operators like +",
      "Changing the value of a variable"
    ],
    answer: "Using template literals to embed variables into strings"
  },
  {
    title: "What is the outcome of this statement?",
    code: "console.log('hi!'.length);",
    choices: [
      "hi! is printed to the console",
      "3 is printed to the console",
      "'hi!'.length will be printed to the console",
      "1 is printed to the console"
    ],
    answer: "3 is printed to the console"
  },
  {
    title: "What is string concatenation?",
    code: "",
    choices: [
      "When you print string to the console",
      "When you join strings together",
      "When you assign a string to a variable",
      "When you change a variable's value"
    ],
    answer: "When you join strings together"
  },
  {
    title: "Which of the following is an example of a single line comment?",
    code: "",
    choices: [
      "// Is this a comment?",
      "console.log()",
      "console.log('Is this a comment?');",
      "'Is this a comment?"
    ],
    answer: "// Is this a comment?"
  },
  {
    title: "What will the following code print to the console?",
    code: "let num = 10;\nnum *= 3;\nconsole.log(num);",
    choices: [
      "3",
      "30",
      "'num'",
      "10"
    ],
    answer: "30"
  },
  {
    title: "What is the correct way to declare a new variable that you can change?",
    code: "",
    choices: [
      "let myName = 'Sloan'",
      "myName = 'Sloan'",
      "let myName: 'Sloan'",
      "const myName = 'Sloan'"
    ],
    answer: "let myName = 'Sloan'"
  }
]