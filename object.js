// An object is an unordered collection of key-value pairs. The key must either be a string or symbol
// data type whereas the value can be of any data type.

// An object is not an itetable. You can not use it with a for-of loop.

const obj = { name: "Tushar", age: 26, "key-three": true };

const age = "age";

console.log(obj);

obj.hobby = "Cricket"; // inserting a new key - O(1)

console.log(obj);

delete obj["key-three"]; // deleting a key - O(1)
 
console.log(obj);

// Object.keys() returns the keys (properties) of any object type - O(n)

console.log(Object.keys(obj));

// Object.values() returns the values of all object keys (properties) - O(n)

console.log(Object.values(obj));

// Object.entries() returns the keys and values of any object types - O(n)

console.log(Object.entries(obj));

// The methods above return an Iterable (enumerable array).

// Iterables makes it simpler to use objects in loops and to convert objects into maps.
