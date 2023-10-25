**How to Flatten Nested Array or Object in JavaScript**
**Recursive Flattening Functions for Arrays and Objects**
This repository contains JavaScript functions for recursively flattening nested arrays and objects.
These functions, flatArr and flatObj, are designed to help you transform deeply nested structures into a flat format.
flatArr(arr) function takes an array as its input and returns a new flat array.
It can handle arrays with varying levels of nesting.

const nestedArray = [1, [2, [3, 4]], [5]];

const flatArray = flatArr(nestedArray);

console.log(flatArray); // Output: [1, 2, 3, 4, 5] 
