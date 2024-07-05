const keypad = [
    "#",
    "abc",
    "def",
    "ghi",
    "jkl",
    "mnop",
    "qrst",
    "uv",
    "wxyz",
    "?!",
];

function keypadCombination(input) {
    if (input.length === 1) {
        const lastInput = keypad[input];
        const temp = [];
        for (let i = 0; i < lastInput.length; i++) {
            temp.push(lastInput[i]);
        }
        return temp;
    }

    const firstInput = input.charAt(0);
    const restInput = input.substring(1);

    const firstInputOutput = keypad[firstInput];

    const ans = keypadCombination(restInput);

    const result = [];

    for (let i = 0; i < firstInputOutput.length; i++) {
        ans.forEach((element) => {
            result.push(firstInputOutput[i] + element);
        });
    }

    return result;
}

const ans = keypadCombination("567");
console.log(ans);
