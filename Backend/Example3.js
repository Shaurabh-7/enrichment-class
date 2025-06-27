// const numbers = [1, 2, 3, 4, 5];
// let doubledNumbers = [];

// for (number in numbers){
//     doubledNumbers.push(number* 2);

// }
// console.log(doubledNumbers);


// // using map to do the same

// const doubledNumbersMap = numbers.map(num => num * 2);
// console.log(doubledNumbersMap);

// // Using map with parameters
// const numbersWithIndex = numbers.map((num, index, array) => {
//     return {
//         doubled : num * 2,
//         original: num,
//         index: index,
//         array: array
//     };
// });

// console.log(numbersWithIndex);

// const users = [{
//     name : 'Alice',
//     age: 25
// },{
//     name : 'Bob',
//     age: 30
// }]

// const userNames = users.map(user => user.name);
// console.log(userNames);

// const evenNumbersFilter = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbersFilter); // [2, 4]

// let sum = 0;
// for (number in numbers) {
//     sum += numbers[number];

// }

// console.log(sum); 

// const sumWithReduce = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(sumWithReduce);//







// 1. Double each number in the array:

const numbers = [2, 4, 6, 8];

const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); // [4, 8, 12, 16


//2. Convert each string in the array to uppercase:
const fruits = ['apple', 'banana', 'cherry'];
const upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperCaseFruits); // ['APPLE', 'BANANA', 'CHERRY

// 3. Get lengths of each word:

const words = ['hello', 'world', 'JavaScript'];
const wordLengths = words.map(word => word.length);
console.log(wordLengths); // [5, 5, 10]

// 4. Add index to each element:

const animals = ['cat', 'dog', 'fish'];

const animalsWithIndex = animals.map((animal, index) => {
    return {
        name: animal,
        index: index
    };
});
console.log(animalsWithIndex);