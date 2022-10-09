const firstName = 'Álisson';
const anotherName = 1;
const x = true;

function greeting(name: string) {
    console.log("Olá " + name)
}

greeting(firstName);
/* greeting(anotherName);
greeting(x); */

function soma (a: number, b: number) {
    return a + b;
}

console.log(soma(2,2));

const y = 5;
const z = 10;

console.log(soma(y, z));