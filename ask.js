const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const questions = [
    "What is your name?",
    "Where do you live?",
    "What are you going to do with Node.js"
];

function collectAnswers(questions, done) {
    const answers = [];

    const questionAnswered = (answer) => {
        answers.push(answer.trim());
        if(answers.length < questions.length) {
            //position in the array
            rl.question(
                questions[answers.length], 
                questionAnswered
            );
        }//if out of answers
        else {
            return done(answers); //exit function
        }
    };

    rl.question(questions[0], questionAnswered);
}

collectAnswers(questions, () => {
    console.log("Thank you for your answers!");
    console.log(answers);
    process.exit();
});

