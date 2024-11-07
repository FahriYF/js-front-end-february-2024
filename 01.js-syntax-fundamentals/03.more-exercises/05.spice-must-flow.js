function solve(yield) {
    let day = 0;
    let totalSpices = 0;
    
    yield -= 26;

    while (yield >= 74) {
        totalSpices += yield;
        day += 1;
        yield -= 10;
    }

    totalSpices -= (totalSpices >= 26) ?  26 : 0;
    console.log(`${day}\n${totalSpices}`);
}