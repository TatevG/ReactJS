const power = (num, pow) => {
  // !RECURSION!
  // The program must take two numbers as arguments
  // It should return the number 'num' in power of number 'pow' (num ^ pow)
  if(pow < 0) return false;
    return (pow === 0) ? 1 : num * power(num, pow - 1);
}

const range = (numA, numB) => {
  // !RECURSION!
  // The program must take two numbers as arguments
  // It should return an array of numbers between numA and numB
  // (the array should not include numA and numB)
  let res = [];
  let temp;
  if (numA === numB || numA === numB - 1) return res;
  if (numA > numB) {
    temp = numA;
    numA = numB;
    numB = temp;
  }
  res.push(numA + 1);
  return res.concat(range(numA + 1, numB));
}

const factorial = (num) => {
  // !RECURSION!
  // The program must take a number as an argument
  // It should return the factorial of number 'num' (num!)
  // 
  // What is factorial?
  // Read 5! as "factorial of number 5"
  // it is basically a multiplication of all numbers from 1 to 'num' ('num' is non-negative)
  // 5! === 5 * 4 * 3 * 2 * 1 === 120
  // 4! === 4 * 3 * 2 * 1 === 24
  // 1! === 1
  // 0! === 1
  if(num <= 0) return 0;
  return (num === 1)? 1: num * (factorial(num - 1));
}

const sumValues = (arr) => {
  // !RECURSION!
  // The program must take array of numbers as an argument
  // and return the sum of all values
  if (arr.length == 0) return undefined; 
  return (arr.length === 0) ? 0 : arr[0] + sumValues(arr.slice(1));
}