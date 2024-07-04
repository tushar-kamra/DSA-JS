function printArray(arr, idx) {
    if (idx === arr.length) return;

    printArray(arr, idx + 1);
    console.log(arr[idx]);
}

const arr = [3, -9, 0, 88, 92];

printArray(arr, 0);
