import { createSelector } from "reselect";

const selectorCategoryReducer = ({ categories }) => categories;

export const selectCategories = createSelector(
  [selectorCategoryReducer],
  ({ categories }) => categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);
