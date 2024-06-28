// Map is an unordered collection of key-value pairs and both can be of any data type
// To retrieve a value, you can use the corresponding key
// maps are iterables. They can be used with a for-of loop.

// Object vs Map
// - keys in object can only be string or symbol whereas in maps they can be of any type
// - objects are not iterables whereas maps are iterables
// - an object has a prototype and may contain a few default keys which may collide with our own keys if we're not careful. A map does not contain any keys by default.
// - the number of items in an object must be determined manually whereas it is readily available with the size property in a map.

const map = new Map([
    ["a", 1],
    ["b", 2],
]);

console.log(map);

map.set("a", "z");
map.set("c", 921);

console.log(map);

for (const [key, value] of map) {
    console.log(`${key}: ${value}`);
}

console.log(map.has("a"));

console.log(map.size);

map.delete("c");
console.log(map);

map.clear();
console.log(map);
