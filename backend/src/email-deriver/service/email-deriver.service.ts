import EmailDeriverRepository from "../repository/email-deriver.repository";
import { generateEmailFirstNameInitialLastNameFormat, generateEmailFullNameFormat } from "../utils";

class EmailDeriverService {
  private readonly repository: EmailDeriverRepository;
  
  constructor(repository: EmailDeriverRepository) {
    this.repository = repository;
  }

  async getEmail(fullName: string, domain: string): Promise<string | null> {
    const [firstName, lastName] = fullName.split(' ');
    const emailFormat = this.repository.getEmailFormat(domain);

    if (!emailFormat) {
      // since we do not have this domain in our sample data, so we cannot guess it. We return null and
      //  FE should be able to show meaningful message to user.
      return null;
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
