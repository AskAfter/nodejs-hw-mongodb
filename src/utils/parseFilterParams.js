export const parseIsFavorite = (isFavorite) => {
  if (typeof isFavorite !== 'string') return;

  if (isFavorite === 'true') return true;
  if (isFavorite === 'false') return false;

  return;
};

export const parseFilterParams = (query) => {
  const { isFavorite, type } = query;
  const parsedIsFavorite = parseIsFavorite(isFavorite);
  const allowedTypes = ['work', 'home', 'personal'];
  const parsedType = allowedTypes.includes(type) ? type : undefined;

  return {
    isFavorite: parsedIsFavorite,
    contactType: parsedType,
  };
};
