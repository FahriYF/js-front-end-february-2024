function solve(text) {
    console.log(text.toUpperCase().match(/[\w]+/gm).join(", "));
}