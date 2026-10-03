function add7(num) {
  return num + 7;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
function lastLetter(str) {
  return str.at(-1);
}
console.log(add7(10));
console.log(multiply(2, 3));
console.log(capitalize("AbCdEf"));
console.log(lastLetter("abcd"));
