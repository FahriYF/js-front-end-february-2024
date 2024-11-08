function solve(text, searchedWord) {
    let words = text.split(" ");
    console.log(words.reduce((count, word) => word == searchedWord ? count += 1 : count, 0));
}