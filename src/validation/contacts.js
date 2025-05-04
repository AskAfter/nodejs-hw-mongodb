import Joi from 'joi';

import { contactTypeVariants } from '../constants/contactType.js';

import {
  nameMessages,
  phoneMessages,
  emailMessages,
  isFavouriteMessages,
  contactTypeMessages,
} from '../messages/contactMessages.js';
import { emailRegex } from '../constants/auth.js';

export const addContactSchema = Joi.object({
  name: Joi.string()
    .min(3)
    .max(20)
    .messages(nameMessages(3, 20))
    .example('Petter Parker'),
  phoneNumber: Joi.string()
    .min(3)
    .max(20)
    .messages(phoneMessages(3, 20))
    .example('+380961234567'),
  email: Joi.string()
    .min(3)
    .max(20)
    .required()
    .pattern(emailRegex)
    .messages(emailMessages(3, 20))
    .example('peterparker@email.com'),
  isFavourite: Joi.boolean()
    .default(false)
    .messages(isFavouriteMessages)
    .example('true or false'),
  contactType: Joi.string()
    .valid(...contactTypeVariants)
    .default(contactTypeVariants[2])
    .messages(contactTypeMessages),
}).example(contactTypeVariants[0]);

export const patchContactSchema = Joi.object({
  name: Joi.string()
    .min(3)
    .max(20)
    .messages(nameMessages(3, 20))
    .example('Petter Parker'),
  phoneNumber: Joi.string()
    .min(3)
    .max(20)
    .messages(phoneMessages(3, 20))
    .example('+380961234567'),
  email: Joi.string()
    .email()
    .min(3)
    .max(20)
    .messages(emailMessages(3, 20))
    .example('peterparker@email.com'),
  isFavourite: Joi.boolean()
    .messages(isFavouriteMessages)
    .example('true or false'),
  contactType: Joi.string()
    .valid(...contactTypeVariants)
    .default(contactTypeVariants[2])
    .messages(contactTypeMessages)
    .example(contactTypeVariants[0]),
});
