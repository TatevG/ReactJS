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
