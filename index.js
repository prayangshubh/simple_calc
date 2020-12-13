// Project1:- Simple_Calculator

const add = require('./calculator/add.js')
const sub = require('./calculator/sub.js')
const mul = require('./calculator/mul.js')
const div = require('./calculator/div.js')
const exp = require('./calculator/exp.js')
const log = require('./calculator/log.js')
const abs = require('./calculator/abs.js')
const tan = require('./calculator/tan.js')
const cos = require('./calculator/cos.js')
const sin = require('./calculator/sin.js')

const a = parseInt(process.argv[2]);
const choice = process.argv[3];
const b = parseInt(process.argv[4]);


if(choice === "add") {
    console.log(a, choice , b);
    console.log(add(a ,b));
}

else  if(choice === "sub") {
    console.log(a, choice , b);
    console.log(sub(a ,b));
}

else  if(choice === "mul") {
    console.log(a, choice , b);
    console.log(mul(a ,b));
}

else  if(choice === "div") {
    console.log(a, choice , b);
    console.log(div(a ,b));
}

else  if(choice === "exp") {
    console.log(a, choice , b);
    console.log(exp(a ,b));
}

else  if(choice === "log") {
    console.log(a, choice);
    console.log(log(a));
}

else  if(choice === "abs") {
    console.log(a, choice);
    console.log(abs(a));
}

else  if(choice === "sin") {
    console.log(a, choice);
    console.log(sin(a));
}


else  if(choice === "cos") {
    console.log(a, choice);
    console.log(cos(a));
}

else  if(choice === "tan") {
    console.log(a, choice);
    console.log(tan(a));
}

if(choice === "+") {
    console.log(a, choice , b);
    console.log(add(a ,b));
}

else  if(choice === "-") {
    console.log(a, choice , b);
    console.log(sub(a ,b));
}

else  if(choice === "*") {
    console.log(a, choice , b);
    console.log(mul(a ,b));
}

else  if(choice === "/") {
    console.log(a, choice , b);
    console.log(div(a ,b));
}

else  if(choice === "**") {
    console.log(a, choice , b);
    console.log(exp(a ,b));
}

