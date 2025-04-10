// for each can't return anything

const mynum=[1,2,3,4,5,6,7,8,9,0]
const filtered = mynum.filter((num)=> num>3)   //type return if {}
console.log(filtered);

const books = [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
      rating: 4.3,
      genre: "Classic"
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960,
      rating: 4.8,
      genre: "Historical Fiction"
    },
    {
      title: "1984",
      author: "George Orwell",
      year: 1949,
      rating: 4.6,
      genre: "Dystopian"
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      year: 1813,
      rating: 4.5,
      genre: "Romance"
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      year: 1951,
      rating: 3.9,
      genre: "Coming-of-Age"
    },
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      year: 1937,
      rating: 4.7,
      genre: "Fantasy"
    },
    {
      title: "Fahrenheit 451",
      author: "Ray Bradbury",
      year: 1953,
      rating: 4.2,
      genre: "Science Fiction"
    },
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      year: 1988,
      rating: 4.1,
      genre: "Adventure"
    },
    {
      title: "Moby-Dick",
      author: "Herman Melville",
      year: 1851,
      rating: 3.8,
      genre: "Adventure"
    },
    {
      title: "The Book Thief",
      author: "Markus Zusak",
      year: 2005,
      rating: 4.4,
      genre: "Historical Fiction"
    }
  ];
  
const userBooks= books.filter((bk)=>{
    return (bk.genre==="Classic" || bk.year<1930 )      //return must be necessary if {}
})

console.log(userBooks);

const newNums= mynum.map((num)=> num+1);
console.log(newNums);

//chaining
let updatedNums = newNums.map((num)=> num*5)
                        .map(num=>num/2)
                        .filter(num=>num<=10);  

                        
console.log(updatedNums, "flow: map1=> map2 => filter") 

//reduce
// updatedNums=updatedNums.reduce(function(accumulator,current){
//     return accumulator+current;
// }, 5)          //initial values

updatedNums=updatedNums.reduce((acc,curr)=>(acc+curr) , 0);   //short
console.log(updatedNums)

const shoppingCart = [
    {
      name: "Wireless Mouse",
      price: 25.99,
      quantity: 1,
      category: "Electronics"
    },
    {
      name: "Bluetooth Headphones",
      price: 59.99,
      quantity: 2,
      category: "Electronics"
    },
    {
      name: "Notebook",
      price: 3.49,
      quantity: 5,
      category: "Stationery"
    },
    {
      name: "Water Bottle",
      price: 12.95,
      quantity: 1,
      category: "Home & Kitchen"
    },
    {
      name: "Yoga Mat",
      price: 20.00,
      quantity: 1,
      category: "Fitness"
    },
    {
      name: "LED Desk Lamp",
      price: 18.75,
      quantity: 1,
      category: "Home & Office"
    },
    {
      name: "Ballpoint Pens (10 pack)",
      price: 6.99,
      quantity: 1,
      category: "Stationery"
    },
    {
      name: "USB-C Cable",
      price: 9.99,
      quantity: 3,
      category: "Electronics"
    },
    {
      name: "Coffee Mug",
      price: 7.95,
      quantity: 2,
      category: "Kitchen"
    },
    {
      name: "T-shirt",
      price: 14.50,
      quantity: 2,
      category: "Clothing"
    }
  ];
  
const Total=shoppingCart.reduce((acc,items)=>(acc+items.price) , 0);
console.log("Total price ",Total);
 



  