console.log(isNaN(NaN));
console.log(isNaN(undefined));
console.log(isNaN({}));

console.log(isNaN(true)); // false
console.log(isNaN(false)); // false
console.log(isNaN(null)); // false
console.log(isNaN(37)); // false

console.log(isNaN("37")); // false: "37" is converted to 37
console.log(isNaN("37.37")); // false: "37.37" is converted to 37.37
console.log(isNaN("")); // false: empty string is converted to 0
console.log(isNaN(" ")); // false: string with a space is converted to 0

console.log(isNaN("blabla")); // true: "blabla" is not a number

str = "123.456";
console.log(parseInt(str));
console.log(parseFloat(str));
console.log(parseFloat(str).toFixed(2));
console.log(parseFloat(str).toFixed(1));

const PRECO_BASE = 50;
const TAXA_BASE = 0.13;

console.log(`Preço final: ${(PRECO_BASE + PRECO_BASE * TAXA_BASE).toFixed(2)}`);
