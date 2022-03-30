let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1
// for (let number of numbers) {
//     console.log(number);
// }

// 2
let resultadoDaSoma = 0;

for (let number of numbers) {
    resultadoDaSoma += number;
}
console.log(resultadoDaSoma);

//3
let resultadoDaMedia = 0;
resultadoDaSoma = 0;

for (let number of numbers) {
    resultadoDaSoma += number;
}

resultadoDaMedia = resultadoDaSoma / numbers.length;
console.log(resultadoDaMedia);

//4
resultadoDaMedia = 0;
resultadoDaSoma = 0;

for (let number of numbers) {
    resultadoDaSoma += number;
}

resultadoDaMedia = resultadoDaSoma / numbers.length;
if (resultadoDaMedia > 20) {
    console.log("valor maior que 20");
} else if (resultadoDaMedia < 20) {
    console.log("valor menor que 20")
}

//5
let maiorNumero = numbers[0];

for (let index in numbers) {
  if (numbers[index] > maiorNumero) {
    maiorNumero = numbers[index];
  }
}
console.log(maiorNumero);

//6
let numerosImpares = 0;

for (let i in numbers) {
    if (numbers[i] / 2 !== 0) {
        numerosImpares+= 1;
    }
}

console.log(numerosImpares);

//7
let menorNumero = numbers[0];

for (let index in numbers) {
  if (numbers[index] < menorNumero) {
    menorNumero = numbers[index];
  }
}
console.log(menorNumero);

//8
let array = [];
for (let index = 1; index <= 25; index++) {
    array.push(index);
}
console.log(array);

//9
for (indice of array) {
    console.log(indice / 2);
}