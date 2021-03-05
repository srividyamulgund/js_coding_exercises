const {
    sumDigits,
    createRange,
    hexToRGB
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

describe("hexToRGB", () => {
    test("it returns a corresponding RGB value", () => {
        expect(hexToRGB("#1502BE")).toBe("21,2,190");
        expect(hexToRGB("#ff0000")).toBe("255,0,0");
        expect(hexToRGB("#000080")).toBe("0,0,128");
    });
    test("it returns null when incorrect hex value is provided", () => {
        expect(hexToRGB("527238")).toBe("null");
        expect(hexToRGB("527r38")).toBe("null");
    });
});