function solve(numbers) {
    let result = 0;
    
    numbers.forEach(num => (num % 2 == 0) ? result += num : result -= num);
    console.log(result);
}