import { Contact, ContactsData } from "../models/contact.model.ts";

//get all
export const getContacts = ({ response }: { response: any }) => {
  response.body = ContactsData;
};

//get by id
export const getContactById = ({
  params,
  response
}: {
  params: { id: string };
  response: any;
}) => {
  const contact: Contact | undefined = ContactsData.find(
    (c) => c.id == +params.id
  );

  if (contact) {
    response.status = 200;
    response.body = contact;
  } else {
    response.status = 404;
    response.body = [];
  }
};

//add
export const addContact = async ({
  request,
  response
}: {
  request: any;
  response: any;
}) => {
  if (!request.hasBody) {
    response.status = 400;
  } else {
    const body = await request.body();
    const payload = await body.value;
    const newContact: Contact = {
      id: getNextContactId(),
      ...payload
    };

    ContactsData.push(newContact);
    response.body = newContact;
    response.status = 201;
  }
};

export const deleteContact = ({
  params,
  response
}: {
  params: { id: string };
  response: any;
}) => {
  const targetId = +params.id;
  const newList = ContactsData.filter((f) => f.id !== targetId);

  if (newList.length < ContactsData.length) {
    ContactsData.splice(0, ContactsData.length);
    ContactsData.push(...newList);
    response.status = 200;
  } else {
    response.status = 404;
  }
};

const getNextContactId = () => {
  if (ContactsData.length == 0) {
    return 1;
  }
  return Math.max(...ContactsData.map((c) => c.id)) + 1;
};
