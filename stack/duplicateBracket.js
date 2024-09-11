// (a + b) + ((c + d))  ->  true
// ((a + b) + (c + d))  ->  false

// Algo: if there is no content to pop between 2 parenthesis then they are duplicate

const Stack = require("./stack");

const duplicateBracket = (str) => {
    const st = new Stack();

    for (let index = 0; index < str.length; index++) {
        const element = str[index];
        if (element !== ")") {
            st.push(element);
        } else {
            let i = 1;
            while (st.top() !== "(") {
                st.pop();
                i++;
            }
            st.pop();

            if (i === 1) {
                return true;
            }
        }
    }
    return false;
};

const ans = duplicateBracket("((a + b) + (c + d))");

console.log(ans);
