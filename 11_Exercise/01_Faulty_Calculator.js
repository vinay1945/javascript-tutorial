let inputone = parseInt(prompt("enter a numbar"))
let inputtwo = parseInt(prompt("enter a numbar"))
let inputMath = parseInt(prompt("enter a math you want use(+-*/)"))
let output;
switch(inputMath){
    case '+':
        console.log(inputone-inputtwo);
    break;
    case '-':
        console.log(inputone/inputtwo);
    break;
    case '*':
        console.log(inputone+inputtwo);
    break;
    case '/':
        console.log(inputone**inputtwo);
    break;
}