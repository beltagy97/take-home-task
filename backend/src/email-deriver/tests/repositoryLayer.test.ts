import EmailDeriverRepository from "../repository/email-deriver.repository"

describe('EmailDeriverRepository', ()=> {
    let repository: EmailDeriverRepository;
    beforeAll(() => {
        repository = new EmailDeriverRepository();
    })

    it('getEmailFormat should return first_name_initial_last_name', () => {
        expect(repository.getEmailFormat('babbel.com')).toBe('first_name_initial_last_name');
    })

    it('getEmailFormat should return first_name_last_name', () => {
        expect(repository.getEmailFormat('google.com')).toBe('first_name_last_name');
    })

    it('getEmailFormat should return null', () => {
        expect(repository.getEmailFormat('agdgadaggasdh.com')).toBe(null);
    })

})