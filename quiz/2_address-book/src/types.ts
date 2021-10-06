interface Contact {
    name: string;
    address: string;
    phones: PhoneNumberDictionary;
}
interface PhoneNumberDictionary {
    [phone: string]: {
        num: number;
    };
}
enum PhoneType {
    Home = 'home',
    Office = 'office',
    Studio = 'studio',
}
export {
    Contact,
    PhoneType
}