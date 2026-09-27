// Substrings
let str = "A";
console.log(str.charCodeAt(0));
console.log(String.fromCharCode(65));

str = "Javascript é bom";
console.log(str.includes("Javascript"));
console.log(str.includes("Python"));

console.log(str.slice(4, 7));
console.log(str.slice(4));
console.log(str.slice(-7));
console.log(str.slice(4, -6));

//Capitalização
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str);

//Espaços em branco
str = "         Javascript é bom          ";
console.log(str.trim());
console.log(str.trimStart());
console.log(str.trimEnd());

//Substituição
str = str.trim();
console.log(str.replace("Javascript", "Python"));
console.log(str.replace(" ", "-"));
console.log(str.replace(" ", "-").replace(" ", "-"));

//Repetição
console.log(str.repeat(3));
