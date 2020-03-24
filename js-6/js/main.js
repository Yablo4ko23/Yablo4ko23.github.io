//1
// function hello1() {
//     return console.log('Привіт JavaScript');
// }
// hello1();

//2
// function hello2(name) {
//     return console.log('Привіт,', name);
// }
// hello2('Василь');

//3
// function mull(n, m) {
//     return console.log(n+m, n*m, n-m);
// }
// mull(3, 2);

//4
// function repeat (str, n) {
//     for (let i=0; i<n; i++) {
//         console.log(str);
//     }
// }
// repeat('', 2);

//5
// function avg() {
//     let average = 0,
//         sum = 0,
//         count = 0;
//     for (const argument of arguments) {
//         sum += argument;
//         count++;
//     }
//     average = sum/count;
//     console.log(average);
// }
// avg(5,2,3);

//6
// function m(a,b) {
//     mull();
//     function mull() {
//         return console.log(a * b);
//     }
// }
// m(2, 3);

//РУБРИКА ЕКСПЕРИМЕНТИ!!!!
// function log(a) {
//     console.log(a);
// }
// log(12);

//7
// function operation(m, n, o) {
//     function o(a, b) {
//         o = a+b;
//     }
//     o(1, 2);
//     console.log(m*n*o);
// }
// operation(2, 3);

//8
// function addN(n) {
//     function addM(m) {
//         console.log(m+n);
//     }
//     return addM(2);
// }
// addN(3);
