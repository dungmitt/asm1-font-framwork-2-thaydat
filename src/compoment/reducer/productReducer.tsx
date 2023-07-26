import { produce } from "immer";
const productReducer = (state = {products:[]}, action:any) =>{
    return produce(state, draftstate =>{
        switch (action.type) {
            case 'product/fetching':
                draftstate.products = action.payload
                break;
            case 'product/add':
                draftstate.products.push(action.payload)
                break;
            case 'product/delete':
                const id = action.payload
                draftstate.products = draftstate.products.filter((item:any)=> item.id !== id)
                break;
            case 'product/edit':
                draftstate.products = draftstate.products.map((item:any)=> item.id === action.payload.id ? action.payload : item)
                break;
            default:
                return state;
        }
    })
}
export default productReducer