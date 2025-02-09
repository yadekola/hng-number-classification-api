function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function isPerfect(num) {
    let sum = 1;
    for (let i = 2; i <= num / 2; i++) {
        if (num % i === 0) sum += i;
    }
    return sum === num && num !== 1;
}

function isArmstrong(num) {
    const digits = num.toString().split("").map(Number);
    const power = digits.length;
    const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, power), 0);
    return sum === num;
}

function getProperties(num) {
    const properties = num % 2 === 0 ? ["even"] : ["odd"];
    if (isArmstrong(num)) properties.unshift("armstrong");
    return properties;
}

function classifyNumber(num) {
    return {
        number: num,
        is_prime: isPrime(num),
        is_perfect: isPerfect(num),
        properties: getProperties(num),
        digit_sum: num.toString().split("").reduce((acc, digit) => acc + Number(digit), 0)
    };
}

module.exports = { classifyNumber };
