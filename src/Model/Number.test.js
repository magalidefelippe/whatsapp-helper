import {Number} from './Number';

describe("Number class use cases", () => {
    const number = new Number();

    test("Validate if the number is not empty", () => {
        const validation = number.checkEmpty();
        expect(validation).toThrow(Error)
    })

}) 