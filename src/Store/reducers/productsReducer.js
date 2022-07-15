import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productsItem: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addNewProductsItems(state, action) {
      const newProducts = {
        ...state.productsItem,
        id: Math.ceil(Math.random() * 1000),
        items: action.payload,
        createdAt: new Date().toISOString(),
      };
      const productsItems = [...state.productsItem, newProducts];
      return { ...state, productsItem: productsItems };
    },
  },
});

export const { addNewProductsItems } = productsSlice.actions;
export default productsSlice.reducer;
