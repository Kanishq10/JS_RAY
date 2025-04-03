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



function cartTotal(num1, num2 , ...values){
    return  values;
}

console.log(cartTotal(100,200,3000));

const user={
    username:"hitesh",
    price:199
}

function handleObject(anyObject){
    console.log((`username is ${anyObject.username} and price is ${anyObject.price}`));   
}

handleObject(user)