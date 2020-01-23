export const getSubCategories = (categories, targetCategories = []) => {
  if (targetCategories.length === 0 || categories.length == 0)
    return categories;

  const targetCategory = categories.find(
    category =>
      category.categoryTitle.toLowerCase() ===
      targetCategories[0].toLowerCase().replace('-', ' ')
  );

  return getSubCategories(
    targetCategory.categories,
    targetCategories.splice(1)
  );
};
