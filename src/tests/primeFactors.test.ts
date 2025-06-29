import {getPrimeFactorsFor} from "../core/getPrimeFactorsFor";

describe('The prime factors', () => {
    it('finds the prime composition of the given number', () => {
        expect(getPrimeFactorsFor(2*2)).toEqual([2, 2])
        expect(getPrimeFactorsFor(3*3)).toEqual([3, 3])
        expect(getPrimeFactorsFor(3*2)).toEqual([2, 3])
        expect(getPrimeFactorsFor(5*5)).toEqual([5, 5])
    })
    it('knows whtat is a prime number', () => {
        expect(getPrimeFactorsFor(2)).toEqual([2])
        expect(getPrimeFactorsFor(3)).toEqual([3])
    })
    it('produces the same result to multiply the number in the output list',  ()=> {
        expect(getPrimeFactorsFor(2*2*2)).toEqual([2, 2, 2])
    })
    it('orders the prime factors from the smallest to the biggest', () => {
        expect(getPrimeFactorsFor(5*7*11*3)).toEqual([3, 5, 7, 11])
    })
})
