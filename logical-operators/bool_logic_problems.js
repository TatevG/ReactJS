// even or odd
let n = 15;
let result;

if(n%2 == 0){
  result = "even";
}else{
  result = "odd";
}

console.log(result); // prints even or odd



// weekday
let weekdayNumber = 6;
let weekday;

switch (weekdayNumber) {
  case 1:
    weekday = "erkushabti";
    break;
  case 2:
    weekday = "ereqshabti";
    break;
  case 3:
    weekday = "choreqshabti";
    break;
  case 4:
    weekday = "hingshabti";
    break;
  case 5:
    weekday = "urbat";
    break;
  case 6:
    weekday = "shabat";
    break;
  case 7:
    weekday = "kiraki";
    break;
  default:
    weekday = "No weekday";
    break;
}

console.log(weekday); // monday, tuesday, wed... weekend for sat and sun


// max
let a = 5;
let b = 10;
let max = 0;

if (a>b) {
  max = a;
}else{
  max = b;
}

console.log(max); // should print a or b