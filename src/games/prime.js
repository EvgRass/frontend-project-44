import {MAXRAUNDS, welcome, getAnswer, wrongAnswer} from '../index.js';

const prime = () => {
    const name = welcome();

    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

    for (let i = 0; i < MAXRAUNDS; i += 1) {
        const random = Math.floor(Math.random() * 100 + 1);
        const correctAnswer = isPrime(random);
        
        const answer = getAnswer(random);

        if (!correctAnswer && answer !== "no") {
            wrongAnswer(name, answer, "no");
            return;
        } else if (correctAnswer && answer !== "yes") {
            wrongAnswer(name, answer, "yes");
            return;
        } else {
            console.log('Correct!');
        }      
    }

    console.log(`Congratulations, ${name}!`);
}

const isPrime = (num) => {
    if (num === 1) {
        return false;
    }

    for (let i = 2; i <= num / 2; i += 1) {
        if (num % i === 0) {
            return false;
        }
    }
    
    return true;
}

export default prime;
