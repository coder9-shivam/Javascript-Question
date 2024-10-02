function handleCostKeydown(event) {
  // console.log(event.key);
  if (event.key === "Enter") {
    calculateTotal();
  }
}

function calculateTotal() {
  const inputElement = document.querySelector(".js-cost-input");
  let cost = Number(inputElement.value) * 100;

  document.querySelector('.js-total-cost').innerHTML = '';
  document.querySelector('.js-error-message').innerHTML = '';

  
  if (cost < 0) {
    document.querySelector('.js-error-message').innerHTML = 'Error: cost cannot be less than $0';
    return;
  }

  else if (cost < 4000) {
    cost += 1000;
  }

  document.querySelector(".js-total-cost").innerHTML = `$${cost / 100}`;
}