function checkSign(x) {
    if (x < 0) console.log(`Negatif`);
    else if (x > 0 || x == 0) {
        console.log(`Positif`);
    }
}

checkSign(-10);
checkSign(10);
checkSign(0);

//module.exports = checkSign