import { Router } from 'express';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';

import {
  getContactByIdController,
  getContactsController,
  addContactController,
  patchContactController,
  deleteContactController,
} from '../controllers/contacts.js';

import {
  addContactSchema,
  patchContactSchema,
} from '../validation/contacts.js';

import { isValidId } from '../middlewares/isValidId.js';

import { validateBody } from '../utils/validateBody.js';

const router = Router();

router.get('/', ctrlWrapper(getContactsController));

router.get('/:id', isValidId, ctrlWrapper(getContactByIdController));

router.post(
  '/',
  validateBody(addContactSchema),
  ctrlWrapper(addContactController),
);

router.patch(
  '/:id',
  isValidId,
  validateBody(patchContactSchema),
  ctrlWrapper(patchContactController),
);

router.delete('/:id', isValidId, ctrlWrapper(deleteContactController));

export default router;
