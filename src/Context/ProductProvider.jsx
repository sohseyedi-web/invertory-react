import {useContext , createContext , useReducer} from 'react'

export const productAction = createContext();
export const productActionDispatch = createContext();

const initialState = {
    items : []
}

const productsHandler = (state = initialState, action) => {
    switch (action.type) {
        case "categoryItem":{
            const category = [...state.items];
        }
            
    
        default:
            return state;
    }
}

const ProductProvider = ({children}) => {

    const [products , dispatch] = useReducer(productsHandler , initialState)

  return (
    <productAction.Provider value={products}>
        <productActionDispatch.Provider value={dispatch}>
            {children}
        </productActionDispatch.Provider>
    </productAction.Provider>
  )
}

export default ProductProvider

export const useProducts = () => useContext(productAction);
export const useProductsDispatch = () => useContext(productActionDispatch);