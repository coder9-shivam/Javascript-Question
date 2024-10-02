let calculation = localStorage.getItem('calculation') || '';
      
      displayCalcaulation();
      
      function updateCalculation(value) {
        calculation += value;
        displayCalcaulation();
        localStorage.setItem('calculation', calculation);
      }

      function displayCalcaulation() {
        document.querySelector('.js-calculation')
          .innerHTML = `${calculation}`;
      }