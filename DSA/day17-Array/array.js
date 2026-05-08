//Q1- Calulate the sum and mean of Array.


/*

if (n <= 0) {
    console.log("Please enter a valid length.");
} else {
    let arr = new Array(n);
    let sum = 0;

    for (let i = 0; i < n; i++) {
        arr[i] = Number(prompt(`Enter value for index ${i}: `));
        sum += arr[i];
    }

    let mean = (sum / n).toFixed(1);

    process.stdout.write(`Sum: ${sum}`);
    process.stdout.write(`Mean: ${mean}`)
}
    */


// Q2- Find the Greatest Element and Its Index.


/*

 let arr = [10, 20, 30, 40, 50];
let greatestNum = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > greatestNum) {
        greatestNum = arr[i];
    }
}
console.log(greatestNum, arr.indexOf(greatestNum));

 */

//Q3- Find the Second Greatest Element.

/*

let arr = [2,96,105,1445,20,145,1444];

let greatestElem = Math.max(arr[0],arr[1]);
let secondGreatestElem = Math.min(arr[0],arr[1]);

for (let i = 2; i < arr.length; i++) {
    if (arr[i]>greatestElem) {
        secondGreatestElem = greatestElem;
        greatestElem = arr[i];
    }
    else if (arr[i]>secondGreatestElem && greatestElem!==secondGreatestElem){
        secondGreatestElem = arr[i];
    };
};
console.log(greatestElem,secondGreatestElem);
*/
