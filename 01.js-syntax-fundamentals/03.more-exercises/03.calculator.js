function solve(num1, operation, num2) {
    const operations = {
        "+": (num1, num2) => num1 + num2,
        "-": (num1, num2) => num1 - num2,
        "/": (num1, num2) => num1 / num2,
        "*": (num1, num2) => num1 * num2,
    };

    console.log(operations[operation](num1, num2).toFixed(2));
}