import Joi from 'joi';
import {
  nameMessages,
  emailMessages,
  passwordMessages,
} from '../messages/contactMessages.js';

export const registerUserSchema = Joi.object({
  name: Joi.string()
    .min(3)
    .max(30)
    .required()
    .messages(nameMessages(3, 30))
    .example('Petter Parker'),
  email: Joi.string()
    .min(3)
    .max(30)
    .email()
    .required()
    .messages(emailMessages(3, 30))
    .example('petterparker@email.com'),
  password: Joi.string()
    .min(8)
    .max(30)
    .required()
    .messages(passwordMessages(8, 30)),
});

export const loginUserSchema = Joi.object({
  email: Joi.string()
    .min(3)
    .max(30)
    .email()
    .required()
    .messages(emailMessages(3, 30))
    .example('petterparker@email.com'),
  password: Joi.string()
    .min(8)
    .max(30)
    .required()
    .messages(passwordMessages(8, 30)),
});
