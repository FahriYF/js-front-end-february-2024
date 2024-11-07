function solve(age) {
    let ageGroup;

    if (age < 0) {
        console.log("out of bounds");
    } else {
        if (age < 3) {
            ageGroup = "baby";
        } else if (age < 14) {
            ageGroup = "child";
        } else if (age < 20) {
            ageGroup = "teenager";
        } else if (age < 66) {
            ageGroup = "adult";
        } else {
            ageGroup = "elder";
        }

        console.log(ageGroup);
    }
}