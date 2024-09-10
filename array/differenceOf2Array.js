// considering arr2 >= arr1

const diffArray = (arr1, arr2) => {
    let size1 = arr1.length - 1;
    let size2 = arr2.length - 1;
    let diff = new Array(size2);

    while (size2 >= 0) {
        let ans;

        if (size1 >= 0) ans = arr2[size2] - arr1[size1];
        else ans = arr2[size2];

        if (ans < 0) {
            ans = arr2[size2] + 10 - arr1[size1];
            if (arr2[size2 - 1]) arr2[size2 - 1]--;
        }

        diff[size2] = ans;
        size1--;
        size2--;
    }

    console.log(diff);
};

const arr1 = [1, 2, 3];
const arr2 = [9, 1, 1, 1, 1];
diffArray(arr1, arr2);
