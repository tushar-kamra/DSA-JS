function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let min_idx = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min_idx] > arr[j]) {
                min_idx = j;
            }
        }
        [arr[i], arr[min_idx]] = [arr[min_idx], arr[i]];
    }
}

function selectionSortDesc(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let max_idx = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[max_idx] < arr[j]) {
                max_idx = j;
            }
        }
        [arr[i], arr[max_idx]] = [arr[max_idx], arr[i]];
    }
}

const arr = [2, 5, 1, -10, 9, 0];
selectionSort(arr);
console.log(arr);

selectionSortDesc(arr);
console.log(arr);
