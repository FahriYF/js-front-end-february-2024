function solve(weekDay, age) {
    if (age < 0 || age > 122) {
        console.log('Error!');
    } else {
        const ticketsPrices = {
            'Weekday': [12, 18, 12],
            'Weekend': [15, 20, 15],
            'Holiday': [5, 12, 10]
        };
    
        let ticketPrice = 0;

        if (age <= 18) {
            ticketPrice = ticketsPrices[weekDay][0];
         } else if (age <= 64) {
             ticketPrice = ticketsPrices[weekDay][1];
         } else {
             ticketPrice = ticketsPrices[weekDay][2];
         }

         console.log(`${ticketPrice}$`)
    }
}