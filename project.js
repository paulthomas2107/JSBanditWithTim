// 1. Deposit money
// 2. Lines to bet on
// 3. Collect bet
// 4. Spin
// 5. Won ?
// 6. Give win
// 7. Again ?

const prompt = require('prompt-sync')();

const deposit = () => {
  while (true) {
    const depositAmount = prompt('Enter a deposit amount: ');
    const numberDepositAmount = parseFloat(depositAmount);

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
      console.log('Try again....');
    } else {
      return numberDepositAmount;
    }
  }
};

deposit();
