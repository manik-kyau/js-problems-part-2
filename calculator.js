function add(num1, num2){
    const sum = num1 + num2;
    return sum;
}

function subtract(num1, num2){
    const subt = num1 - num2;
    return subt;
}

function multiply(num1, num2){
    const multi = num1 * num2;
    return multi;
}
function divide(num1, num2){
    const divi = num1 / num2;
    return divi;
}

function calculator(a, b, operation){
    if(operation === 'add'){
        const result =  add(a, b);
        return result;
    }

    if(operation === 'subtract'){
        const result = subtract(a, b);
        return result;
    }
    if(operation === 'multiply'){
        const result = multiply(a, b);
        return result;
    }
    if(operation === 'divide'){
        const result = divide(a, b);
        return result;
    }
}
const Result =calculator(5, 5, 'divide');
console.log(Result);

