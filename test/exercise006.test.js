const { sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered } = require("../challenges/exercise006");

describe("sumMultiples", () => {
    test("it throws an error if not passed an array", () => {
        expect(() => {
            sumMultiples();
        }).toThrow("arr is required");

        expect(() => {
            sumMultiples("foo");
        }).toThrow("An array of integers is required");

        expect(() => {
            sumMultiples(4);
        }).toThrow("An array of integers is required");

        expect(() => {
            sumMultiples(false);
        }).toThrow("An array of integers is required");

    });
    test("it returns the sum of any numbers that are a multiple of 3 or 5", () => {
        expect(sumMultiples([5, 3, 7, 8, 1, 10])).toBe(18);
        expect(sumMultiples([5, 3, 7, 8, 9])).toBe(17);
        expect(sumMultiples([5, -3, 7, 8, 9])).toBe(11);
    });
    test("it works fine for decimal numbers", () => {
        expect(sumMultiples([5.0, 3.0, 7, 8.0, 12.0])).toBe(20.0);
    });
    test("it returns zero if there are no mutiple of 3 or 5", () => {
        expect(sumMultiples([2, -1, 7, 0, 11])).toBe(0);
    })
});

describe("isValidDNA", () => {
    expect(() => {
        isValidDNA(false);
    }).toThrow("A String is required");

    expect(() => {
        isValidDNA(0)
    }).toThrow("A String is required");

    expect(() => {
        isValidDNA(null)
    }).toThrow("A String is required");

    test("it returns true if the DNA has A, C, T or G", () => {
        expect(isValidDNA("ACTG")).toBe(true);
        expect(isValidDNA("ACTGACTG")).toBe(true);
        expect(isValidDNA("CATG")).toBe(true);
        expect(isValidDNA("TACGGATC")).toBe(true);
    });

    test("it returns false if the string does not have A, C, T or G", () => {
        expect(isValidDNA("FGHI")).toBe(false);
        expect(isValidDNA("ABCD")).toBe(false);
        expect(isValidDNA("ACTH")).toBe(false);
        expect(isValidDNA("GTBJ")).toBe(false);
        expect(isValidDNA(" ")).toBe(false);
    });

});

describe("getComplementaryDNA", () => {

    expect(() => {
        getComplementaryDNA("AABBCCDD")
    }).toThrow("Invalid DNA");

    test("it returns complementary DNA", () => {
        expect(getComplementaryDNA("ACTG")).toBe("TGAC");
        expect(getComplementaryDNA("TGACC")).toBe("ACTGG");
        expect(getComplementaryDNA("TGACTT")).toBe("ACTGAA");
    });
});

describe("isItPrime", () => {

    expect(() => {
        isItPrime("AABBCCDD")
    }).toThrow("A number is required");

    test("it returns true if the number is prime", () => {
        expect(isItPrime(5)).toBe(true);
        expect(isItPrime(3)).toBe(true);
        expect(isItPrime(11)).toBe(true);
    });
    test("it returns false if the number is not prime", () => {
        expect(isItPrime(9)).toBe(false);
        expect(isItPrime(16)).toBe(false);
        expect(isItPrime(-16)).toBe(false);
    });
    test("it returns true if the decimal number is not prime", () => {
        expect(isItPrime(1.1)).toBe(true);
        expect(isItPrime(1.7)).toBe(true);
    });
});

describe("createMatrix", () => {
    test("it returns a matrix of fill", () => {
        expect(createMatrix(2, 'foo')).toStrictEqual([['foo', 'foo'], ['foo', 'foo']]);
        expect(createMatrix(3, 'too')).toStrictEqual([['too', 'too', 'too'], ['too', 'too', 'too'], ['too', 'too', 'too']]);
    });
    test("it returns invalid number", () => {
        expect(createMatrix(2.2, 'fill')).toBe("Invalid Number");
        expect(createMatrix(-3, 'fill')).toBe("Invalid Number");
    });
});

describe("areWeCovered", () => {
    test("it returns false if there are no staff at all", () => {
        expect(areWeCovered([], "Sunday")).toBe(false);
        expect(areWeCovered([], "Monday")).toBe(false);
        expect(areWeCovered([], "Tuesday")).toBe(false);
        expect(areWeCovered([], "Wednesday")).toBe(false);
        expect(areWeCovered([], "Thursday")).toBe(false);
        expect(areWeCovered([], "Friday")).toBe(false);
        expect(areWeCovered([], "Saturday")).toBe(false);
    });
    test("it returns false if there are staff < 3 for a particular day", () => {
        const staff = [
            { name: "Mia", rota: ["Thursday", "Friday"] },
            { name: "Ross", rota: ["Thursday", "Friday"] },
            { name: "Ram", rota: ["Thursday", "Friday"] },
            { name: "Jess", rota: ["Thursday", "Friday"] },
        ]
        expect(areWeCovered(staff, "Sunday")).toBe(false);
    });

    test("it returns true if there are staff = 3 for all days", () => {
        const staff = [
            { name: "Mia", rota: ["Monday", "Tuesday", "Wednesday"] },
            { name: "Ross", rota: ["Monday", "Tuesday", "Thursday"] },
            { name: "Ram", rota: ["Monday", "Tuesday", "Friday"] },
            { name: "Jess", rota: ["Wednesday", "Thursday", "Friday"] },
            { name: "John", rota: ["Wednesday", "Thursday", "Friday"] },
            { name: "Kia", rota: ["Friday", "Saturday", "Sunday"] },
            { name: "Maria", rota: ["Monday", "Saturday", "Sunday"] },
            { name: "Tom", rota: ["Thursday", "Saturday", "Sunday"] },
        ]
        expect(areWeCovered(staff, "Sunday")).toBe(true);
        expect(areWeCovered(staff, "Monday")).toBe(true);
        expect(areWeCovered(staff, "Tuesday")).toBe(true);
        expect(areWeCovered(staff, "Wednesday")).toBe(true);
        expect(areWeCovered(staff, "Thursday")).toBe(true);
        expect(areWeCovered(staff, "Friday")).toBe(true);
        expect(areWeCovered(staff, "Saturday")).toBe(true);

    });
});