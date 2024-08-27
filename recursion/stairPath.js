const stairPath = (n) => {
    if (n === 0) return [""];
    if (n < 0) return [];

    const res = [];
    const p1 = stairPath(n - 1);
    const p2 = stairPath(n - 2);
    const p3 = stairPath(n - 3);

    p1.forEach((ele) => {
        res.push("1" + ele);
    });

    p2.forEach((ele) => {
        res.push("2" + ele);
    });

    p3.forEach((ele) => {
        res.push("3" + ele);
    });

    return res;
};

const userInput = prompt("Enter stair level");

const ans = stairPath(userInput);

console.log(ans);
