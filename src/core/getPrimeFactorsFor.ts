const findSmallestPrime = (number: number) => {
    let factor = 2;
    while (number % factor !== 0) {
        ++factor;
    }
    return factor;
}

export function getPrimeFactorsFor(number: number) {
    let prime = findSmallestPrime(number);
    const remainder = number / prime;
    return remainder <= 1 ? [prime] : [prime].concat(getPrimeFactorsFor(remainder));
}
