import {
  MAXRAUNDS,
  welcome,
  getAnswer,
  wrongAnswer,
} from '../index.js';

const getProgression = () => {
  const res = ['', 0];
  const firstElement = Math.floor(Math.random() * 100);
  const incr = Math.floor(Math.random() * 15 + 2);
  const numberHiddenElement = Math.floor(Math.random() * 9);

  for (let i = 0; i < 10; i += 1) {
    if (i === numberHiddenElement) {
      res[0] = `${res[0]}.. `;
      res[1] = firstElement + incr * i;
    } else {
      const nextElement = firstElement + incr * i;
      res[0] = `${res[0]}${nextElement} `;
    }
  }

  return res;
};

const progression = () => {
  const name = welcome();

  console.log('What number is missing in the progression?');

  for (let i = 0; i < MAXRAUNDS; i += 1) {
    const progr = getProgression();
    const answer = getAnswer(progr[0]);

    if (answer !== String(progr[1])) {
      wrongAnswer(name, answer, progr[1]);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export default progression;
