import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryItem: [],
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    addNewCategoryItem(state, action) {
      const newTask = {
        ...state.categoryItem,
        id: new Date().getTime(),
        items: action.payload,
        createdAt: new Date().toISOString(),
      };
      const categoryItems = [...state.categoryItem, newTask];
      return { ...state, categoryItem: categoryItems };
    },
  },
});
export const { addNewCategoryItem } = categorySlice.actions;
export default categorySlice.reducer;
