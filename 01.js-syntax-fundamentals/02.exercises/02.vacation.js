function solve(groupSize, groupType, weekDay) {
    let totalPrice;

    if (weekDay == "Friday") {
        if (groupType == "Students") {
            totalPrice = groupSize * 8.45;

        } else if (groupType == "Business") {
            totalPrice = groupSize * 10.90;
        } else {
            totalPrice = groupSize * 15;
        }
    } else if (weekDay == "Saturday") {
        if (groupType == "Students") {
            totalPrice = groupSize * 9.80;

        } else if (groupType == "Business") {
            totalPrice = groupSize * 15.60;
        } else {
            totalPrice = groupSize * 20;
        }
    } else {
        if (groupType == "Students") {
            totalPrice = groupSize * 10.46;

        } else if (groupType == "Business") {
            totalPrice = groupSize * 16;
        } else {
            totalPrice = groupSize * 22.50;
        }
    }

    if (groupType == "Students" && groupSize > 29) {
        totalPrice = totalPrice * 0.85;
    } else if (groupType == "Business" && groupSize > 99) {
        totalPrice = totalPrice - 10 * (totalPrice / groupSize);
    } else if (groupType == "Regular" && groupSize > 9 && groupSize < 21) {
        totalPrice = totalPrice * 0.95;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}