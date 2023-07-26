import axios from "axios";

export const fetchProducts = ()=> async (dispatch:any) => {
    dispatch({type: 'product/fetching'});
    try {
        const { data } = await axios.get(`http://localhost:3000/products`);
        dispatch({type: 'product/fetching',payload: data});
    } catch (error) {
        dispatch({type: 'product/fetching failed',})
    }finally{
        dispatch({type: 'product/fetching finally'});
    }
}
export const addProduct = (product:any)=> async (dispatch:any)=>{
    try {
        const {data} = await axios.post(`http://localhost:3000/products`,product);
        console.log(data);
        
        dispatch({type:"product/add",payload:data})
    } catch (error:any) { 
    }
}
export const deleteProduct = (id:number)=> async (dispatch : any)=>{
    try {
        await axios.delete(`http://localhost:3000/products/${id}`);
        dispatch({type:"product/delete",payload:id});
    } catch (error:any) {
    }finally{
    }
}
export const editProduct = (product:any)=> async (dispatch : any)=>{
        try {
        const { data } = await axios.put(`http://localhost:3000/products/${product.id}`,product);
        dispatch({type:"product/edit",payload:data});
    } catch (error:any) {
    }finally{
   }

}
export const addToCart = (cart:any)=> async (dispatch:any)=>{
    try {
        const {data} = await axios.post(`http://localhost:3000/cart`,cart);
        console.log(data);
        
        dispatch({type:"cart/add",payload:data})
    } catch (error:any) { 
    }
}
export const fetchCart = ()=> async (dispatch:any) => {
    dispatch({type: 'cart/fetching'});
    try {
        const { data } = await axios.get(`http://localhost:3000/cart`);
        dispatch({type: 'cart/fetching',payload: data});
    } catch (error) {
        dispatch({type: 'cart/fetching failed',})
    }finally{
        dispatch({type: 'cart/fetching finally'});
    }
}
