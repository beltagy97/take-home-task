import EmailDeriverRepository from "../repository/email-deriver.repository";
import { EmailFormatType, SampleData } from "../types";
import { generateEmailFirstNameInitialLastNameFormat, generateEmailFullNameFormat, getEmailFormat } from "../utils";

class EmailDeriverService {
  private readonly repository: EmailDeriverRepository;

  constructor(repository: EmailDeriverRepository) {
    this.repository = repository;
  }

  async getEmail(fullName: string, domain: string): Promise<string | null> {
    const [firstName, lastName] = fullName.split(' ');

    const sampleData = this.repository.getSampleData(domain);

    if (!sampleData) {
      // since we do not have this domain in our sample data, so we cannot guess it. We return null and
      //  FE should be able to show meaningful message to user.
      return null;
    }
    const emailFormat = getEmailFormat({fullName: sampleData.fullName, email: sampleData.email});
    
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
