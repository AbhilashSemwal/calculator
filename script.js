// const calculator = {
//     displayValue: '0',
//     firstOperand: null,
//     waitingForSecondOperand: false,
//     operator: null
//   };
  
//   const display = document.querySelector('.calculator-display');
//   const keys = document.querySelector('.calculator-keys');
  
//   function updateDisplay() {
//     display.textContent = calculator.displayValue;
//   }
  
//   updateDisplay();
  
//   keys.addEventListener('click', event => {
//     const { target } = event;
//     if (!target.matches('button')) return;
  
//     const { action } = target.dataset;
//     const buttonContent = target.textContent;
//     const { displayValue, waitingForSecondOperand } = calculator;
  
//     if (!action) {
//       if (waitingForSecondOperand) {
//         calculator.displayValue = buttonContent;
//         calculator.waitingForSecondOperand = false;
//       } else {
//         calculator.displayValue = displayValue === '0' ? buttonContent : displayValue + buttonContent;
//       }
//       updateDisplay();
//       return;
//     }
  
//     if (action === 'decimal') {
//       if (!displayValue.includes('.')) {
//         calculator.displayValue += '.';
//       } else if (waitingForSecondOperand) {
//         calculator.displayValue = '0.';
//         calculator.waitingForSecondOperand = false;
//       }
//       updateDisplay();
//       return;
//     }
  
//     if (action === 'clear') {
//       calculator.displayValue = '0';
//       calculator.firstOperand = null;
//       calculator.waitingForSecondOperand = false;
//       calculator.operator = null;
//       updateDisplay();
//       return;
//     }
  
//     if (action === 'calculate') {
//       if (calculator.operator && calculator.firstOperand !== null) {
//         const result = performCalculation[calculator.operator](parseFloat(calculator.firstOperand), parseFloat(displayValue));
//         calculator.displayValue = `${parseFloat(result.toFixed(7))}`;
//         calculator.firstOperand = result;
//         calculator.waitingForSecondOperand = true;
//         calculator.operator = null;
//         updateDisplay();
//       }
//       return;
//     }
  
//     // Operator key
//     if (['add', 'subtract', 'multiply', 'divide'].includes(action)) {
//       const inputValue = parseFloat(displayValue);
  
//       if (calculator.operator && calculator.waitingForSecondOperand) {
//         calculator.operator = action;
//         return;
//       }
  
//       if (calculator.firstOperand == null && !isNaN(inputValue)) {
//         calculator.firstOperand = inputValue;
//       } else if (calculator.operator) {
//         const result = performCalculation[calculator.operator](calculator.firstOperand, inputValue);
//         calculator.displayValue = `${parseFloat(result.toFixed(7))}`;
//         calculator.firstOperand = result;
//         updateDisplay();
//       }
  
//       calculator.operator = action;
//       calculator.waitingForSecondOperand = true;
//     }
//   });
  
//   const performCalculation = {
//     add: (first, second) => first + second,
//     subtract: (first, second) => first - second,
//     multiply: (first, second) => first * second,
//     divide: (first, second) => second !== 0 ? first / second : 'Error'
//   };
  