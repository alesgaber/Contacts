import { Router } from 'https://deno.land/x/oak/mod.ts';
import { getContacts, deleteContact, addContact } from './api/contactsApi.ts';

const router = new Router();

router
  .get('/contacts', getContacts)
  .post('/contacts', addContact)
  .delete('/contacts/:id', deleteContact);

export default router;
