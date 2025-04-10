//Immedietly invoked functions (IIFE)
//to prevent from global scope bleeding
//best practice syntax

(()=>{
    console.log("HAAHA");
    
})();


(function chai(msg){
    console.log(msg);
})("Greeetings");
