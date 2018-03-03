let bool = false;

if (bool) {
    console.log('bool is true');
}
else {
    console.log('bool is not true');
}

let number = 4;

if (number === 4) {
    console.log(4);
}
else if (number === 5) {
    console.log(5);
}
else {
    console.log('not 4, not 5');
}

let string = 'barev';

switch (string) {
    case 'a':
        console.log('adsasdad');
        break;
    case 'barev':
        console.log(1234);
    case 'b':
        console.log('b');
        break;
    default:
        console.log('default');
        break;
}


let n = -6;

if (n % 2) { console.log('odd'); }
else {
    console.log('even');
}

for (let i = 1; i < 100; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

let i = 0;
while (i < 100) {
    console.log(i);
    i++;
}


let i = 0;
console.log(++i);
console.log(i);

let n = 123456;
let result = 0;
while (n !== 0) {
    n = Math.floor(n / 10);
    result++;
}
console.log(result);

let n = 5;
let result = 1;
for (let i = n; i >= 1; i--) {
    result *= i;
}

console.log(result);