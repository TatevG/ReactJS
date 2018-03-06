// const a = fetch('https://api.github.com/users/narghev');
// console.log(a);

// setTimeout(()=>{
//   console.log(a);
// },1000)

// fetch('https://api.github.com/users/narghev').then((response)=>{
//   response.json().then((value)=>{
//     console.log(value);
//   }).catch((err)=>{
//     console.log(err);
//   });
// }).catch((err)=>{
//   console.log(err);
// });


const myFunction = async () => {
  try {
    const response = await fetch('https://api.github.com/users/narghev');
    const value = await response.json();
    console.log(value);
  }
  catch (e) {
    console.log(e);
  }
};

console.log(1);
myFunction();
console.log(2);