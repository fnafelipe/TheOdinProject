// selects the #container div (don't worry about the syntax, we'll get there)
const container = document.querySelector("#container");

console.log(container.firstElementChild); // <div class="display"></div>
console.log(container.previousElementSibling); // <div class="display"></div>

const newElement = document.createElement("div");

container.appendChild(newElement);

console.log(container.lastElementChild);

console.log(document.querySelector(".controls"));

container.removeChild(newElement);

newElement.setAttribute("style", "color: blue");
newElement.getAttribute("style");
newElement.removeAttribute("style");

newElement.textContent = "Felipe";
console.log(newElement);
