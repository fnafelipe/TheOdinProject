
const container = document.getElementById("container");
console.log(container);
let newElement = document.createElement("p");
console.log(newElement);
newElement.textContent = "Hey i'm red!";
newElement.setAttribute("style", "color: red");
container.appendChild(newElement);

newElement = document.createElement("h3");
console.log(newElement);
newElement.textContent = "I'm a blue h3!";
newElement.setAttribute("style", "color: blue");
container.appendChild(newElement);

newElement = document.createElement("div");
console.log(newElement);
newElement.setAttribute(
  "style",
  "border: 2px solid black; background-color: pink",
);

const newElementH1 = document.createElement("h1");
const newElementP = document.createElement("p");

newElementH1.textContent = "I'm in a div";
newElementP.textContent = "ME TOO";

newElement.appendChild(newElementH1);
newElement.appendChild(newElementP)

container.appendChild(newElement);
