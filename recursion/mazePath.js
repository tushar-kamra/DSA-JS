const mazePath = (sx, sy, dx, dy) => {
    if (sx > dx || sy > dy) {
        return [];
    }

    if (sx === dx && sy === dy) {
        return [""];
    }

    const res = [];
    const hPath = mazePath(sx, sy + 1, dx, dy);
    const vPath = mazePath(sx + 1, sy, dx, dy);

    hPath.forEach((ele) => {
        res.push("h" + ele);
    });

    vPath.forEach((ele) => {
        res.push("v" + ele);
    });

    return res;
};

const ans = mazePath(0, 0, 2, 2);

console.log(ans);
