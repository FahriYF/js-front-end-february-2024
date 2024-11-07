function solve(fruit, grams, kiloPrice) {
    let kilo = (grams / 1000);
    let totalPrice = (kiloPrice * kilo);
    
    console.log(`I need $${totalPrice.toFixed(2)} to buy ${kilo.toFixed(2)} kilograms ${fruit}.`);
}