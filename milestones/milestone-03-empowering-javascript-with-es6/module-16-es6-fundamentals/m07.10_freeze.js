// Object Methods: freeze

const birthCertificate = {
    name: 'Alice',
    birthDate: '05-08-2002',
    certificateNumber: '1234567890'
};

console.log(birthCertificate);

Object.freeze(birthCertificate);

delete birthCertificate.name;                               // Not delete, update, add
birthCertificate.certificateNumber = '11111111111111';
birthCertificate.new = 'test'

console.log(birthCertificate);