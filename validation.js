// function multiply(num1, num2){
//     if(typeof num1 !== 'number' || typeof num2 !== 'number'){
//         return 'Please provide a number';
//     }
//     const mult = num1 * num2;
//     return mult;
// }

// const result1 = multiply(5, 7);
// console.log(result1);
// const result2 = multiply([5],[7]);
// console.log(result2);
// const result3 = multiply([5, 4], [7]);
// console.log(result3);
// const result4 = multiply(5);
// console.log(result4);



/*__________________________________________________________________*/

// validation array

function getArray(numbers){
    if(Array.isArray(numbers) ===false){
        return 'Please Provide an array.'
    }
    const array = numbers[3];
    return array;
}
const result = getArray(4);
console.log(result);