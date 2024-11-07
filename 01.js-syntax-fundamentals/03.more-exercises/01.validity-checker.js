function solve(x1, y1, x2, y2) {
    function calcDist(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }

    let state = (Number.isInteger(calcDist(x1, y1, 0, 0)) ? "valid" : "invalid");
    console.log(`{${x1}, ${y1}} to {0, 0} is ${state}`);
    state = (Number.isInteger(calcDist(x2, y2, 0, 0)) ? "valid" : "invalid");
    console.log(`{${x2}, ${y2}} to {0, 0} is ${state}`);
    state = (Number.isInteger(calcDist(x1, y1, x2, y2)) ? "valid" : "invalid");
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${state}`);
}