this.name = 'THIS IS THE GLOBAL OBJECT';

const obj = {
    name: 'a',
    age: 14
};

// make a function that will console log this.name,
// make it console log obj.name when calling
// dont use call or apply

const sayName = (val = null) => {
    console.log(val == null ? this.name : obj.name);
}
sayName();

// fix the code below
// the originalArray should not be mutated.
// create a new array that will be the reverse of the originalArray


const originalArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const reversedArray = (arr) => {
    const newArr = [...arr]
    newArr.reverse();
};

reversedArray(originalArray);
console.log(originalArray);





// make this code shorter

const obj1 = {
    abcdefghijklmnopqrstuvwxyz: 123
};

const {abcdefghijklmnopqrstuvwxyz}= obj1;

console.log(abcdefghijklmnopqrstuvwxyz);





// make a promise that will resolve or reject after 5 seconds.
// resolve if a randomly generated number is more than 0.5
// reject if it it less than or equal 0.5
// to generate a random number use the Math.random() function
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// do not forget to catch
// solve this problem with both .then and async await notations


const newPromise = new Promise((resolve, reject) => {
    const temp = Math.random();
    return (temp > 0.5)?setTimeout(() => {
        resolve('I got resolved');
    }, 5000):setTimeout(() => {
            reject('I got rejected');
        }, 5000)
    })

newPromise.then((val) => {
    console.log(val);
}).catch((e) => {
    console.log(e);
})
