// obj contains a reference to the object we defined on the right side
const obj = { data: 42 };
// objCopy will contain a reference to the object referenced by obj
const objCopy = obj;

// making changes to objCopy will make changes to the object that it refers to
objCopy.data = 43;

console.log(obj); // { data: 43 }
console.log(objCopy); // { data: 43 }
