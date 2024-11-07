function solve(strNum, op1, op2, op3, op4, op5) {
    let num = Number(strNum);
    let operations = [op1, op2, op3, op4, op5];

    let actions = {
        "chop": (num) => num / 2,
        "dice": (num) => Math.sqrt(num),
        "spice": (num) => num + 1,
        "bake": (num) => num * 3,
        "fillet": (num) => num * 0.8
    };

    for (let op of operations) {
        num = actions[op](num);
        console.log(num);
    }
}