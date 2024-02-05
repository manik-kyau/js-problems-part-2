// Find Max Element in array
// const heights = [65, 66, 67, 68, 69,72, 78, 60, 55, 22];
// function getMax(numbers){
//     let max = numbers[0];

//     for(const num of numbers){
//         if(num > max){
//             max=num;
//         }
//     }
//     return max;
// }
// const max = getMax(heights);
// console.log('The Max value is : ',max);


/*________________________________________________________________*/

// Find min Element in array

const heights = [65, 66, 67, 68, 69,72, 78, 60, 55, 22];
function getMin(numbers){
    let min = numbers[0];
    for(const num of numbers){
        if(num < min){
            min = num;
        }
    }
    return min;
}
const minNum = getMin(heights);
console.log('The Min numbers is  : ',minNum);