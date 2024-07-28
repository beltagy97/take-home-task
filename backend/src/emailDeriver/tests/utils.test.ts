import { isValidRequest } from "../utils";

describe('testing util functions', () => {
    it('validateRequest should return false', () => {
        expect(isValidRequest('Ahmad', 'google.com')).toBe(false);
    })

    it('validateRequest should return true', () => {
        expect(isValidRequest('Ahmad Beltagy', 'google.com')).toBe(true);
    })
});