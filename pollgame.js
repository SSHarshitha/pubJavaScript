const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Ruby', '3: C++'],
    // This generates [0, 0, 0, 0]. More in the next section 😃
    answers: new Array(4).fill(0),
    registerNewAnswer() {
        // Get answer
        const answer = Number(
            prompt(
                `${this.question}\n${this.options.join('\n')}\n(Write option number)`
            )
        );
        console.log(answer);

        // Register answer
        typeof answer === 'number' &&
            answer < this.answers.length && this.answers[answer]++;

        console.log(this.answers);
    },
};
document.querySelector('.poll').addEventListener('click',
    poll.registerNewAnswer.bind(poll));