const {createArray} = require("../p2");
const {assert,expect} = require("chai");
const should = require("chai").should();

describe("T2",()=>{
    it("accept and return array",()=>{
        expect(createArray(5)).to.be.a("Array");
        assert.isArray(createArray(5))
        createArray(5).should.be.a("Array");
    });
    it.skip("test if we pass 3 it will return array of length 3 and test it's include 1",()=>{
        expect(createArray(3)).to.have.lengthOf(3).that.include(1)
        assert.lengthOf(createArray(3),3);
        createArray(3).should.be.lengthOf(3).that.include(1);
    });
});

setTimeout(()=>{
    run()
},5000)

