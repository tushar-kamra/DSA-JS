function printArray(arr, idx) {
    if (idx === arr.length) return;
    console.log(arr[idx]);
    printArray(arr, idx + 1);
}

const arr = [3, -9, 0, 88, 92];

printArray(arr, 0);
