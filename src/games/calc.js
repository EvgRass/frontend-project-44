import {
    MAXRAUNDS,
    welcome,
    getAnswer,
    wrongAnswer
  } from '../index.js';
  
  const calculation = (number1, number2, sign) => {
    switch (sign) {
      case '+':
        return number1 + number2;
      case '-':
        return number1 - number2;
      case '*':
        return number1 * number2;
      default:
        throw new Error(`Unknown sign: '${sign}'`);
    }
  };
  
  const calc = () => {
    const name = welcome();
  
    console.log('What is the result of the expression?');
  
    for (let i = 0; i < MAXRAUNDS; i += 1) {
      const number1 = Math.floor(Math.random() * 10);
      const number2 = Math.floor(Math.random() * 10);
      const signs = '+-*';
      const sign = signs[Math.floor(Math.random() * signs.length)];
      const corAnswer = calculation(number1, number2, sign);
  
      const answer = getAnswer(`${number1} ${sign} ${number2}`);
  
      if (answer === String(corAnswer)) {
        console.log('Correct!');
      } else {
        wrongAnswer(name, answer, corAnswer);
        return;
      }
    }
  
    console.log(`Congratulations, ${name}!`);
  };
  
  export default calc;
  