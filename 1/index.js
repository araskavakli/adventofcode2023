const fs = require('fs');
const main = async () => {
    const calibrationValues = fs.readFileSync('input.txt').toString().split("\n");
    const sum = calibrationValues.reduce((acc, curr) => {
        let firstDigit;
        let lastDigit;
        for (i = 0; i < curr.length; i++) {
            const char = curr[i];
            if (Number(char)) {
                lastDigit = Number(char);
                !firstDigit && (firstDigit = Number(char));
            }
        }
        const res = Number(`${firstDigit}${lastDigit}`);
        return acc + res;
    }, 0)
    console.log(sum);
}

main();