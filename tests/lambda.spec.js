import Lambda from "../src/calculators/lambda";

describe('@Lambda', () => {
    it('#calculate', () => {
        expect(Lambda.calculate(268000000, 150, .60)).toEqual(412)
        expect(Lambda.calculate(705000000, 150, .60)).toEqual(1084)
        expect(Lambda.calculate(67000000, 150, .60)).toEqual(103)
        expect(Lambda.calculate(77000000, 150, .60)).toEqual(118)
    })
})