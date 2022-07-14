import { useContext, createContext, useReducer } from "react";

export const productAction = createContext();
export const productActionDispatch = createContext();

const initialState = {
  products: [],
  category: [],
};

const productsHandler = (state = initialState, action) => {
  switch (action.type) {
    case "addCategoryItem": {
      const newCategory = [
        ...state.category,
        {
          id: new Date().getTime(),
          item: action.payload,
          createdAt: new Date().toISOString(),
        },
      ];
      const categoryItem = [...state.category, newCategory];
      return { ...state, category: categoryItem };
    }
    case "addProductItem": {
      const newProducts = [
        ...state.category,
        {
          id: Math.ceil(Math.random() * 1000),
          product: action.payload,
          createdAt: new Date().toISOString(),
        },
      ];
      const productItem = [...state.products, newProducts];
      console.log(productItem);
      return { ...state, products: productItem };
    }
    case "removeProductItem": {
      const filterProductItem = state.products.filter(
        (p) => p.id !== action.id
      );
      return { ...state, products: filterProductItem };
    }

    default:
      return state;
  }
};

const ProductProvider = ({ children }) => {
  const [products, dispatch] = useReducer(productsHandler, initialState);

  return (
    <productAction.Provider value={products}>
      <productActionDispatch.Provider value={dispatch}>
        {children}
      </productActionDispatch.Provider>
    </productAction.Provider>
  );
};

export default ProductProvider;

export const useProducts = () => useContext(productAction);
export const useProductsDispatch = () => useContext(productActionDispatch);
