let a= "ejje"
const gameName= new String('HEHE')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);



let str = "Hello, World!";

// 1. String Length
console.log("Length:", str.length);

// 2. Accessing Characters
console.log("First character:", str[0]);
console.log("Character at index 1:", str.charAt(1));

// 3. Changing Case
console.log("Uppercase:", str.toUpperCase());
console.log("Lowercase:", str.toLowerCase());

// 4. Finding Substrings
console.log("Index of 'World':", str.indexOf("World"));
console.log("Last index of 'o':", str.lastIndexOf("o"));
console.log("Includes 'World'?", str.includes("World"));
console.log("Starts with 'Hello'?", str.startsWith("Hello"));
console.log("Ends with '!'?", str.endsWith("!"));

// 5. Extracting Parts of a String
console.log("Slice(7, 12):", str.slice(7, 12));
console.log("Substring(7, 12):", str.substring(7, 12));
console.log("Substr(7, 5):", str.substr(7, 5)); // Deprecated

// 6. Replacing Parts of a String
console.log("Replace 'World' with 'JS':", str.replace("World", "JS"));
console.log("Replace all 'o' with '0':", str.replace(/o/g, "0"));

// 7. Splitting a String
let words = str.split(", ");
console.log("Split by ', ':", words);

// 8. Removing Whitespace
let spacedStr = "   Hello World!   ";
console.log("Trim:", spacedStr.trim());
console.log("Trim Start:", spacedStr.trimStart());
console.log("Trim End:", spacedStr.trimEnd());

// 9. Repeating a String
console.log("Repeat 'Hi! ' 3 times:", "Hi! ".repeat(3));

// 10. Padding a String
console.log("Pad Start:", "5".padStart(3, "0"));
console.log("Pad End:", "5".padEnd(3, "0"));


//ex
const url="afadfadvvzcafda///afdc"
console.log(url.replace('///','-'));
console.log(url.includes('ca'));

let userInput = '"Hello"';
let jsonData = `{"message": ${JSON.stringify(userInput)}}`;
console.log(jsonData);
