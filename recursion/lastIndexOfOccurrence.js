function lastIndexOfOccurrence(arr, idx, ele) {
    if (idx === arr.length) return -1;
    
    const li = lastIndexOfOccurrence(arr, idx + 1, ele);

    if (arr[idx] === ele) {
        if (li !== -1) {
            return li;
        } else {
            return idx;
        }
    } else {
        return li;
    }
}

const arr = [3, -9, 0, 88, 92, 10, -1, 818, 9, 0];

const ans = lastIndexOfOccurrence(arr, 0, 88);
console.log(ans);
