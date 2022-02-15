import { INSERT_CATEGORY } from "../actions/categoryActions";
import  Category  from "./../../models/Category";

const initialState = {
  categories: [new Category(1, "Hat"), new Category(2, "Shoes")],
};

export default (state = initialState, actions) => {
  const { type, category } = actions;
  switch (type) {
    case INSERT_CATEGORY:
      return { ...state, categories: [...state.categories, category] };
      default:
          return state;
  }
};
