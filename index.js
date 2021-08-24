var readLine=  require('readline-sync');
const chalk = require('chalk');

console.log(chalk.rgb(00, 253, 255)("Good morning"));

let userName = readLine.question("What's your name? ");

console.log(chalk.blueBright.bold("Welcome " + chalk.yellowBright(userName) + " to the game of 'DO YOU KNOW RUCHI ?' "));

let score = 0;

function play(question, answer) {
  let userAnswer = readLine.question(chalk.greenBright(question));
  
  if (userAnswer.toUpperCase() === answer.toUpperCase() ) {
    console.log(chalk.magentaBright("That's right!"));
    score = score +1;
    
  } else {
    console.log(chalk.rgb(254, 103, 0)("Awww... that's wrong :( "));
  }
  console.log(chalk.whiteBright("Your score is: ") + chalk.yellowBright(score));
  console.log(chalk.cyanBright("----******----"));
}

let questionArray = [{
    question:"Where do I live? ",
    answer: "Vancouver"  
  }, {
    question: "What's my favourite sweet? ",
    answer: "laddu"
  }, {
    question: "My favourite passtime is _______ ",
    answer: "sudoku" 
  }, {
    question: "Name the colour I love: ",
    answer: "teal"
  } , {
    question: "Am I a vegetarian? ", 
    answer: "yes"
  }, {
    question: "In which country was I born? ",
    answer: "India"
  } , {
    question: "What is my zodiac sign? ",
    answer: "Virgo"
  }, { 
    question: "What is my favourite ice-cream flavour? ",
    answer: "Vanilla"
  } , { 
    question: "Am I the eldest child in my family? ",
    answer: "yes"
  } , {
    question: "What is my favourite sport? ",
    answer: "volleyball"
  }
]


for (let i=0; i< questionArray.length; i++) {
  let currentQuestion = questionArray[i];
  play(currentQuestion.question, currentQuestion.answer );
}

// final score
console.log(chalk.yellowBright(" Well Done! Your Final score: ") + chalk.greenBright(score));
 
let allScores = [{
    name: "Riya", 
    score: 10
  }, {
    name: "Ben",
    score: 9 
  }, {
    name: "Tracy", 
    score: 8
  } , {
    name: "Deepika",
    score: 6
  }, {
    name: "Harshi",
    score: 7
  }
]

console.log(chalk.rgb(255, 135, 141)("-x-x-x-x-x-x-x-x-x-x-"));

if (score >= allScores[0].score) {
  console.log(chalk.rgb(207, 255,0)("CONGRATULATIONS! You have HIGHSCORE. Checkout our high scores"));
  } else {
  console.log("HIGH SCORE so far is  "); 
}

console.log(chalk.rgb(4, 217, 255)(allScores[0].name) + " : " + chalk.rgb(193, 248, 10)(allScores[0].score ));
console.log(chalk.rgb(4, 217, 255)(allScores[1].name )+ " : " + chalk.rgb(193, 248, 10)(allScores[1].score ));
console.log("If you've beaten the highscore, " + chalk.rgb(0, 255, 124)("please send a screenshot of your score with your name") + " and we will update the highscore ");


 
  



