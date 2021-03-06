const {
    sumDigits,
    createRange,
    hexToRGB,
    findWinner
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

describe("findWinner", () => {
    test("it returns X if player X  has won", () => {
        const arrCase1 = [["X", "0", null],
        ["X", null, "0"],
        ["X", null, "0"]];
        expect(findWinner(arrCase1)).toBe("X");
        const arrCase2 = [["X", "X", "X"],
        ["O", null, "0"],
        ["X", null, "0"]];
        expect(findWinner(arrCase2)).toBe("X");
        const arrCase3 = [["X", "O", "X"],
        ["O", "X", "0"],
        ["X", null, "X"]];
        expect(findWinner(arrCase3)).toBe("X");
        const arrCase4 = [["O", "O", "X"],
        ["O", "X", "0"],
        ["X", null, "0"]];
        expect(findWinner(arrCase4)).toBe("X");

    });
    test("it returns O if player O  has won", () => {
        const arrCase1 = [["O", "X", null],
        ["O", null, "X"],
        ["O", null, "X"]];
        expect(findWinner(arrCase1)).toBe("O");
        const arrCase2 = [["O", "O", "O"],
        ["X", null, "X"],
        ["O", null, "X"]];
        expect(findWinner(arrCase2)).toBe("O");
        const arrCase3 = [["O", "X", "O"],
        ["X", "O", "X"],
        ["O", null, "O"]];
        expect(findWinner(arrCase3)).toBe("O");
        const arrCase4 = [["X", "X", "O"],
                          ["X", "O", "X"],
                          ["O", null, "X"]];
        expect(findWinner(arrCase4)).toBe("O");
    });
    test("it returns null if it is a draw", () => {
        const arrCase1 = [[null, "X", null],
        [null, null, "X"],
        [null, null, "X"]];
        expect(findWinner(arrCase1)).toBe(null);
        const arrCase2 = [[null, null, null],
        ["X", null, "X"],
        ["O", null, "X"]];
        expect(findWinner(arrCase2)).toBe(null);
        const arrCase3 = [[null, "X", "O"],
        ["X", null, "X"],
        ["O", null, null]];
        expect(findWinner(arrCase3)).toBe(null);
        const arrCase4 = [["X", "X", null],
                          ["X", null, "X"],
                          [null, null, "X"]];
        expect(findWinner(arrCase4)).toBe(null);
    });
});