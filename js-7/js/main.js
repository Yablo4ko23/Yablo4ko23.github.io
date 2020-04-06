//1
// let obj = {
//     name: "Olexiy",
//     age: 15,
//     sex: "Male",
//     married: false
// };

//2
// let obj = {
//     name: "Olexiy",
//     age: 15,
//     sex: "Male",
//     married: false,
// };
// delete obj.sex;
// obj.language = "JavaScript";

// нездійснені плани :(
// let numbers = { };
// function num() {
//     for (let i=1; i<=10; i++) {
//         if (i%2 === 0) {
//             numbers[i] = i;
//         }
//     }
// }
// num();
// console.log(numbers);

//3
// let obj = {
//     first: 1,
//     second: 2
// };
// obj.sum = function() {
//     console.log(obj.first + obj.second);
// };
// obj.sum();

//4
// let obj = {
//     name: "Olexiy",
//     age: 15,
//     sex: "Male",
//     married: false,
// };
// let keys = Object.keys(obj);
// for (let i=0; i<keys.length; i++) {
//     console.log('Ключ:', keys[i]);
// }

//5
// let obj = {
//     name: "Olexiy",
//     age: 15,
//     sex: "Male",
//     married: false,
// };
// let keys = Object.keys(obj),
//     values = Object.values(obj);
// console.log(keys);
// console.log(values);
// let str = "";
// for (let i=0; i<values.length; i++) {
//     str += values[i] + ' ';
// }
// console.log(str);

//6 сорян, зразу не подумав :)
// cafe = {
//     name: 'Republic',
//     width:200,
//     height: 300,
//     personal:5,
//     hr: true
// };
// let entries = Object.entries(cafe);
// for (let i=0; i<entries.length; i++) {
//     console.log(entries[i]);
// }
// console.log(entries[1][1] * entries[2][1]);