//destructuring
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

console.log(tinderUser.name);
console.log(tinderUser.hasOwnProperty("isLoggedIn"));



const course ={
    coursename: "js in hindi",
    price: "999",
    courseInstructor: {
        fullname:{
            firstname:"Hitesh",
            lastname:"Kumar"
        }
    }
}

//destructuring
const {coursename}=course; 
console.log(coursename);

const {courseInstructor : instructure}= course;      //alias
console.log(instructure);

//usage
// const navbar=({company})=>{  //destructuring the prop

// }

//Used in api's
//api will be informat of json , array, array of objects