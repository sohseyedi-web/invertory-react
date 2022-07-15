import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./reducers/categoryReducer";
import productsReducer from "./reducers/productsReducer";

const store = configureStore({
    reducer:{
        category : categoryReducer,
        products : productsReducer
    }
})

export default store