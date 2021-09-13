export interface Contact {
  id: number;
  name: string;
  gender: string;
  email?: string;
  telephone?: string;
}

export const ContactsData: Contact[] = [
  {
    id: 1,
    name: 'Mike',
    gender: 'male',
    email: 'larry.potter@hotmail.com',
    telephone: '+386 40 114 251',
  },
  { id: 2, name: 'Nik', gender: 'male' },
  { id: 3, name: 'Rose', gender: 'female', email: 'rose@gmail.com' },
  { id: 4, name: 'Jullia', gender: 'female', email: 'jlly@gmail.com' },
];
