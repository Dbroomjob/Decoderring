// Write your tests here!
const {substitution} = require("../src/substitution");
const expect = require("chai").expect;


describe("substitution function", () => {
    it("basic encryption", () => {
        expect(substitution("myword", "zyxwvutsrqponmlkjihgfedcba", true)).to.eql("nbdliw")
    })
    it("basic decryption", () => {
        expect(substitution("nbdliw", "zyxwvutsrqponmlkjihgfedcba", false)).to.eql("myword")
    })
    it("return false for greater than 26 in alphabet", () => {
        expect(substitution("","zyxwvutsrqponmlkjihgfedcbad", false)).to.be.false
    })
    it("spaces", () => {
        expect(substitution("nb dliw","zyxwvutsrqponmlkjihgfedcba" ,false)).to.eql("my word")
    })
});