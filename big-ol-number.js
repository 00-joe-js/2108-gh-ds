const makeBigRandomNumber = () => {
    return Math.floor(Math.random() * 1000000000000000000000);
};

const usesAll10Digits = (num) => {

    const numberAsString = num.toString();
    const stringDigitsFromNumber = numberAsString.split("");

    console.log(stringDigitsFromNumber);

    // Return true or false if all 10 digits (0-9)
    // are found in `num`.
    return "Not Implemented";

};

console.log(usesAll10Digits(makeBigRandomNumber()));