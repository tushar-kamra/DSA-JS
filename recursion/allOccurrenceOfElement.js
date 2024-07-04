function allOccurrenceOfElement(arr, idx, ele, ans) {
    if (idx === arr.length) return;
    if (arr[idx] === ele) {
        ans.push(idx);
    }

    allOccurrenceOfElement(arr, idx + 1, ele, ans);
}

const ans = [];
const arr = [3, -9, 0, 88, 92, 10, -1, 88, 9, 0];

allOccurrenceOfElement(arr, 0, 88, ans);

console.log(ans);
