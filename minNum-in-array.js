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