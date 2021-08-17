
var readLineSync = require('readline-sync');
const chalk = require('chalk');
var score = 0;

var scores=[
  {
    Name:"Ajay",
    Score:5,
  },
  {
    Name:"Kumar",
    Score:4,
  }
]

var questions = [
  {question:"what is my nick name? ",answer:"AJ"},
  {question:"which is my favourite dish? ",answer:"Fish"},
  {question:"My favourite car? ",answer:"BMW"},
  {question:"My favourite color? ",answer:"yellow"},
  {question:"who is my favourite superhero? ",answer:"batman"},
  {question:"which is my favourite choclate? ",answer:"perk"}
]

function play(question,answer)
{
  var userAnswer = readLineSync.question(chalk.bold.blue(question));

  if(userAnswer.toUpperCase() == answer.toUpperCase())
  {
    console.log(chalk.green("Yay you are right!"))
    score++;
  }else
  {
    console.log(chalk.red("You are Wrong!"));
    score--;
  }
  console.log("Your score is"+" "+score)
  console.log("-------------------------------")
}

function viewScores()
{
  console.log(chalk.red.bold("Top Scores, Mail me to update to your score"));
  scores.map(m => console.log(m.Name, " : ", m.Score))
}


function playGame()
{
  for(i=0;i<questions.length;i++)
  { 
    play(questions[i].question,questions[i].answer);
  }
   console.log(chalk.green("Yay You scored:")+" "+score)
}


playGame()
viewScores();



