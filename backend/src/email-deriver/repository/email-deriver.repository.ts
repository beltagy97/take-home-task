import sampleData from '../model/sampleData';
import { EmailFormatType, SampleData } from '../types';

class EmailDeriverRepository {
    /**
     *
     */
    constructor() {
    }

    getSampleData(domain: string): SampleData | null {
    for (const [fullName, email] of Object.entries(sampleData)) {
        if (email.endsWith(`@${domain}`)) {
            return {fullName, email };
        }
    }
    return null;
}

}

export default EmailDeriverRepository;

