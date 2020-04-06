//1
// let Arr1 = [1, 5, "4", "hello"],
//     Arr2 = [true, 2, {}, ["a"], 222];
// console.log(Arr1[1]);
// console.log(Arr2[1]);
// console.log(Arr1[1]+Arr2[1]);

//2
// let Arr1 = [1, 5, "4", "hello"];
// Arr1[4] = 22;
// for (let i=0; i<Arr1.length; i++) {
//     console.log(Arr1[i]);
// }

//3
// let Arr2 = [true, 2, {}, ["a"], 222];
// for (const character of Arr2) {
//     console.log(character, typeof(character));
// }

//4
// const matrix = [[10,11,12], [13,14,15,], [16,17,18]];
// for (let i=0; i<matrix.length; i++) {
//     console.log(matrix[i]);
//     for (let j=0; j<matrix[i].length; j++) {
//         console.log(matrix[i][j]);
//     }
// }

//5
const message = 'Welcome to Ukraine!';
let arr = message.split(''),
    newMessage = arr.join('');
console.log(arr);
console.log(arr.indexOf('l'));
console.log(newMessage);

//6
// let stack = [],
//     forward = [4,3,2],
//     back = [5,6,7,8];
// for (let i=0; i<forward.length; i++) {
//     stack.unshift(forward[i]);
// }
// for (let j=0; j<back.length; j++) {
//     stack.push(back[j]);
// }
// console.log(stack);

//7
// let stack=[2, 3, 4, 5, 6, 7, 8],
//     lastNumbers=[];
// lastNumbers = stack.splice(4, 3);
// console.log(lastNumbers);

//8
// let animals = ["pig", "dog", "cat", "parrot", "chicken"],
//     pets = [];
// pets = animals.splice(2, 3);
// console.log(animals);
// console.log(pets);

//9
// let pets = ["cat", "parrot", "chicken"];
// pets.splice(2, 1, "shark", "elephant");
// console.log(pets);