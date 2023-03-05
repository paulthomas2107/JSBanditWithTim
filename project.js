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
      console.log('Try deposit again....');
    } else {
      return numberDepositAmount;
    }
  }
};

const getNumberOfLines = () => {
  while (true) {
    const lines = prompt('Enter number of lines (1-3): ');
    const numberOfLines = parseFloat(lines);

    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
      console.log('Try lines again....');
    } else {
      return numberOfLines;
    }
  }
};

const getBet = (balance, lines) => {
  while (true) {
    const bet = prompt('Enter total bet per line : ');
    const numberBet = parseFloat(bet);

    if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
      console.log('Try bet again....');
    } else {
      return numberBet;
    }
  }
};

let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);
