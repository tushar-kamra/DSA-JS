// [2, 9, 5, 3, 12, 2, 1, 10]  =>  [9, 12, 12, 12, -1, 10, 10, -1]

// right to left
const nextGreaterElement = (arr) => {
    const st = [];
    for (let index = arr.length - 1; index >= 0; index--) {
        const element = arr[index];

        if (st.length === 0) {
            console.log(-1);
        } else {
            while (st[0] < element) {
                st.shift();
            }
            if (st.length === 0) {
                console.log(-1);
            } else {
                console.log(st[0]);
            }
        }

        st.unshift(element);
    }
};

// left to right
const nextGreaterElement2 = (arr) => {
    const st = [];
    const ans = [];

    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];

        while (arr[st[0]] < element) {
            ans[st.shift()] = element;
        }

        st.unshift(index);
    }

    while (st.length > 0) {
        ans[st.shift()] = -1;
    }

    console.log(ans);
};

const arr = [2, 9, 5, 3, 12, 2, 1, 10];

nextGreaterElement2(arr);
