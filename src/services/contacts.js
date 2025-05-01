import ContactCollection from '../db/models/Contact.js';

export const getContacts = () => ContactCollection.find();

export const getContactsById = (id) => ContactCollection.findOne({ _id: id });

export const addContact = (payload) => ContactCollection.create(payload);

export const updateContact = async (id, payload) => {
  const data = await ContactCollection.findByIdAndUpdate(id, payload);
  return data;
};

export const deleteContactById = (id) =>
  ContactCollection.findOneAndDelete({ _id: id });
