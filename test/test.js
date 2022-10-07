'use strict';
const clone78 = require('../dist/index').default;
const expect = require('chai').expect;

describe("it's not object" , () => {
    it('number ', () => {
        let a = 1;
        let b = clone78(a)
        b += 3;
        expect(b).to.not.equal(a);
        //done(); //  
    });
    it('string ', () => {
        let a = "test";
        let b = clone78(a)
        b += "2";
        expect(b).to.not.equal(a);
        //done(); //  
    });
});

describe("it's  object", () => {
    it('null ', () => {
        let a = null;
        let b = clone78(a)
        b  = 3;
        expect(b).to.not.equal(a);
        //done(); // 
    });
    it('Array ', () => {
        let a = [1,2,3];
        let b = clone78(a)
        b.push(4);
        expect(b).to.not.equal(a);
        //done(); //  
    });
    it('Object ', () => {
        let a = {x:1,y:2};
        let b = clone78(a)
        b["x"]=3;
        expect(b).to.not.equal(a);
        //done(); //  
    });
});