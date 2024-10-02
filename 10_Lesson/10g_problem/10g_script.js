function functionButton(selector) {
  const elementbutton = document.querySelector(selector);
  if (!elementbutton.classList.contains("is-toggled")) {
    previousButtonTurnOff();

    elementbutton.classList.add("is-toggled");
  } else {
    elementbutton.classList.remove("is-toggled");
  }
}

function previousButtonTurnOff() {
  const previousButton = document.querySelector(".is-toggled");
  if (previousButton) {
    previousButton.classList.remove("is-toggled");
  }
}