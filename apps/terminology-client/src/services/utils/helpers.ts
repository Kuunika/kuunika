import { Category } from './@types';

export const getSubCategories = (
  categories: Array<Category>,
  targetCategories = [] as Array<string>
) => {
  if (targetCategories.length === 0 || categories.length == 0)
    return categories;

  const targetCategory = categories.find(
    category =>
      category.categoryTitle.toLowerCase() ===
      targetCategories[0].toLowerCase().replace('-', ' ')
  );

  if (targetCategory.categories == null) return categories;

  return getSubCategories(
    targetCategory.categories,
    targetCategories.splice(1)
  );
};
