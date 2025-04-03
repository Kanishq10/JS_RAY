const user={
    username :"hitesh",
    price :999,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
    }
}

// user.welcomeMessage();
// user.username="Ram";
// user.welcomeMessage();

console.log(this);    //this referes to current context, browser has window as global

//arrow function    ,()->{}
let total = (num1,num2)=>{
    return num1+num2;
}

console.log(total(10,3));

//real usage , for shorten the function
// let multi=(num1,num2)=> num1 * num2
let multi=(num1,num2)=> (num1 * num2)
let mut=(num1,num2)=> ({username: "Hello"})

console.log(multi(2,5));

