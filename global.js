const path = require("path");

console.log(__dirname);
console.log(`The file name is ${path.basename(__filename)}`);

for (let key in global){
    console.log(key);
}

console.log(process.argv);

function grab(flag){
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag]
}

//collecting user input
/*let greeting = grab("--greeting");
let user = grab("--user");

console.log(greeting);
console.log(user); */

process.stdout.write("Hello \n \n");

//get input from the user
const questions = [
    "What is your name?",
    "What would you rather be doing?",
    "What is your preferred programming language?"
];
const answers = [];
function ask (i = 0){
    process.stdout.write(`\n\n\n ${questions[i]}`);
    process.stdout.write( ` > `);
}

//ask();

process.stdin.on("data", function(data) {
    answers.push(data.toString().trim());
    if(answers.length < questions.length){
        ask(answers.length)
    }
    //if there is as many aswers as questions
    else{
        process.exit();
    }
});

//process answers, and write out the advice
process.on("exit",function(){
    process.stdout.write("\n\n\n\n");
    process.stdout.write(`Go ${answers[1]} ${answers[0]} you can finish writing ${answers[2]} later`

    );
});

const waitTime = 3000;
console.log(`setting a ${waitTime/1000} second delay`);
const timerFinished = () => {
    clearInterval(interval);
    console.log("done");
};

//call function after timeout(waittime)
setTimeout(timerFinished, waitTime);

//half sec
const waitInterval = 500;
let currentTime = 0;

//call the function every half sec
const incTime = () => {
    currentTime += waitInterval;
    const p = Math.floor((currentTime/waitTime) * 100);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting .. ${p}`);
};

const interval = setInterval(incTime, waitInterval);
