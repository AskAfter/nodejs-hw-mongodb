import { Router } from 'express';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';

import {
  getContactByIdController,
  getContactsController,
  addContactController,
  patchContactController,
  deleteContactController,
} from '../controllers/contacts.js';

const contactsRouter = Router();

contactsRouter.get('/contacts', ctrlWrapper(getContactsController));

contactsRouter.get('/contacts/:id', ctrlWrapper(getContactByIdController));

contactsRouter.post('/contacts', ctrlWrapper(addContactController));

contactsRouter.patch('/contacts/:id', ctrlWrapper(patchContactController));

contactsRouter.delete('/contacts/:id', ctrlWrapper(deleteContactController));

export default contactsRouter;
