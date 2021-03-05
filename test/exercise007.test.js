const {
    sumDigits,
    createRange
} = require("../challenges/exercise007");

describe("sumDigits", () => {
    test("it returns true if number is prime", () => {
        expect(sumDigits(3)).toBe(true);
        expect(sumDigits(5)).toBe(true);
        expect(sumDigits(7)).toBe(true);
    })
    test("it returns false if number is not prime", () => {
        expect(sumDigits(4)).toBe(true);
        expect(sumDigits(6)).toBe(true);
        expect(sumDigits(77)).toBe(true);
    })
});

describe("createRange", () => {
    test("it returns the range of numbers", () => {
        expect(createRange(3, 11, 2)).toBe([3, 5, 7, 9, 11]);
        expect(createRange(6, 21, 3)).toBe([6, 9, 12, 15, 18, 21]);
    })
    test("it returns the range when step is not provided", () => {
        expect(createRange(3, 11, 2)).toBe([3, 5, 7, 9, 11]);
        expect(createRange(6, 21, 3)).toBe([6, 9, 12, 15, 18, 21]);
    })
})