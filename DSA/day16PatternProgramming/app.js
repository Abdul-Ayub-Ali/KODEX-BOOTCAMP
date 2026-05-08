//Day16
//Q1- Right Triangle-Star Pattern.

/*const prompt = require('prompt-sync')(); 

const n = Number(prompt('Enter your number: '));
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <=i ; j++) {
        process.stdout.write('* ');
    }
    console.log();
}*/

//Q2- Right Triangle-Number Pattern.

/*const prompt = require('prompt-sync')(); 

const n = Number(prompt('Enter your number: '));
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <=i ; j++) {
        process.stdout.write(`${j} `);
    }
    console.log();
}*/

//Q3- Right Triangle-Alphabet Pattern.


/*const prompt = require('prompt-sync')(); 

const n = Number(prompt('Enter your number: '));
for (let i  = 0; i  < n; i++) {
    for (let j = 0; j <=i; j++) {
       process.stdout.write(String.fromCharCode(j+65)+" ");
    };
    console.log();
};*/


//Q4- Inverted Right Triangle-Star Pattern.

/*const prompt = require('prompt-sync')(); 

const n = Number(prompt('Enter your number: '));
for (let i = 1; i <= n; i++) {
    for (let j = n; j >= i; j--) {
        process.stdout.write(`* `);
    };
    console.log()
};*/


//Q5- Mirrored Right Triangle-Star Pattern.

/*const prompt = require('prompt-sync')(); 

const n = Number(prompt('Enter your number: '));

for (let i = 1;i<=n; i++) {
    process.stdout.write("  ".repeat(n-i));
    for (let j = 1; j <=i; j++) {
        process.stdout.write("* ");
    };
    console.log();
};*/

//Q6-Print a V Shaped Pattern.


/*const prompt = require('prompt-sync')(); 

const n = Number(prompt('Enter your number: '));

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= (n*2)-1; j++) {
        if (i===j || i+j===n*2) {
            process.stdout.write("*")
        }
        else process.stdout.write(" ")
    }
    console.log()
}*/


//Q7-Print an X-Shape Pattern.

/*const prompt = require('prompt-sync')(); 

const n = Number(prompt('Enter your number: '));

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        if (i===j || i+j===n+1) {
            process.stdout.write("*")
        }
        else process.stdout.write(" ")
    }
    console.log()
}*/