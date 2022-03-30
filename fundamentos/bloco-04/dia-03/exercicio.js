//1
let fatorial = 1;

for (let index = 10; index > 0; index -= 1) {
  fatorial *= index;
}

console.log(fatorial);

//2
let word = 'tryber';
let reverseWord = '';

for (letter in word) {
  reverseWord += word[word.length - 1 - letter];
}

console.log(reverseWord);