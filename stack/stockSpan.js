const stockSpan = (arr) => {
    const st = [];
    const ans = [];

    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];

        while (st.length > 0 && element >= arr[st[st.length - 1]]) {
            st.pop();
        }

        if (st.length === 0) {
            ans[index] = index + 1;
        } else {
            ans[index] = index - st[st.length - 1];
        }

        st.push(index);
    }

    return ans;
};

const res = stockSpan([10, 4, 5, 90, 120, 80]);

console.log(res);
