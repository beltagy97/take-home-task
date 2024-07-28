import { generateEmailFirstNameInitialLastNameFormat, generateEmailFullNameFormat, isValidRequest } from "../utils";

describe('testing util functions', () => {
    it('validateRequest should return false', () => {
        expect(isValidRequest('Ahmad', 'google.com')).toBe(false);
    })

    it('validateRequest should return true', () => {
        expect(isValidRequest('Ahmad Beltagy', 'google.com')).toBe(true);
    })

    it.each([{firstName: 'Ahmad', lastName:'Beltagy', domain: 'google.com', actual: 'ahmadbeltagy@google.com'},
    {firstName: 'Menna', lastName:'Abdelaaty', domain: 'facebook.com', actual: 'mennaabdelaaty@facebook.com'},
    ])
    ('generateEmailFullNameFormat should return format fullname@domain.com', ({firstName, lastName, domain, actual}) => {
        expect(generateEmailFullNameFormat(firstName, lastName, domain)).toBe(actual)
    })

    it.each([{firstName: 'Ahmad', lastName:'Beltagy', domain: 'babbel.com', actual: 'abeltagy@babbel.com'},
    {firstName: 'Menna', lastName:'Abdelaaty', domain: 'bloomberg.com', actual: 'mabdelaaty@bloomberg.com'},
    ])
    ('generateEmailFirstNameInitialLastNameFormat should return format firstInitialLastName@domain.com', ({firstName, lastName, domain, actual}) => {
        expect(generateEmailFirstNameInitialLastNameFormat(firstName, lastName, domain)).toBe(actual)
    })
});