// function greeting(){
//     console.log("Hello, World!");
// }

// function operateCalculation(a, b, operation){
//     console.log("Number: " , a, b);
//     console.log(operation(10,5));

// }
// function add (x , y){
//     return x + y;
// }
// function multiply (x , y){
//     return x * y;
// }
// operateCalculation(1 , 2, multiply);



function greeting(greeting){
    return function name(name){
        console.log(greeting, name);
    };
}
const greetNamaste = greeting("Namaste");
greetNamaste("Shaurabh");



















