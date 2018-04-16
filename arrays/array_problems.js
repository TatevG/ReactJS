const findNumberGreaterThan10 = (arr) => {
    // The program must take an array of numbers as an argument
    // and return an array of numbers greater than or equal to 10.
    let result = [];
    for (const i in arr) {
        if(i >= 10 ){
            result.push(i);
        }
    }
    return result;
}
const findNumberInArray = (arr, num) => {
    // The program must take an array of numbers and a number as arguments.
    // it should search for the inputed number in the array.
    // If found, return true 
    // If not found, return false
    for (const i in arr) {
        if (i === num) {
            return true   
        }
    }
    return false;
}
const concatenateArrays = (arrA, arrB) => {
    // The program must take 2 arrays of numbers as arguments
    // The program should concatenate (append, add) 2 arrays to each other
    // and return a new concatenated array.
    let result = [];
    for (let i = 0; i < arrA.length; i++) {
        result[i] = arrA[i];
        }
    for (let j = 0; j < arrB.length; j++) {
        result[j + arrA.length] = arrb[j];
    }
    return result;
}
const sumValues = (arr) => {
    // The program must take array of numbers as an argument
    // and return the sum of all values
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];   
    }
    return sum;
}
const findMaxAndMin = (arr) => {
    // The program must take an array of numbers as an argument
    // find maximum and minumum numbers in the array
    // return an object { max, min } where "max" is a maximum number
    // and "min" is a minimum number
    var min = arr[0];
    var max = min;
    for (var i = 1; i < arr.length; ++i) {
        if (arr[i] > max) max = arr[i];
        if (arr[i] < min) min = arr[i];
    }
    var obj = {
        maxVal: max, 
        minVal: min,
    };
    return obj;
}
const reverseArray = (arr) => {
    // The program must take an array of numbers as an argument
    // and return the reverse of that array
    let result = [];
    for (const i = arr.length - 1; i>= 0; i--) {
        result.push(arr[i]);
    }
    return result;
}