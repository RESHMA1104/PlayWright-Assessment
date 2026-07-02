import promptSync from "prompt-sync";
const prompt = promptSync();

let num1 = Number(prompt("Enter first integer: "));
let num2 = Number(prompt("Enter second integer: "));

if(num1 > 0 && num2 > 0){
    let a = num1 + num2;
    console.log("Sum : ", a);
    let b = num1 - num2;
    console.log("Sub : ", b);
    let c = num1 * num2;
    console.log("Mul : ", c);
    let d = num1 / num2;
    console.log("Div : ", d);
}
else if(num1 == 0 || num2 == 0){
    console.log("Number cannot divide by zero")
}
