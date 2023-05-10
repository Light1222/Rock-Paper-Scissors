var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render("choices");
});

/* get turn */
router.get('/turn', function(req, res) {
 let playerChoice = req.query.choice;
 let pcChoice = getPcChoice(['queen','rook','bishop', 'knight', 'pawn']);
 // let pcChoice = getPcChoice(['rock','paper','scissors']);
 let winner = pickWinner(playerChoice, pcChoice);
  res.render('results', {
    playerChoice: playerChoice,
    pcChoice: pcChoice,
    winner: winner
  });
})

module.exports = router;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function getPcChoice(options){
  let choiceIndex = getRandomInt(5);
  return options[choiceIndex];
}

function pickWinner(playerChoice, pcChoice) {
  if (playerChoice === pcChoice) {
    return 'draw';
  }
  if (playerChoice === 'queen') {
    return 'Player'
  }
  if (playerChoice === 'rook') {
    if (pcChoice === 'queen') {
      return 'PC'
    }
    if (pcChoice !== 'queen') {
      return 'Player'
    }
  }
  if (playerChoice === 'bishop') {
    if (pcChoice === 'queen' || 'rook') {
      return 'PC'
    }
    if (pcChoice !== 'queen' || 'rook') {
      return 'Player'
    }
  }
  if (playerChoice === 'knight') {
    if (pcChoice === 'queen' || 'rook' || 'bishop') {
      return 'PC'
    }
    if (pcChoice === 'pawn') {
      return 'Player'
    }
  }
  if (playerChoice === 'pawn') {
    return 'PC'
  }
}

//   if (playerChoice === 'rock') {
//     if (pcChoice === 'paper') {
//       return 'PC'
//     }
//     if (pcChoice === 'scissors') {
//       return 'Player'
//     }
//   }
//   if (playerChoice === 'paper') {
//     if (pcChoice === 'scissors') {
//       return 'PC'
//     }
//     if (pcChoice === 'rock') {
//       return 'Player'
//     }
//   }
//   if (playerChoice === 'scissors') {
//     if (pcChoice === 'rock') {
//       return 'PC'
//     }
//     if (pcChoice === 'paper') {
//       return 'Player'
//     }
//   }
// }