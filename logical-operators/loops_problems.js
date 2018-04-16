// factorial

let n = 5;
let result = 1;

for (let i = 1; i <= n; i++) {
  result *= i;
}

console.log(result); //prints the factorial of n



// sum of odd numbers

let x = 15;
let sum = 0;

for (let i = 0; i < x; i++) {
  if (i%2 ==0) {
    sum +=i;
  }
  
}

console.log(sum); //print the sum of odd numbers in range 0 to x



// number of digits

let number = 485;
let numberOfDigits = 0;

while(number != 0){
  numberOfDigits++;
  number = parseInt(number/10);
}
console.log(numberOfDigits); // print the number of digits of number



// product of digits

let num = 954;
let product = 1;

while (num != 0) {
  product *= (num%10);
  num = parseInt(num/10);
}

console.log(product); //prints the product of digits of num