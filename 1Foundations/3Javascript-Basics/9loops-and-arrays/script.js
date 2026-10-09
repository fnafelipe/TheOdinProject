function addOne(num) {
  return num + 1;
}

function isOdd(num) {
  return num % 2 === 0;
}

let array = [1, 2, 3, 4, 5];
console.log(array);
console.log(array.map(addOne));

console.log(array.map((num) => num + 1));

console.log(array.filter(isOdd));

console.log(array.filter(isOdd).map(addOne));
console.log(array.map(addOne).filter(isOdd));

const arr = [1, 2, 3, 4, 5];
const productOfAllNums = arr.reduce((total, currentItem) => {
  return total * currentItem;
}, 1);
console.log(productOfAllNums); // Outputs 120;
console.log(arr); // Outputs [1, 2, 3, 4, 5]
