/*
2 -> [2]
2 * 2 -> [2,2]
2 * 2 * 2 -> [2,2,2]
3 -> [3]
3 * 3 -> [3,3]
3 * 2 -> [2,3]
5 * 5 -> [5,5]
5 * 7 * 11 * 3 -> [3,5,7,11]
*/

function getPrimeFactorsFor(number: number) {
    const factor = 2;
    const factors = [factor];
    const remainder = number / factor;
    if (remainder > 1) {
        return factors.concat(factor);
    }
    return factors;
}

describe('The prime factors', () => {
    it('finds the prime composition of the given number', () => {
        expect(getPrimeFactorsFor(2)).toEqual([2])
        expect(getPrimeFactorsFor(2*2)).toEqual([2, 2])
    })
})
