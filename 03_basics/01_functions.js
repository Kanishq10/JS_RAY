function addTwoNumber(number1, number2){
    return number1 + number2;
}

const result = addTwoNumber(2,5);
console.log(result);

function loginUserMessage(username){
    if(username===undefined){
        console.log("Pls enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage());
