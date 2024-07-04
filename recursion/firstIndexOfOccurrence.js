function firstIndexOfOccurrence(arr, idx, ele) {
    if (idx === arr.length) return -1;
    if (arr[idx] === ele) return idx;
    return firstIndexOfOccurrence(arr, idx + 1, ele);
}

const arr = [3, -9, 0, 818, 92, 10, -1, 88, 9, 0];

const ans = firstIndexOfOccurrence(arr, 0, 88);
console.log(ans);
