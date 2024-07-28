import EmailDeriverService from '../service/email-deriver.service';

describe('EmailDeriverService', () => {
  let emailDeriverService: EmailDeriverService;

  beforeAll(() => {
    emailDeriverService = new EmailDeriverService();
  });

  it('should derive email with format first_name_last_name', async () => {
    const email = await emailDeriverService.getEmail('David Stein', 'google.com');
    expect(email).toBe('davidstein@google.com');
  });

  it('should derive email with format first_name_initial_last_name', async () => {
    const email = await emailDeriverService.getEmail('Marta Dahl', 'babbel.com');
    expect(email).toBe('mdahl@babbel.com');
  });

  it('should throw error if email format not found', async () => {
    await expect(emailDeriverService.getEmail('John Smith', 'hahdahs.com')).rejects.toThrow('Email format not found');
  });
});
