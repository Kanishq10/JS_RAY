//couted in milliseconds from january 1970
let datetime=new Date()
console.log(datetime)
console.log(datetime.toString())
console.log(datetime.toDateString())
console.log(datetime.toLocaleString('en-In',{ timeZone: "Asia/Kolkata" }))
console.log(datetime.toLocaleTimeString('en-In',{ timeZone: "Asia/Kolkata" }))
console.log(datetime.toISOString())
console.log(typeof datetime)

console.log('----------------------------------');
// let custom=new Date(2023,0,23)        //month startd from 0
// let custom=new Date(2023,0,23,5,3)        //month startd from 0
// let custom=new Date("2020-01-20")        
let custom=new Date("01-29-2022")        
console.log(custom.toString())

// let mytimestamp= Date.now()
// console.log(mytimestamp);    //milliseconds
// console.log(custom.getTime());   //give in milliseconds from 1 jan 1970
//now we can compare them

// console.log(Math.floor(Date.now()/1000));   //to convert in seconds

let dd=new Date()
console.log(dd);
console.log(dd.getDate());
console.log(dd.getDay());
console.log(dd.getMonth());
console.log(dd.getHours());

dd.toLocaleString('default',{
    weekday: "long"
})




