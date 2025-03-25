let x=100.23456
console.log(x)
let y=new Number(100)
console.log(y)
console.log(typeof(x),typeof(y));
console.log(typeof x.toString().length);
console.log(x.toFixed(2));
console.log(y.toPrecision(5));


console.log( Number.MAX_SAFE_INTEGER);
console.log( Number.MIN_SAFE_INTEGER);


const xx=100000000000
console.log(xx.toLocaleString('en-IN'));


const dd = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// British English uses day-month-year order and 24-hour time without AM/PM
console.log(dd.toLocaleString("en-GB", { timeZone: "UTC" }));
// Expected output: "20/12/2012, 03:00:00"

// Korean uses year-month-day order and 12-hour time with AM/PM
console.log(dd.toLocaleString("ko-KR", { timeZone: "UTC" }));
// Expected output: "2012. 12. 20. 오전 3:00:00"



//---------------------------Maths-------------------------
console.log(Math);  //on broswer
console.log(Math.abs(-110));
console.log(Math.ceil(10.66));
console.log(Math.ceil(10.14));
console.log(Math.floor(10.66));
console.log(Math.floor(10.14));
console.log(Math.min(1,3,5,6,7,7));

//mostly used
console.log(Math.random());   //bw 0 t0 1 , 0 included , 1 excluded
console.log(Math.random()*10);
console.log((Math.random()*10)+1);


//general formula
let min=10
let max=20

console.log(Math.floor(Math.random()*(max-min+1))+min);
