import { Router } from 'express';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  getContactByIdController,
  getContactsController,
  addContactController,
  patchContactController,
  deleteContactController,
} from '../controllers/contacts.js';
import { authenticate } from '../middlewares/authenticate.js';
import {
  addContactSchema,
  patchContactSchema,
} from '../validation/contacts.js';
import { upload } from '../middlewares/multer.js';
import { isValidId } from '../middlewares/isValidId.js';
import { validateBody } from '../utils/validateBody.js';

const router = Router();

router.use(authenticate);

router.get('/', ctrlWrapper(getContactsController));

router.get('/:id', isValidId, ctrlWrapper(getContactByIdController));

router.post(
  '/',
  upload.single('photo'),
  validateBody(addContactSchema),
  ctrlWrapper(addContactController),
);

router.patch(
  '/:id',
  isValidId,
  upload.single('photo'),
  validateBody(patchContactSchema),
  ctrlWrapper(patchContactController),
);

router.delete('/:id', isValidId, ctrlWrapper(deleteContactController));

export default router;
