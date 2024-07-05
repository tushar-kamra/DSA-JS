// for n, total number of subsequence = 2^n

// for n, total number of substrings = n(n+1)/2

function subsequence(str) {
    if (str.length === 0) {
        return [""];
    }

    const firstChar = str.charAt(0);
    const restString = str.substring(1);

    const ans = subsequence(restString);

    const result = [];

    for (const s of ans) {
        result.push(firstChar + s);
        result.push(s);
    }

    return result;
}

const ans = subsequence("a");
console.log(ans);
