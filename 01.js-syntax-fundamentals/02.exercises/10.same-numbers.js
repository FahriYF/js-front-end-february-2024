function solve(num) {
    let lastNum = num % 10;
    let sum = lastNum;
    let isSame = true;

    num = Math.floor(num / 10);

    while (num > 0) {
        newNum = num % 10;

        if (newNum != lastNum) {
            isSame = false;
        }

        sum += newNum;
        lastNum = newNum;
        num = Math.floor(num / 10);
    }

    console.log(`${isSame}\n${sum}`);
}