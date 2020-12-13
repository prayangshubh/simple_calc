// Project1:- Simple_Calculator

const add = require('./calculator/add.js')
const sub = require('./calculator/sub.js')
const mul = require('./calculator/mul.js')
const div = require('./calculator/div.js')
const exp = require('./calculator/exp.js')
const tan = require('./calculator/tan.js')


const a = parseInt(process.argv[2]);
const choice = process.argv[3];
const b = parseInt(process.argv[4]);

console.log(a, choice , b);

if(choice === "add") {
    console.log(add(a ,b));
}

else  if(choice === "sub") {
    console.log(sub(a ,b));
}

else  if(choice === "mul") {
    console.log(mul(a ,b));
}

else  if(choice === "div") {
    console.log(div(a ,b));
}

else  if(choice === "exp") {
    console.log(exp(a ,b));
}

else  if(choice === "tan") {
    console.log(tan(a));
}

if(choice === "+") {
    console.log(add(a ,b));
}

else  if(choice === "-") {
    console.log(sub(a ,b));
}

else  if(choice === "*") {
    console.log(mul(a ,b));
}

else  if(choice === "/") {
    console.log(div(a ,b));
}

else  if(choice === "**") {
    console.log(exp(a ,b));
}


else {
    console.log("Invalid Command!")
}


