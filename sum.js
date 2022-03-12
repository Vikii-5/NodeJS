// function sum(a, b){
//     return a + b;
// }

// console.log(sum(5,6));

// const sub = (a, b) => {return a - b};
// console.log(sub(15,6));
// console.log(sub(11,1));
// console.log("Addition");

// const num = [1,2,3,7,8,9,10];
// console.log(Math.max(...num));

const [ , , a, b] = process.argv;
const sum = (a, b) => {return a + b};
console.log(sum(+a,+b));