// function getMax(num1, num2){
//     if(num1 > num2){
//         return num1;
//     }
//     else{
//         return num2;
//     }
// }
// const disha = 65;
// const shalman = 95;
// const max = getMax(disha, shalman);
// console.log('The Max num is = ',max);

/*___________________________________________________*/
// find max in three numbers

function getMax(num1, num2, num3){
    if(num1 > num2 && num1 > num3)
    {
        console.log('Num1 is the Boss.');
    }
    if(num2 > num1 && num2 > num3)
    {
        console.log('Num2 is the Boss.');
    }
    else{
        console.log('Num3 is The ultimate boss.');
    }
}
const mim = 64;
const kim = 85;
const dim = 92;
const maxNum = getMax(mim, kim, dim);


/*___________________________________________________________*/

// find max in multiple numbers
const sem = 64;
const tem = 85;
const lem = 92;
const ham = 100;
const lam = 150;
const yam = 120;

const maxNumbers = Math.max(sem, tem, lem, ham, lam, yam);
console.log(maxNumbers);

