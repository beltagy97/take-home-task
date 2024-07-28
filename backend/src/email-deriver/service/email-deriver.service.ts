import EmailDeriverRepository from "../repository/email-deriver.repository";
import { generateEmailFirstNameInitialLastNameFormat, generateEmailFullNameFormat } from "../utils";

class EmailDeriverService {
  private readonly repository: EmailDeriverRepository;
  
  constructor(repository: EmailDeriverRepository) {
    this.repository = repository;
  }

  async getEmail(fullName: string, domain: string): Promise<string> {
    const [firstName, lastName] = fullName.split(' ');
    const emailFormat = this.repository.getEmailFormat(domain);

    if (!emailFormat) {
      throw new Error('Email could not be derived');
    }

    let derivedEmail = '';
    if (emailFormat === 'first_name_last_name') {
      derivedEmail = generateEmailFullNameFormat(firstName, lastName, domain);
    } else {
      derivedEmail = generateEmailFirstNameInitialLastNameFormat(firstName, lastName, domain);
    }

    return derivedEmail;
  };
}

export default EmailDeriverService;
