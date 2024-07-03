function power(x, n) {
    if (n === 0) return 1;

    return x * power(x, n - 1);
}

console.log(power(2, 3));

function powerOptimized(x, n) {
    if (n === 0) return 1;

    let xb2 = powerOptimized(x, Math.floor(n / 2));

    if (n % 2 === 0) {
        return xb2 * xb2;
    } else {
        return xb2 * xb2 * x;
    }
}

console.log(powerOptimized(2, 3));
