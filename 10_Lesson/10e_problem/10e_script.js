function gamingButton() {
  const elementButton = document.querySelector('.js-game-button');
  
  if (elementButton.innerHTML === 'Game') {
    elementButton.innerHTML = 'Gaming';
    elementButton.classList.add('is-toggled')
  }
  else{
    elementButton.innerHTML = 'Game';
    elementButton.classList.remove('is-toggled')
  }
}

function musicButton() {
  const elementButton = document.querySelector('.js-music-button');
  
  if (elementButton.innerHTML === 'Music') {
    elementButton.innerHTML = 'Singing';
    elementButton.classList.add('is-toggled')
  }
  else{
    elementButton.innerHTML = 'Music';
    elementButton.classList.remove('is-toggled')
  }
}

function techButton() {
  const elementButton = document.querySelector('.js-tech-button');
  
  if (elementButton.innerHTML === 'Tech') {
    elementButton.innerHTML = 'Technological';
    elementButton.classList.add('is-toggled')
  }
  else{
    elementButton.innerHTML = 'Tech';
    elementButton.classList.remove('is-toggled')
  }
}