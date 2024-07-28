import EmailDeriverRepository from '../repository/email-deriver.repository';
import EmailDeriverService from '../service/email-deriver.service';

jest.mock('../repository/email-deriver.repository');

describe('EmailDeriverService', () => {
  let emailDeriverService: EmailDeriverService;
  let repository: jest.Mocked<EmailDeriverRepository>;

  beforeAll(() => {
    repository = new EmailDeriverRepository() as jest.Mocked<EmailDeriverRepository>;
    emailDeriverService = new EmailDeriverService(repository);
  });

  it('should derive email with format first_name_last_name', async () => {
    repository.getEmailFormat.mockReturnValue('first_name_last_name');
    const email = await emailDeriverService.getEmail('David Stein', 'google.com');
    expect(email).toBe('davidstein@google.com');
  });

  it('should derive email with format first_name_initial_last_name', async () => {
    repository.getEmailFormat.mockReturnValue('first_name_initial_last_name');
    const email = await emailDeriverService.getEmail('Marta Dahl', 'babbel.com');
    expect(email).toBe('mdahl@babbel.com');
  });

  it('should throw error if email format not found', async () => {
    repository.getEmailFormat.mockReturnValue(null);
    await expect(emailDeriverService.getEmail('John Smith', 'hahdahs.com')).rejects.toThrow('Email could not be derived');
  });
});
