function gamingButton() {
  const elementButton = document.querySelector('.js-button');
  
  if (elementButton.innerHTML === 'Game') {
    elementButton.innerHTML = 'Gaming';
    elementButton.classList.add('is-toggled')
  }
  else{
    elementButton.innerHTML = 'Game';
    elementButton.classList.remove('is-toggled')
  }
}