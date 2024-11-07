function binarySearchRecursive(arr, target, low, high) {
    if (low > high) return -1;

    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] > target) {
        return binarySearchRecursive(arr, target, low, mid - 1);
    } else {
        return binarySearchRecursive(arr, target, mid + 1, high);
    }
}

console.log(binarySearchRecursive([-9, 0, 3, 7, 8, 99], 99, 0, 5));
