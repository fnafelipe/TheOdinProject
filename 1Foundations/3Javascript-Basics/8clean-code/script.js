// mal escrito
const x = function (z) {
  const w = "Hello ";
  return w + z;
};

x("John");

//bem escrito
const generateUserGreeting = (name) => `Hello, ${name}`;
const userGreeting = generateUserGreeting("John");
console.log(userGreeting);

//bons nomes sao descritivos
let greeting;
let humanScore;
const computerChoice = getCoomputerChoice;
function getcomputerChoice() {}

//vocabulario consistente
//substantivos para variaveis
//veros para funções
getPlayerScore();
getPlayerName();
getPlayerTag(); // V
getPlayerId();
getPlayerAge();

getUserAge();
returnPlayerName(); // F
requestHumanId();

//use nomes entendiveis ao inves de "variaveis magicas"
const UMA_HORA = 3600000;
setTimeout(stopTimer, UMA_HORA); // V

setTimeout(stopTimer,3600000) // X


