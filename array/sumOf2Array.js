const sumOf2Array = (arr1, arr2) => {
    let carry = 0;
    let size1 = arr1.length - 1;
    let size2 = arr2.length - 1;
    let maxSize = Math.max(size1, size2);
    let sum = new Array(maxSize);

    while (maxSize >= 0) {
        let ans = 0;
        if (size1 >= 0) ans += arr1[size1--];
        if (size2 >= 0) ans += arr2[size2--];
        ans += carry;

        let temp = ans;
        if (temp > 9) {
            ans %= 10;
        }

        carry = Math.floor(temp / 10);

        sum[maxSize--] = ans;
    }

    console.log(sum);
};

const arr1 = [3, 6, 8, 0, 9, 8, 1];
const arr2 = [1, 2, 3, 4];

sumOf2Array(arr1, arr2);
