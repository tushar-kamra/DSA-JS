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

const nextGreaterElement2Optimized = (arr) => {
    const st = []; // Stack to store indices
    const ans = new Array(arr.length).fill(-1); // Initialize result array with -1

    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];

        // Check and update the next greater element for indices in the stack
        while (st.length > 0 && arr[st[st.length - 1]] < element) {
            ans[st.pop()] = element;
        }

        // Push the current index onto the stack
        st.push(index);
    }

    // Stack will already have -1 in the result array for remaining elements
    console.log(ans);
};

const arr = [2, 9, 5, 3, 12, 2, 1, 10];

nextGreaterElement(arr);
nextGreaterElement2(arr);
nextGreaterElement2Optimized(arr);
