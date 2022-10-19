"use strict";
// 1 - Arrays
let numbers = [1, 2, 3];
numbers.push(5);
console.log(numbers);
console.log(numbers[2]);
const nomes = ["Álisson", "Marília", "Artur"];
console.log(nomes);
console.log(nomes[1]);
// 2 - Outra sintaxe Array
const nums = [1, 2, 3, 4];
nums.push(200);
console.log(nums);
console.log(nums.length);
console.log(nums.splice(1));
// 3 - any
const arr1 = [1, "teste", true, [], { nome: "Álisson" }];
console.log(arr1);
arr1.push([1, 2, 3]);
// 4 - parâmetros tipados
function soma(a, b) {
    console.log(a + b);
}
soma(4, 5);
// 5 - Retorno de Função
function greeting(name) {
    return `Olá ${name}`;
}
console.log(greeting("Álisson"));
//console.log(greeting(123))
// 6 - função anônima
setTimeout(function () {
    const salary = 1000;
    //console.log(parseFloat(salary))
    console.log(salary);
}, 2000);
// 7 - Tipos de Objeto
function passCoordinates(coord) {
    console.log("x coordinates: " + coord.x);
    console.log("y coordinates: " + coord.y);
}
const objCoord = { x: 45, y: 456 };
passCoordinates(objCoord);
//passCoordinates(1,1)
const pessoaObj = { nome: "Álisson", surname: "Oliveira" };
