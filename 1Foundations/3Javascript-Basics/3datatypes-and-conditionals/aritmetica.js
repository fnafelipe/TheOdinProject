// Inteiros, Decimais e Especiais
const Int = 10;
const Float = 1.4;
const Neg = -12;
console.log(typeof Int, typeof Float, typeof Neg, typeof Infinity, typeof NaN);

// Strings e Numbers
let num = "12" + 3;
console.log(num, typeof num);
num = 3 + "12";
console.log(num, typeof num);

num = "10";
console.log(num - 2);
console.log(num * 2);
console.log(num / 2);
console.log(num % 2);
console.log(num ** 2);
console.log(typeof (num - 2));

num = "abc" + 1;
console.log(num, typeof num);
console.log(num - 1);

num = true + 1;
console.log(num, typeof num);
num = false + 1;
console.log(num, typeof num);
