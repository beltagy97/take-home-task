import sampleData from '../model/sampleData';
import { EmailFormatType } from '../types';

class EmailDeriverRepository {
    /**
     *
     */
    constructor() {
    }

    getEmailFormat(domain: string): EmailFormatType | null {
    for (const [name, email] of Object.entries(sampleData)) {
        if (email.endsWith(`@${domain}`)) {
            const [sampleFirstName, sampleLastName] = name.split(' ');
            if (email.startsWith(sampleFirstName.toLowerCase() + sampleLastName.toLowerCase())) {
                return 'first_name_last_name';
            } else if (email.startsWith(sampleFirstName[0].toLowerCase() + sampleLastName.toLowerCase())) {
                return 'first_name_initial_last_name';
            }
        }
    }
    return null;
}

}

export default EmailDeriverRepository;

