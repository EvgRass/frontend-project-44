import readlineSync from 'readline-sync';

export const MAXRAUNDS = 3;

export const welcome = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  return userName;
};

export const getAnswer = (expression) => {
  console.log(`Question: ${expression}`);

  return readlineSync.question('Your answer: ');
};

export const wrongAnswer = (name, answerWr, answerCor) => {
  console.log(`'${answerWr}' is wrong answer ;(. Correct answer was '${answerCor}'.`);
  console.log(`Let's try again, ${name}!`);
};
