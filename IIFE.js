// Immediately Invoked function expressions

(function connection(){
    console.log('DB Connected');
})();
// if i want to create two IIFE then i have to semi colon between them

((name)=>{
    console.log(`db connected to ${name}`);
})('abhay');


