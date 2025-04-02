//singleton object
// let tinderUser = new Object()
let tinderUser = {}
tinderUser.name="Bohemia"
tinderUser.age=23
tinderUser.email="BOBO@gmail.com"
tinderUser.isLoggedIn=false
console.log(tinderUser);

const regularUser={
    email:"meow@gmail.com",
    fullname:{
        firstname:"Meoww",
        lastname:"Behemouth"
    }
}
console.log(regularUser.fullname?.firstname);    // ? if this does not exist
console.log(regularUser["fullname"]["firstname"]);   //preferred

let obj1={1:"a", 2:"b"}
let obj2={3:"c",4:"d"}
// let obj3={obj1 , obj2}

// let obj3 = Object.assign({},obj1,obj2);    //Object.assign({target,source)   
let obj3={...obj1, ...obj2};    // best method
console.log(obj3);

const arrOb=[
    {
        name:"Don",
        age:39,
        fullname:{
            firstname:"Kani",
            lastname:"Sh"
        }
    },
    {
        name:"Mahindra",
        age:39,
        fullname:{
            firstname:"Ram",
            lastname:"Sharma"
        }
    }
]
// console.log(arrOb[1]['fullname']);
// console.log(...arrOb);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLogged'));


console.log("=============================================================================")
// object literal
const mysym=Symbol("key1")

let user={
    name:"Kanishq",
    "full name":"HAHANONO",
    [mysym]:"mykey1",     //symbols using as hidden property which should not collide with others
    email:"skibdi@gmail.com",
    age:23,
    isLoggedIn:false,
    lastLoginDays:["monday","Saturday"]
}

console.log(user.email);
console.log(user["email"]);   //good
console.log(user["full name"]);  //here
console.log(user[mysym]);  
user.email="brainrot@gmail.com"
console.log(user);
// // Object.freeze(user);  //no further changes in object
// user.email="brainrot222222@gmail.com"
// console.log(user);

user.greetings= function(){
    console.log("Hoho, Hello");
}

user.greetings2= function () {
    console.log(this.name);
}

console.log(user.greetings());
console.log(user.greetings2());






