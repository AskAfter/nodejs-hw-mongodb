import { Schema, model } from 'mongoose';

import { contactTypeVariants } from '../../constants/contactType.js';

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: false,
    },
    isFavourite: {
      type: Boolean,
      required: true,
      default: false,
    },
    contactType: {
      type: String,
      enum: contactTypeVariants,
      required: true,
      default: contactTypeVariants[2],
    },
  },
  {
    timestamps: true,
  },
);

const ContactCollection = model('contact', contactSchema);

export default ContactCollection;
