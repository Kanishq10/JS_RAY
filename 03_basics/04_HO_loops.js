const greetings= ["hello","hola","Namaste"]

for(const greet of greetings){
    console.log(greet);
}

const map=new Map();    //basically hashmap
map.set("a",1);
map.set("b",2);
map.set("c",3);


console.log(map);

// for(const key of map.keys()){
//     console.log(key);
// }


// console.log(map.get("a"));

for(const [key] of map.keys()){
    console.log(key);
}

for(const [key,values] of map){    //object is not iterable like it
    console.log(key,values);
}

const languages={
    rs:"rust",
    cpp:"C++",
    py:"python",
    rb:"ruby"
}
console.log('\n\n');

for(key in languages){
    console.log(key,languages[key]);
}

for(index in greetings){
    console.log(greetings[index]);
}

// of is used to extract keys and well as values , while in  only index,keys, can't use in with maps

const ll=['python', 'ruby', 'java','rust']

//higher order function
ll.forEach(val=>console.log(val,"="));
ll.forEach((val,index,arr)=>console.log(val,index));

const myCoding=[
    {
        languagename:"Java",
        languagefilename:"java"
    },
    {
        languagename:"C++",
        languagefilename:"cpp"
    },
    {
        languagename:"JavaScript",
        languagefilename:"js"
    },
    {
        languagename:"Python",
        languagefilename:"py"
    }
]


myCoding.forEach((item)=>{
    for(key in item){
        console.log(key , item[key]);
    }
});