const {
    sumDigits,
    createRange
} = require("../challenges/exercise007");

describe("sumDigits", () => {
    test("it returns total of the digits", () => {
        expect(sumDigits(2546)).toBe(17);
        expect(sumDigits(123)).toBe(6);
        expect(sumDigits(98)).toBe(17);
    });
});

describe("createRange", () => {
    test("it returns the range of numbers", () => {
        expect(createRange(3, 11, 2)).toEqual([3, 5, 7, 9, 11]);
        expect(createRange(6, 21, 3)).toEqual([6, 9, 12, 15, 18, 21]);
    });
    test("it returns the range when step is not provided", () => {
        expect(createRange(3, 7)).toEqual([3, 4, 5, 6, 7]);
        expect(createRange(12, 19)).toEqual([12, 13, 14, 15, 16, 17, 18, 19]);
    });
});