/*const factorial = (n) => {
  let result = 1;
  for(let i = 1; i <= n; i++){
    result *=i;
  }
  return result;
}
console.log(factorial(5));

const recFactorial = (n) => {
  if(n === 1) return n;
  return n * recFactorial(n-1);
}
console.log(recFactorial(6));
*/
/*class Car {
  constructor(wheels, color){
    this.wheels = wheels;
    this.color = color;
  }
  getInfo(){
    console.log(`Hello, I am a Car and I have ${this.wheels} wheels and my color is ${this.color}`);
  }
}

const car = new Car( 4, "Green");
car.getInfo();
*/


class Human{
  constructor(name, surname, age){
    this.name = name;
    this.surname = surname;
    this.age = age;
  }
  getInfo(){
    console.log(`Hello, I am ${this.name} ${this.surname} and I am ${this.age} years old`);
  }
}

class Programmer extends Human{
  constructor(name, surname, profession){
    super(name, surname, 27)
    this.profession = profession;
  }
  programmerInfo(){
    console.log(`I am a ${this.profession}`);
  }
}

const programmer = new Programmer("John", "Smith", "JS Developer");

programmer.getInfo();
programmer.programmerInfo();







const f = (a) => {
  return a*a;
}

const t = (a) => (a*a);

const func = a => (a*a);











const test = (b) => {
  b.a = 6;
};

let b = {};

// console.log(b);
// test(b);
// console.log(b);

// let x = [];
// let y = x;
// console.log(x);
// y.push('asdasd');
// console.log(x);

const factorial = (n) => {
  let result = 1;
  for (let i=2; i<=n; i++){
    result*=i; // result = result * i;
  }
  return result;
};

const factorialR = (n) => {
  if (n === 1) return 1;
  return n * factorialR(n-1);
};
// console.log(factorialR(5));


















// const obj = {
//   name: 'barev',
//   f: () => {
//     console.log('asdasad');
//   }
// };

// this.k = 6;
// function a() {
//   console.log(this.k);
// }

// const arrow = () => {
//   console.log(this.k);
// };
// a();
// arrow();


// const a = 'dzez';

// console.log(`barev ${a}`);




const Person = function(first_name, last_name) {
  this.f_name = first_name;
  this.l_name = last_name;
  this.speak = function() {
    console.log(`My name is: ${this.f_name} ${this.l_name}`);
  }
}

// const Human = function(first_name, last_name, age){
//   this.first_name = first_name;
//   this.last_name = last_name;
//   this.age = age;
// }
const armo = new Person('famous', 'gampr');
const h0 = new Person('adas','qew');


class Human {
  constructor(fName, lName, age){
    this.fName = fName;
    this.lName = lName;
    this.age = age;
  }

  speak(){
    console.log(`Hi, I am ${this.fName}, i am ${this.age}.`)
  }
}

const h1 = new Human('as', 'asdasd', 8);
// h1.speak();





const obj = {
  name: 'mari',
  speak: function(a, b) {
    console.log(this.name);
    console.log(a);
    console.log(b);
  }
};
const other_obj = { name:'nane' };
// obj.speak.call(other_obj, 6, 7);
// obj.speak.apply(other_obj, [3, 4]);

















class Animal {
  constructor(name, legs, color){
    this.name = name;
    this.legs = legs;
    this.color = color;
  }

  run(){
    console.log(`i am ${this.name}, and i am running with my ${this.legs} legs`);
  }
}

class Dog extends Animal {
  constructor(name, color, poch){
    super(name, 4, color);
    this.poch = poch;
  }

  bark(){
    console.log('i am barking');
    console.log(this.poch);
  }
}

const rex = new Dog('rex', 'black', 'poch uni');
// rex.run();
// rex.bark();
