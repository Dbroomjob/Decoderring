// Write your tests here!
const {polybius} = require("../src/polybius");
const expect = require("chai").expect;


describe("polybius function", () => {
    it("basic encryption", () => {
        expect(polybius("myword")).to.eql("234525432441")
    })
    it("basic decryption", () => {
        expect(polybius("234525432441", false)).to.eql("myword")
    })
    it("return false for undefined", () => {
        expect(polybius("11 1", false)).to.be.false
    })
    it("spaces, caps, and large shift", () => {
        expect(polybius("11 11", false)).to.eql("a a")
    })
});