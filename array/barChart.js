const barChart = (arr) => {
    let maxEle = Math.max(...arr);

    for (let j = maxEle; j >= 1; j--) {
        let ans = "";
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] >= j) {
                ans += "*";
            } else {
                ans += " ";
            }
        }
        console.log(ans);
    }
};

barChart([2, 1, 3, 0, 7, 5]);
