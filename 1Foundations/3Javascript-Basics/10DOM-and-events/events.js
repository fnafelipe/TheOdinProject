function alertFunction() {
  alert("YAY! YOU DID IT!");
}
const btn = document.querySelector("#btn");

btn.onclick = alertFunction;

btn.addEventListener("click", alertFunction);

btn.addEventListener("click", function (e) {
  console.log(e);
});

btn.addEventListener("click", function (e) {
  console.log(e.target);
});

btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});
