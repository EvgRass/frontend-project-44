import {
  MAXRAUNDS,
  welcome,
  getAnswer,
  wrongAnswer,
} from '../index';

const findGCD = (a, b) => {
  if (!b) {
    return a;
  }

  return findGCD(b, a % b);
};

const gcd = () => {
  const name = welcome();

  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < MAXRAUNDS; i += 1) {
    const number1 = Math.floor(Math.random() * 10 + 1);
    const number2 = Math.floor(Math.random() * 10 + 1);

    const corAnswer = findGCD(number1, number2);
    const answer = getAnswer(`${number1} ${number2}`);

    if (answer === String(corAnswer)) {
      console.log('Correct!');
    } else {
      wrongAnswer(name, answer, corAnswer);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default gcd;
