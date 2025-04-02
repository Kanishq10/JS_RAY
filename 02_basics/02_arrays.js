const a1=["batman","superman","aquaman"]
const a2=["catman","manman","the deep"]

x=a1.concat(a2);// this to concatanate but returns new
console.log(x);

let allnew=[...a1,...a2]
console.log(allnew);

a1.push(...a2); //using spread operator to push in another array

console.log(a1);

arrr=[1,2,[3,4,5,[6,4,3,5]],[4,5]]
arr=arrr.flat(Infinity)    //depth can be set
console.log(arr);

console.log(Array.isArray(arrr));

//convert
console.log(Array.from("Hitesh")); 
console.log(Array.from({name:"hitesh"}));

console.log(Array.of(1,2,3));




