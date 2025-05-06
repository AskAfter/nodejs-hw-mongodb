import { Schema, model } from 'mongoose';

import { contactTypeVariants } from '../../constants/contactType.js';

import { handleSaveError, setUpdateSettings } from './hooks.js';
import { emailRegex } from '../../constants/auth.js';

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
      match: [emailRegex, 'Invalid email format'],
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
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    photo: { type: String },
  },
  { versionKey: false, timestamps: true },
);

contactSchema.post('save', handleSaveError);
contactSchema.pre('findOneAndUpdate', setUpdateSettings);
contactSchema.post('save', handleSaveError);

const ContactCollection = model('contact', contactSchema);

export default ContactCollection;
