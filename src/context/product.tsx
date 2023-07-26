import { produce } from 'immer';
import React, { createContext, useReducer } from 'react'
import productReducer from '../compoment/reducer/productReducer';
export const ProductContext = createContext({}as any)
type ProductProviderProps = {
    children: React.ReactNode;
}
const initialState = {
    products: []
}
const ProductProvider = ({children}:ProductProviderProps) => {
    const [state,dispatch] = useReducer(produce(productReducer), initialState);
  return (
    <div>
        <ProductContext.Provider value={{state,dispatch}}>
            {children}
        </ProductContext.Provider>
    </div>
  )
}

export default ProductProvider