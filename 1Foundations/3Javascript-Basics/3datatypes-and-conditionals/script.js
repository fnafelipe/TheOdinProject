let aspasSimples = "String com aspas simples!";
let aspasDuplas = "String com aspas duplas!";

// let aspasAlternadas = "Strings não podem ter aspas alternadas'

console.log(aspasSimples, aspasDuplas);

// Concatenação de strings
let nome = "Felipe";
let sobreNome = "Nascimento Aguiar";
console.log("Meu nome é " + nome + " " + sobreNome);

let nomeCompleto = "Felipe";
nomeCompleto += " Nascimento Aguiar";
console.log("Meu nome é " + nomeCompleto);

let nomeConcat = "Felipe";
sobreNomeConcat = "Nascimento Aguiar";
nomeCompletoConcat = nomeConcat.concat(" ", sobreNomeConcat);
console.log("Meu nome é " + nomeCompletoConcat);

console.log(nome, sobreNome, typeof nome);

let format = "Formatação";
let aspasTortas = `String com ${format}
e salto de linha `;

console.log(aspasTortas);

let aspasNaString = `'Simples' e "Duplas"`;

console.log(aspasNaString);

//Tips de Dados
let str = "String";
let num = 19;
let bool = true;
let nulo = null;
let undef = undefined;
let bigint = 100n;
let object = {};
let symbol = Symbol();

console.log(
  typeof str,
  typeof num,
  typeof bool,
  typeof nulo,
  typeof undef,
  typeof bigint,
  typeof object,
  typeof symbol,
);

// Notação de colchetes
nome = "Felipe";
let letra = nome[0];
console.log(letra);
let ultimaLetra = nome[nome.length - 1];
console.log(ultimaLetra);
let metadeLetras = nome[0] + nome[1] + nome[2];
console.log(metadeLetras);

// Nova linha
str = "Javascript é bom";
console.log(str);
str = "Javascript \né bom";
console.log(str);
str = `Javascript
é bom`;
console.log(str);

// Substrings indicie
str = "Javascript é bom e Python também é bom";
subStr = str.indexOf("Javascript");
console.log(subStr);
subStr = str.indexOf("Python");
console.log(subStr);
subStr = str.indexOf("bom");
console.log(subStr);
subStr = str.indexOf("bom", 20);
console.log(subStr);
subStr = str.indexOf("PHP");
console.log(subStr);

// Prompt
str = prompt("Digite seu nome: ", "João");
console.log(`Olá ${str}`);
