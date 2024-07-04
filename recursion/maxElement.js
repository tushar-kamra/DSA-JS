function maxElement(arr, idx) {
    if (idx === arr.length - 1) return arr[idx];
    const maxi = maxElement(arr, idx + 1);

    return Math.max(maxi, arr[idx]);
}

const arr = [3, -9, 0, 88, 92, 10, -1];

console.log(maxElement(arr, 0));
