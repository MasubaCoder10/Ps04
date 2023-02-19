function checkNumber(x) {
    switch (x) {
        case 1:
        case 2:
        case 3:
        case 4:

            console.log(`Faible`);
            break;
        case 5:
        case 6:
            console.log(`Moyen`);
            break;
        default:
            console.log("Please, choose a number from 1 to 10:");
    }


}

checkNumber(1);
checkNumber(5);
checkNumber(6);

//module.exports = checkNumber