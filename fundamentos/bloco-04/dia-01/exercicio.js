const a = 2;
const b = 3;
const c = 4;
const d = -1;

//programa com operações básicas

console.log('Soma: ' + (a + b));
console.log('Subtração: ' + (a - b));
console.log('Multiplicação: ' + (a * b));
console.log('Divisão: ' + (a / b));
console.log('Módulo: ' + (a % b));

//programa que returna o maior entre 2 números
if (a > b) {
    console.log ("'a' é maior que 'b'.");
} else {
    console.log ("'b' é maior que 'a'.");
}

//programa que retorna o maior entre 3 números

if (c > b && c > a) {
    console.log("'c' é maior que 'b' e 'a'.");
} else if (b > c && b > a) {
    console.log("'b' é maior que 'c' e 'a'.");
} else {
    console.log("'a' é maior que 'b' e 'c'.");
}

//programa que diz se um número é negativo, positivo ou 0

if (d > 0) {
    console.log('positivo');
} else if (d === 0) {
    console.log('zero');
} else {
    console.log('negativo');
}

// programa que checa se um triângulo é válido ao observar seus ângulos.

const angle1 = 100;
const angle2 = 80;
const angle3 = 0.3;

if (angle1 + angle2 + angle3 === 180) {
    console.log(true);
} else if (angle1 <= 0 || angle2 <= 0 || angle3 <= 0) {
    console.log('erro! um dos ângulos é inválido.');
} else {
    console.log(false);
}

//programa que lê peça de xadrez e retorna o que ela faz.
//peças de xadrez: king, queen, pawn, bishop, knight (cavalo), rook (torre)

let chessPiece = "REI".toLowerCase();

switch (chessPiece) {
    case 'rei':
        console.log('esta peça só se move em qualquer direção, mas só anda uma casa.');
        break;
    case 'rainha':
        console.log('esta peça só se move em qualquer direção e anda quantas casas quiser.');
        break;
    case 'peão':
        console.log('esta peça só se move em linha reta e para frente e só anda uma casa, com exceção do primeiro turno, onde um peão pode andar duas casas. ele pode eliminar peças diagonalmente.')
        break;
    case 'bispo':
        console.log('esta peça só se move diagonalmente, pode andar quantas casas quiser.')
        break;
    case 'cavalo':
        console.log("esta peça se move em formato de 'L'.")
        break;
    case 'torre':
        console.log("esta peça se move em linha reta verticalmente e horizontalmente e anda quantas casas quiser.")
        break;
    default:
        'erro!';
}

// programa que converte nota em porcentagem para A~F.

const nota = 10;

if (nota > 100) {
    console.log ("erro!")
}else if (nota >= 90) {
    console.log("A");
} else if (nota >= 80) {
    console.log("B");
} else if (nota >= 70) {
    console.log("C");
} else if (nota >= 60) {
    console.log("D");
} else if (nota >= 50) {
    console.log("E");
} else if (nota < 50) {
    console.log("F");
} else {
    console.log("erro!");
}

// programa que retorna true se um dos números for par

if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
    console.log(true);
} else {
    console.log(false);
}

// programa que retorna true se um dos números for ímpar

if (a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0) {
    console.log(true);
} else {
    console.log(false);
}

//programa que calcula lucro

const custoProduto = 10;
const vendaProduto = 30;
const imposto = 0.2;

let valorCustoTotal = custoProduto * imposto + custoProduto;
let lucro = vendaProduto - valorCustoTotal;

if (vendaProduto == 0 || custoProduto == 0 || imposto == 0) {
    console.log ("erro!")
} else {
    console.log(lucro);
}

//programa q calcula a desgraça do inss

let salarioBruto = 5000.00;
let aliquotaINSS;
let aliquotaIR;
let parcelaImposto;
let salarioBase;
let salarioLiquido;

if (salarioBruto <= 1556.94) {
    aliquotaINSS = 0.08;
    salarioBase = salarioBruto - (salarioBruto * aliquotaINSS);
} else if (salarioBruto <= 2594.92) {
    liquotaINSS = 0.09;
    salarioBase = salarioBruto - (salarioBruto * aliquotaINSS);
} else if (salarioBruto <= 5189.82) {
    aliquotaINSS = 0.11;
    salarioBase = salarioBruto - (salarioBruto * aliquotaINSS);
} else if (salarioBruto > 5189.82) {
    salarioBase = salarioBruto - 570,88;
}

if (salarioBase <= 1903.98) {
    salarioLiquido = salarioBase;
    console.log(salarioLiquido);
} else if (salarioBase <= 2826.65) {
    aliquotaIR = 0.075;
    parcelaImposto = 142,80;
    salarioLiquido = salarioBase - (salarioBase * aliquotaIR - parcelaImposto);
    console.log(salarioLiquido);
} else if (salarioBase <= 3751.05) {
    aliquotaIR = 0.15;
    parcelaImposto = 354.80;
    salarioLiquido = salarioBase - (salarioBase * aliquotaIR - parcelaImposto);
    console.log(salarioLiquido);
} else if (salarioBase <= 4664,68) {
    aliquotaIR = 0.225;
    parcelaImposto = 636,13;
    salarioLiquido = salarioBase - (salarioBase * aliquotaIR - parcelaImposto);
    console.log(salarioLiquido);
} else if (salarioBase > 4664.68) {
    aliquotaIR = 0.275;
    parcelaImposto = 869.36;
    salarioLiquido = salarioBase - (salarioBase * aliquotaIR - parcelaImposto);
    console.log(salarioLiquido);
}