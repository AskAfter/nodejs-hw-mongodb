import ContactCollection from '../db/models/Contact.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';
import { SORT_ORDER } from '../constants/index.js';

export const getContacts = async ({
  page = 1,
  perPage = 10,
  sortOrder = SORT_ORDER.ASC,
  sortBy = '_id',
  filter = {},
}) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;

  console.log('FILTER:', filter);

  const contactsQuery = ContactCollection.find();

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

export const getContactsById = (id) => ContactCollection.findOne({ _id: id });

export const addContact = (payload) => ContactCollection.create(payload);

export const updateContact = async (id, payload) => {
  const data = await ContactCollection.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return data;
};

export const deleteContactById = (id) =>
  ContactCollection.findOneAndDelete({ _id: id });
