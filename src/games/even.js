import {MAXRAUNDS, welcome, getAnswer, wrongAnswer} from '../index.js';

const isEven = (number) => number % 2 === 0;

const even = () => {
    const name = welcome();
    const yes = 'yes';
    const no = 'no';

    console.log(`Answer "${yes}" if the number is even, otherwise answer "${no}".`);

    for (let i = 0; i < MAXRAUNDS; i += 1) {
        const random = Math.floor(Math.random() * 100);
        const answer = getAnswer(random);

        if (!isEven(random) && answer !== no) {
            wrongAnswer(name, answer, no);
            return;
        } else if (isEven(random) && answer !== yes) {
            wrongAnswer(name, answer, yes);
            return;
        } else {
            console.log('Correct!');
        }
    }

    console.log(`Congratulations, ${name}!`);
}

export default even;