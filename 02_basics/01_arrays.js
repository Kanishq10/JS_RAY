let arr1=[1,3,4,2,5]
console.log(arr1)

let arr2=new Array(3,2,5,6)
console.log(arr2);

arr1.push(20)
arr1.push(34)
console.log(arr1)
arr2.pop()
arr2.pop()
console.log(arr2);
console.log(arr1.length);


//work on left side
arr2.unshift(10,2,4)    //not recommended for very large data
console.log(arr2);
arr2.shift()
console.log(arr2);

console.log(arr2.includes(4));
console.log(arr2.indexOf(4));

//to string
const newarrstr=arr2.join(' ')
console.log(newarrstr);

//slice , splice
console.log('----------------------------');

console.log(arr1.slice(0,3));
console.log(arr1);

console.log(arr1.splice(0,3));
console.log(arr1);

//splice changes original also









