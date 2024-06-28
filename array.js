const arr = [1, 5, 8, "Tushar"];

console.log(arr);

arr.push("Kamra"); // insert at end - O(1)

console.log(arr);

arr.unshift("First"); // insert at beginning - O(n)

console.log(arr);

arr.pop(); // remove element from end - O(1)

console.log(arr);

arr.shift(); // remove first element - O(n)

console.log(arr);

// concat, slice, splice - O(n)
// forEach, map, reduce - O(n)
