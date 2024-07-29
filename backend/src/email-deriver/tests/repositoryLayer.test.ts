import EmailDeriverRepository from "../repository/email-deriver.repository"

describe('EmailDeriverRepository', ()=> {
    let repository: EmailDeriverRepository;
    beforeAll(() => {
        repository = new EmailDeriverRepository();
    })

    it('getEmailFormat should return first_name_initial_last_name', () => {
        expect(repository.getSampleData('babbel.com')?.fullName).toBe('Jane Doe');
        expect(repository.getSampleData('babbel.com')?.email).toBe('jdoe@babbel.com');
    })

    it('getEmailFormat should return first_name_last_name', () => {
        expect(repository.getSampleData('google.com')?.fullName).toBe('David Stein');
        expect(repository.getSampleData('google.com')?.email).toBe('davidstein@google.com');

    })

    it('getEmailFormat should return null', () => {
        expect(repository.getSampleData('agdgadaggasdh.com')).toBe(null);
    })

})