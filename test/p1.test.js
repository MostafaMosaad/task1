const {capitalizeText} = require("../p1");
const {assert,expect} = require("chai");
const should = require("chai").should();

describe("T1",()=>{
    it("accept and return string",()=>{
        expect(capitalizeText("ggg")).to.be.a("string");
        assert.isString(capitalizeText("ggg"))
        capitalizeText("ggg").should.be.a("string");
    });
    it("function takes a string and return it after capitalize it",()=>{
        expect(capitalizeText("ggg")).to.equal("GGG");
        assert.equal(capitalizeText("ggg"),"GGG");
        capitalizeText("ggg").should.be.a("string");
    });
    it("function takes number it will throw type error says parameter should be string",()=>{
        expect(capitalizeText("kkk")).to.be.a("string");
        assert.isString(capitalizeText("hh"))
        capitalizeText("jj").should.be.a("string");
    });
});

