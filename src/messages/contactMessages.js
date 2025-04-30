import { contactTypeVariants } from '../constants/contactType.js';

export const nameMessages = {
  'string.base': 'Name should be a string',
  'string.min': 'Name should be at least "#limit" characters',
  'string.max': 'Name should be at most "#limit" characters',
  'any.required': 'Name is required',
};

export const phoneMessages = {
  'string.base': 'PhoneNumber should be a string',
  'string.min': 'PhoneNumber should be at least "#limit" characters',
  'string.max': 'PhoneNumber should be at most "#limit" characters',
  'any.required': 'PhoneNumber is required',
};

export const emailMessages = {
  'string.base': 'Email should be a string',
  'string.email': 'Email must be valid',
  'string.min': 'Email should be at least "#limit" characters',
  'string.max': 'Email should be at most "#limit" characters',
  'any.required': 'Email is required',
};

export const isFavouriteMessages = {
  'boolean.base': 'isFavourite must be a boolean value',
};

export const contactTypeMessages = {
  'string.base': 'contactType must be a string',
  'any.only': `contactType must be one of: ${contactTypeVariants}`,
  'any.required': 'contactType is required',
};
