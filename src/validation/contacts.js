import Joi from 'joi';

import { contactTypeVariants } from '../constants/contactType.js';

import {
  nameMessages,
  phoneMessages,
  emailMessages,
  isFavouriteMessages,
  contactTypeMessages,
} from '../messages/contactMessages.js';

export const addContactSchema = Joi.object({
  name: Joi.string()
    .min(3)
    .max(20)
    .messages(nameMessages)
    .example('Petter Parker'),
  phoneNumber: Joi.string()
    .min(3)
    .max(20)
    .messages(phoneMessages)
    .example('+380961234567'),
  email: Joi.string()
    .email()
    .min(3)
    .max(20)
    .required()
    .messages(emailMessages)
    .example('peterparker@email.com'),
  isFavourite: Joi.boolean()
    .default(false)
    .messages(isFavouriteMessages)
    .example('true or false'),
  contactType: Joi.string()
    .valid(contactTypeVariants)
    .default(contactTypeVariants[2])
    .messages(contactTypeMessages),
}).example(contactTypeVariants[0]);

export const patchContactSchema = Joi.object({
  name: Joi.string()
    .min(3)
    .max(20)
    .messages(nameMessages)
    .example('Petter Parker'),
  phoneNumber: Joi.string()
    .min(3)
    .max(20)
    .messages(phoneMessages)
    .example('+380961234567'),
  email: Joi.string()
    .email()
    .min(3)
    .max(20)
    .messages(emailMessages)
    .example('peterparker@email.com'),
  isFavourite: Joi.boolean()
    .messages(isFavouriteMessages)
    .example('true or false'),
  contactType: Joi.string()
    .valid(contactTypeVariants)
    .default(contactTypeVariants[2])
    .messages(contactTypeMessages)
    .example(contactTypeVariants[0]),
});
