import {isSimpleNumber} from "./isSimpleNumber.js";

describe('test isSimpleNumber', () => {
    it('test for Invalid Number', () => {
        expect(isSimpleNumber(1709)).toBe('Данные неверны')
    }),
    it('test for Simple Number', () => {
        expect(isSimpleNumber(5)).toBe('Число простое')
    }),
    it('test for Composite Number', () => {
        expect(isSimpleNumber(6)).toBe('Число составное')
    })
})