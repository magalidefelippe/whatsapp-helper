import {Number} from './Number';

describe("Number class use cases", () => {
    const number = new Number();

    test("Validate if the number is not empty", () => {
        const validation = () => number.checkPhone();
        expect(validation).toThrow('Numero muy corto')
    })

    test("if the number not initialice with the code, concat the number and the code", () => {
        number.concat = jest.fn();
        const phone = '222222';
        number.code = 111;
        number.checkCode(phone);
        expect(number.concat).toBeCalled();
    })

}) 