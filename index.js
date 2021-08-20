var readLine=  require('readline-sync');

let userName = readLine.question("What's your name? ");
console.log("Welcome " + userName + " to the game of 'DO YOU KNOW RUCHI?' ");

let score = 0;

function play(question, answer) {
  let userAnswer = readLine.question(question);
  
  if (userAnswer.toUpperCase() === answer.toUpperCase() ) {
    console.log("That's right!");
    score = score +1;
    
  } else {
    console.log("Awww... that's wrong :( ")
  }
  console.log("Your score is: " + score);
  console.log("----******----")
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
console.log(" Well Done! Your Final score: " + score);
 
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

console.log("-x-x-x-x-x-x-x-x-x-x-");

if (score >= allScores[0].score) {
  console.log("CONGRATULATIONS! You have HIGHSCORE");
  } else {
  console.log("HIGH SCORE so far is  "); 
}

console.log(allScores[0].name + " : " + allScores[0].score );
console.log(allScores[1].name + " : " + allScores[1].score );
console.log("If you've beaten the highscore, please send a screenshot of your score with your name and we will update the highscore ");


 
  



