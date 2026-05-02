//Day16
//Q1- Print Right Triangle-Star Pattern

/*const prompt = require('prompt-sync')(); 

const n = Number(prompt('Enter your number: '));
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <=i ; j++) {
        process.stdout.write('* ');
    }
    console.log();
}*/

//Q2- Print Right Triangle-Number Pattern

const prompt = require('prompt-sync')(); 

const n = Number(prompt('Enter your number: '));
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <=i ; j++) {
        process.stdout.write(`${j} `);
    }
    console.log();
}