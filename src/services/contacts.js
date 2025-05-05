import ContactCollection from '../db/models/Contact.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';
import { SORT_ORDER } from '../constants/index.js';

export const getContacts = async ({
  page = 1,
  perPage = 10,
  sortOrder = SORT_ORDER.ASC,
  sortBy = '_id',
  filter = {},
  userId,
}) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;

  // const query = { userId };

  const contactsQuery = ContactCollection.find({ userId });

  if (typeof filter.isFavourite === 'boolean') {
    contactsQuery.where('isFavourite').equals(filter.isFavourite);
  }

  if (filter.contactType) {
    contactsQuery.where('contactType').equals(filter.contactType);
  }

  const [contactsCount, contacts] = await Promise.all([
    ContactCollection.find().merge(contactsQuery).countDocuments(),
    contactsQuery
      .skip(skip)
      .limit(limit)
      .sort({ [sortBy]: sortOrder })
      .exec(),
  ]);

  const paginationData = calculatePaginationData(contactsCount, perPage, page);

  return {
    data: contacts,
    ...paginationData,
  };
};

export const getContactsById = (id, userId) =>
  ContactCollection.findOne({ _id: id, userId });

export const addContact = (payload) => ContactCollection.create(payload);

export const updateContact = async (id, userId, payload) => {
  const data = await ContactCollection.findOneAndUpdate(
    { _id: id, userId },
    payload,
    { new: true },
  );
  return data;
};

export const deleteContactById = (id, userId) =>
  ContactCollection.findOneAndDelete({ _id: id, userId });
