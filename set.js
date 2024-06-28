// set containes unique values only
// can contain a mix of different data types
// dynamically sized. don't have to declare the size before creating it
// sets do not maintain an insertion order

const set = new Set([1, 6, "Tushar", 6]);

console.log(set);

for (const item of set) {
    console.log(item);
}

set.add("Kamra");

console.log(set);

set.add("6");
console.log(set);

console.log(set.has("blue"));
console.log(set.has("6"));

console.log("Delete operation: 6");
console.log(set.delete("6"));
console.log(set);

console.log(set.delete("s"));
console.log(set);

console.log(set.size);

console.log(set.clear());
console.log(set);
