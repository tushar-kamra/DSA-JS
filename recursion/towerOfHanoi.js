function toh(n, source, destination, helper) {
    if (n === 0) return;
    toh(n - 1, source, helper, destination);
    console.log(`Move ${n} disk from ${source} to ${destination}`);
    toh(n - 1, helper, destination, source);
}

toh(3, "a", "b", "c");
