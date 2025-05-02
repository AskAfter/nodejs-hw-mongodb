import { contactTypeVariants } from '../constants/contactType.js';

export const nameMessages = (min, max) => ({
  'string.base': 'Name should be a string',
  'string.min': `Name should be at least ${min} characters`,
  'string.max': `Name should be at most ${max} characters`,
  'any.required': 'Name is required',
});

export const phoneMessages = (min, max) => ({
  'string.base': 'PhoneNumber should be a string',
  'string.min': `PhoneNumber should be at least ${min} characters`,
  'string.max': `PhoneNumber should be at most ${max} characters`,
  'any.required': 'PhoneNumber is required',
});

export const emailMessages = (min, max) => ({
  'string.base': 'Email should be a string',
  'string.email': 'Email must be valid',
  'string.min': `Email should be at least ${min} characters`,
  'string.max': `Email should be at most ${max} characters`,
  'any.required': 'Email is required',
});

export const isFavouriteMessages = {
  'boolean.base': 'isFavourite must be a boolean value',
};

export const contactTypeMessages = {
  'string.base': 'contactType should be a string',
  'any.only': `contactType should be one of: ${contactTypeVariants}`,
  'any.required': 'contactType is required',
};

export const passwordMessages = (min, max) => ({
  'string.base': 'Password should be a string',
  'string.min': `Password should be at least ${min} characters`,
  'string.max': `Password should be at most ${max} characters`,
  'any.required': 'Password is required',
});
