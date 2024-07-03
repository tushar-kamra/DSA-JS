function printDecreasingIncreasing(n) {
    if (n === 0) return;
    console.log(n);
    printDecreasingIncreasing(n - 1);
    console.log(n);
}

printDecreasingIncreasing(5);
