export const isValidRequest = (fullName: string | undefined, domain: string | undefined) => {
    if (!fullName || typeof fullName !== 'string' || !domain || typeof domain !== 'string') return false;
    const [firstName, lastName] = fullName.split(' ');
    if (!firstName || !lastName) return false;
    if (!domain) return false;
    return true;
};

export const generateEmailFullNameFormat = (firstName: string, lastName: string, domain: string) => {
    return `${firstName.toLowerCase()}${lastName.toLowerCase()}@${domain}`;
}

export const generateEmailFirstNameInitialLastNameFormat =  (firstName: string, lastName: string, domain: string) => {
    return `${firstName.toLowerCase()[0]}${lastName.toLowerCase()}@${domain}`;
}