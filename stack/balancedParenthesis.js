const balancedParenthesis = (str) => {
    const openingParenthesis = ["(", "{", "["];
    const closingParenthesis = [")", "}", "]"];

    const parenthesisMapping = {
        "(": ")",
        "{": "}",
        "[": "]",
    };

    const st = [];
    for (let index = 0; index < str.length; index++) {
        const element = str[index];
        if (openingParenthesis.includes(element)) {
            st.push(element);
        } else if (closingParenthesis.includes(element)) {
            if (parenthesisMapping[st.pop()] === element) {
                continue;
            } else {
                return "Not balanced";
            }
        }
    }
    return "Balanced";
};

const ans = balancedParenthesis("([({})])");

console.log(ans);
