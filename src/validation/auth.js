import Joi from 'joi';
import {
  nameMessages,
  emailMessages,
  passwordMessages,
} from '../messages/contactMessages.js';

export const registerUserSchema = Joi.object({
  name: Joi.string()
    .min(3)
    .max(20)
    .required()
    .messages(nameMessages(3, 30))
    .example('Petter Parker'),
  email: Joi.string()
    .min(3)
    .max(20)
    .email()
    .required()
    .messages(emailMessages)
    .example('petterparker@email.com'),
  password: Joi.string().required().messages(passwordMessages(8, 30)),
});
