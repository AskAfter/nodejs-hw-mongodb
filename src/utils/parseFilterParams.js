export const parseIsFavourite = (isFavourite) => {
  if (typeof isFavourite !== 'string') return;

  if (isFavourite === 'true') return true;
  if (isFavourite === 'false') return false;

  return;
};

export const parseFilterParams = (query) => {
  const { isFavourite, type } = query;
  const parsedIsFavourite = parseIsFavourite(isFavourite);
  const allowedTypes = ['work', 'home', 'personal'];
  const parsedType = allowedTypes.includes(type) ? type : undefined;

  return {
    isFavourite: parsedIsFavourite,
    contactType: parsedType,
  };
};
