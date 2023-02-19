function checkEvenOdd(x) {
    if (x % 2 != 0) {
        return "Impair";
    } else {
        return "Pair";
    }
}

console.log(checkEvenOdd(15));
console.log(checkEvenOdd(10));


//module.exports = checkEvenOdd