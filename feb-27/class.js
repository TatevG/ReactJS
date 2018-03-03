// do {
//   console.log('asdasd');
// }
// while (false);

// let a = ['a', 'b', 'c'];
// console.log(a[2]);


let a = [];

for (let i = 0; i < 10; i++) {
    a[i] = i * i;
}

a.push('asdad');
a.pop();

// console.log(typeof a);

// for (let i=0; i<a.length; i++){
//   a[i]+=1;
//   console.log(a[i]);
// }

// for (let i in a){
//   a[i]=1;
//   console.log(a[i]);
// }

// for (let i of a){
//   console.log(i);
// }

// a.forEach((b)=>{
//   b=1;
// });

// let test = a.map((b)=>{
//   return "asdasads";
// });
// console.log(a);
// console.log(test);




let contacts = {
    a0: 3216,
    a1: 13871239,
    a2: 1237123
};

// console.log(typeof contacts);


// console.log(contacts.a0);
// console.log(contacts['a0']);

// for (let i in contacts){
//   console.log(contacts[i]);
// }


// console.log(contacts);
// contacts.a0 = undefined;
// console.log(contacts);
// delete contacts.a0;
// console.log(contacts);



function f(a, b, c) {
    console.log(typeof a);
}
// f('asdasdas');
// f(12123);
// f(null);

// function sum(a,b,c){
//   console.log(a+b+c);
// }
// sum(1,2);
// sum();
// sum(null, 1);
// sum(1,2,3);

// function square(n){
//   return n*n;
// }

// let t = square(5);
// console.log(t);

// let y = function(a,b,c){
//   return (a*b)-c;
// }
// console.log(y(1,2,3));

// let sum = (a,b) => {
//   return a+b;
// };
// console.log(sum('ab', 'cd'));


// const func = (b) => {
//   b = 4;
//   return b;
// }
// let k = 6;

// console.log(k);
// console.log(func(k));
// console.log(k);


// var t1 = 5;
// const o1 = () => {
//   var b = 1;
//   console.log(t1);
// };
// o1();
// console.log(b);

// for (var i = 0; i<10; i++){};
// console.log(i);


console.log(testLet);
var testLet = 5;