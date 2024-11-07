function linearSearch(arr, ele) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ele) {
            return i;
        }
    }
    return -1;
}

const x = [1, 7, -2, 9, 9, -1];

console.log(linearSearch(x, 90));
