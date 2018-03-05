this.name = 'THIS IS THE GLOBAL OBJECT';

const obj = {
  name: 'a',
  age: 14
};

const f = () => {
  console.log(this.name);
};

// f();

// uncomment the function call
// run the program, see the result
// change the program in a way that the logged tesult will be 'a'
// do the same thing in 2 ways, see the examples in class.js






const another_obj = {
  n1: 56,
  n2: 12
};

const func = function(n){
  console.log((this.n1 + this.n2)*n);
}

// func(4);

// uncomment the function call
// run the program, see the result
// change the program in a way that the logged tesult will be (56+12)*n
// do the same thing in 2 ways, see the examples in class.js