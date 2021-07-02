// Write your tests here!
const {caesar} = require("../src/caesar");
const expect = require("chai").expect;


describe("caesar function", () => {
    it("basic encryption", () => {
        expect(caesar("caesar", 2)).to.eql("ecguct")
    })
    it("basic decryption", () => {
        expect(caesar("ecguct", 2, false)).to.eql("caesar")
    })
    it("return false for undefined", () => {
        expect(caesar("wrong", undefined)).to.be.false
    })
    it("spaces, caps, and large shift", () => {
        expect(caesar("Our MilKYwaY", 19)).to.eql("hnk fbedrptr")
    })
});