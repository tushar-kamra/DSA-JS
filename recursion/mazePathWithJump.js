const mazePathWithJump = (sx, sy, dx, dy) => {
    if (sx === dx && sy === dy) {
        return [""];
    }

    const res = [];

    for (let i = 1; i <= dx - sx; i++) {
        const hPath = mazePathWithJump(sx + i, sy, dx, dy);
        hPath.forEach((element) => {
            res.push(`h${i}${element}`);
        });
    }

    for (let i = 1; i <= dy - sy; i++) {
        const vPath = mazePathWithJump(sx, sy + i, dx, dy);
        vPath.forEach((element) => {
            res.push(`v${i}${element}`);
        });
    }

    for (let i = 1; i <= dx - sx && i <= dy - sy; i++) {
        const dPath = mazePathWithJump(sx + i, sy + i, dx, dy);
        dPath.forEach((element) => res.push(`d${i}${element}`));
    }

    return res;
};

const ans = mazePathWithJump(1, 1, 3, 3);

console.log(ans);
