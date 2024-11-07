function solve(startNum, endNum) {
    let numbers = String(startNum);
    let sum = startNum;

    for (let i = startNum + 1; i <= endNum; i++) {
        numbers += " " + i;
        sum += i;
    }

    console.log(`${numbers}\nSum: ${sum}`);
}