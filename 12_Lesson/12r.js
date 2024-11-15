let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();

let isAutoPlaying = false;
let intervalId;

// const autoPlay = () => {};

function autoPlay() {
  if (!isAutoPlaying) {
    document.querySelector('.js-auto-play-button')
      .innerHTML = 'Stop Playing';
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
  } else {
    document.querySelector('.js-auto-play-button')
      .innerHTML = 'Auto Play';
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}

document.querySelector('.js-rock-btn')
  .addEventListener('click', () => {
    playGame('rock');
  });

document.querySelector('.js-paper-btn')
  .addEventListener('click', () => {
    playGame('paper');
  });

document.querySelector('.js-scissors-btn')
  .addEventListener('click', () => {
    playGame('scissors');
  });

document.querySelector('.js-reset-btn')
  .addEventListener('click', () => {
    showResetConfirmation();
  });

document.querySelector('.js-auto-play-button')
  .addEventListener('click', () => {
    autoPlay();
  });


document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r' || event.key === 'R') {
    playGame('rock');
  } else if (event.key === 'p' || event.key === 'P') {
    playGame('paper');
  } else if (event.key === 's' || event.key === 'S') {
    playGame('scissors');
  } else if (event.key === 'a' || event.key === 'A') {
    autoPlay();
  } else if (event.key === 'Backspace') {
    resetScore();
  }
});

function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('score');
  updateScoreElement();
}


function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'rock') {
    // Campare the move to get the result
    if (computerMove === 'rock') {
      result = 'Tie.';
    }
    else if (computerMove === 'paper') {
      result = 'You lose.';
    }
    else if (computerMove === 'scissors') {
      result = 'You win.';
    }
  }

  else if (playerMove === 'paper') {
    // Campare the move to get the result
    if (computerMove === 'rock') {
      result = 'You win.';
    }
    else if (computerMove === 'paper') {
      result = 'Tie';
    }
    else if (computerMove === 'scissors') {
      result = 'You lose.';
    }
  }

  else if (playerMove === 'scissors') {
    // Campare the move to get the result
    if (computerMove === 'rock') {
      result = 'You lose.';
    }
    else if (computerMove === 'paper') {
      result = 'You win.';
    }
    else if (computerMove === 'scissors') {
      result = 'Tie.';
    }
  }

  // Update a score
  if (result === 'You win.') {
    score.wins += 1;
  }
  else if (result === 'You lose.') {
    score.losses += 1;
  }
  else if (result === 'Tie') {
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result')
    .innerHTML = result;

  document.querySelector('.js-moves')
    .innerHTML = `You
      <img src="${playerMove}-emoji.png" alt="" class="move-icon">
      <img src="${computerMove}-emoji.png" alt="" class="move-icon">
      Computer`;
}


function updateScoreElement() {
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins},Losses: ${score.losses}, Tie: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = '';

  // Computer Randomly selects a move
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  }
  else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  }
  else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  return computerMove;

}


function showResetConfirmation(){
  document.querySelector('.js-reset-confirmation')
    .innerHTML = `
      Are you sure you want to reset the score?
      <button class="js-reset-confirmation-yes reset-confirm-btn">Yes</button>

      <button class="js-reset-confirmation-no reset-confirm-btn">No</button>
    `;

  document.querySelector('.js-reset-confirmation-yes')
    .addEventListener('click', () => {
      resetScore();
      hideResetConfirmation();
    });

  document.querySelector('.js-reset-confirmation-no')
    .addEventListener('click', () => {
      hideResetConfirmation();
    })

}

function hideResetConfirmation(){
  document.querySelector('.js-reset-confirmation')
    .innerHTML = "";
}