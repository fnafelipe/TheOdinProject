let idade = 18;
const IDADE_MINIMA_COM_PERMISSAO = 16;
const IDADE_MINIMA = 18;

if (idade < IDADE_MINIMA_COM_PERMISSAO) {
  console.log("Você não pode entrar ainda");
} else if (idade < IDADE_MINIMA) {
  console.log("Você só pode entrar com permissão dos responsáveis");
} else {
  console.log("Você pode entrar");
}

let valorProduto = 47.9;
let descProduto = valorProduto < 50 ? "Barato" : "Caro";
console.log(descProduto);

let isOnline = false;
let isRunning = false;

if (isOnline && isRunning) {
  console.log("O servidor está online e rodando...");
} else if (isOnline || isRunning) {
  if (isRunning) {
    console.log("O servidor está se conectando com a nuvem..");
  } else {
    console.log("O servidor está inicializando..");
  }
} else {
  console.log("O servidor está desligado");
}

console.log(Math.random());
console.log(Math.min(3, 4, 9, 0, 1, 5));
console.log(Math.max(4, 5, 9, 7, 1, 3));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.6));
console.log(Math.round(4.5));
console.log(Math.round(Math.random()));
let max = 10;
let min = 2;
console.log(Math.floor(Math.random() * max) + min);
console.log(Math.trunc(3.2));
console.log(Math.sqrt(9));
console.log(Math.cbrt(27));
console.log(Math.pow(5, 2));
