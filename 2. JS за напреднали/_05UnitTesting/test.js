let expect = require("chai").expect;

//1
let sum = require("./sum").sum;

//2
let calculator = require("./calculator").createCalculator();

//3
let isSymmetric = require("./symmetry").isSymmetric;

// Test 1
describe("sum(arr) - sum array of numbers", function () {
    it("should return 7 for ['-2', '7', '2']", function () {
        expect(sum(['-2','7','2'])).to.be.equal(7);
    });

    it("should return -7 for ['9', '-12', '-1', '-3']", function () {
        expect(sum(['9', '-12', '-1', '-3'])).to.be.equal(-7);
    });
});

//Test 2
// describe("Calculate Add | Subtract | Get", function () {
//     // it("should return 16 for 7 + 11 - 12 - (-10)", function () {
//     //     calculator.add(7);
//     //     calculator.add(11);
//     //     calculator.subtract(12);
//     //     calculator.subtract(-10);
//     //     expect(calculator.get()).to.be.equal(16);
//     // });

//     it("should return 0 for 3 - 42 + 18 + 26 - 5", function () {
//         calculator.add(3);
//         calculator.subtract(42);
//         calculator.add(18);
//         calculator.add(26);
//         calculator.subtract(5);

//         expect(calculator.get()).to.be.equal(0);
//     });
// });

//Test 3
// describe("Check if array is symmetric", function () {
//     it("should return true for ['a', 'b', 'a', 'b', 'a']", function () {
//         expect(isSymmetric(['a', 'b', 'a', 'b', 'a'])).to.be.true;
//     });

//     it("should return false for ['c', 'b', 'a', 'b', 'b']", function () {
//         expect(isSymmetric(['c', 'b', 'a', 'b', 'b'])).to.be.false;
//     });
// });