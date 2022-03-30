//1
let string;

function verificaPalindromo(string) {
    let stringArray = string.split('');
    let reversedArray = stringArray.reverse();
    let reversedString = reversedArray.join('');
    if (string === reversedString) {
        return true;
    } else {
        return false;
    }
}

console.log(verificaPalindromo('arara'));

//2
let numeros = [2, 3, 6, 7, 10, 1];

function retornaMaior(numeros) {
    let maiorNumero = 0;
    for (i in numeros) {
        if (numeros[i] > maiorNumero) {
            maiorNumero = i;
        }
    }
    return maiorNumero;
}
console.log(retornaMaior(numeros));

//3
numeros = [2, 4, 6, 7, 10, 0, -3];

function retornaMenor(numeros) {
    let menorNumero = 0;
    for (i in numeros) {
        if (numeros[i] < menorNumero) {
            menorNumero = i;
        }
    }
    return menorNumero;
}
console.log(retornaMenor(numeros));

//4
nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function retornaMaiorNome(nomes) {
    let maiorNome = '0';
    for (i in nomes) {
        if (nomes[i].length > maiorNome.length) {
            maiorNome = nomes[i];
        }
    }
    return maiorNome;
}
console.log(retornaMaiorNome(nomes));

//5
numeros = [2, 3, 2, 5, 8, 2, 3];

function retornaMaisRepetido(numeros) {
    let contRepetido = 0;
    let contNumero = 0;
    let indexNumeroRepetido = 0;
    for (i in numeros) {
        let verificaNumero = numeros[i];
        for (i2 in numeros) {
            if (numeros[i2] === verificaNumero) {
                contNumero +=1;
            }
        }
        if (contNumero > contRepetido) {
            contRepetido = contNumero;
            indexNumeroRepetido = numeros[i];
        }
    contNumero = 0;
    }
    return indexNumeroRepetido;
}

console.log(retornaMaisRepetido(numeros));

//6
let numero = 5;

function somatorioAteN(numero) {
    let sum = 0;
    for (i = 1; i <= numero; i+=1) {
        sum += i;
    }
    return sum;
}

console.log(somatorioAteN(numero));

//7
let word = 'trybe';
let ending = 'be';

function isThisTheEndOfTheWord(word, ending) {
    let reversedWord = word.split('').reverse().join('');
    let reversedEnding = ending.split('').reverse().join('');
    let result;

    for (let i = 0; i < ending.length; i += 1) {
        if (reversedWord[i] !== reversedEnding[i]) {
        result = false;
        break;
        } else {
        result = true;
        }
    }

    return result;
}

console.log(isThisTheEndOfTheWord(word, ending));

//8
