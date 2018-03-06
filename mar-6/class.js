// const obj = {
//   name: 'barev'
// }

// function f(){
//   console.log(this.name);
// }

// const t = f.bind(obj);
// f();
// t();


// const arr = ['a1','b2','a3',4,5];

// const f = (arr) => {
//   const newArr = [...arr];
// };

// const t = (arr) => {
//   const newArr = arr.map((element)=>(element));
// };

// f(arr);
// console.log(arr);



// const obj = {
//   a: 56
// };

// // let a = obj.a;
// let {a} = obj;

// const newObj = {a, b: 4};

// console.log(newObj);





// class A {
//   static a(){
//     console.log('hello');
//   }

//   f(){
//     A.a();
//     console.log('barev');
//   }
// }

// const o = new A;
// o.f();

// // console.log(o.a);



// setTimeout(()=>{
//   console.log('1');
// }, 5000);


// const a = setInterval(()=>{
//   console.log('1');
// }, 1000);

// setTimeout(()=>{
//   clearInterval(a);
// }, 5000);




const myPromise = new Promise((resolve, rej)=>{
  setTimeout(()=>{
    rej('i got rejected');
  }, 3000);
});


myPromise.then((value)=>{
  console.log(value);
}).catch((err)=>{
  console.log(err);
})

console.log('adjasdasd');
console.log('123123')