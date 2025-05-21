// const promii = new Promise(
//     function (resolve, reject) {
//         setTimeout(() => {
//             console.log("Promise !!");
//             resolve();
//         }, 2000)
//     }
// )
// promii.then(() => {
//     console.log("Promise done");
// })

// new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log("promise2 executed");
//         resolve();
//     }, 1000)
// }).then(
//     () => console.log("Resolved p2")
// )

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({ username: "Chai", eid: "3213" })
//     }, 3000)
// })

// promise3.then((user) => {
//     console.log(user);
// })

// const promise4 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const error = false;
//         if (error) {
//             console.log("ERRRRRROR");
//             reject();
//         }
//         else {
//             console.log("Resolved")
//             resolve({ name: "Kitty", id: 3 })
//         }
//     }, 5000)
// })

// promise4.then(
//     (user) => {
//         console.log(user)
//         return user
//     }
// )
//     .then(
//         (user) => {
//             console.log(user.name)
//         }
//     ).catch((error) => {
//         console.log("nope", error);
//     })
//     .finally(()=> console.log("Promise haha")
//     )

const promise5= new Promise(function(resolve, reject){
    //the function inside promise will execute whenever script runs
    setTimeout(() => {
        const error = true;
        if (error) {
            // console.log("ERRRRRROR");
            reject("AAAAAAAAAAAA");
        }
        else {
            // console.log("Resolved promise5")
            resolve({username:"Kitty"})
        }
    }, 2000)
})

//async await  , wait for promise
//problem, can't directly handle errors ,so use try catch
async function consumePromiseFive(){
    try {
        const res = await promise5;
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive();

// async function GetUsers() {
//     try {
//         const response= await fetch('https://jsonplaceholder.typicode.com/users');
//         const users=await response.json();
//         console.log(users);
//     } catch (error) {
//         console.log(error);
//     }
// }

// GetUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    console.log(response);
    return response.json();
})
.then((users)=>{
    console.log(users)
})
.catch((e)=>{
    console.log(e)    
})