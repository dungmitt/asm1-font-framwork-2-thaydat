import { Dispatch, useEffect } from "react"
import { Iproduct } from "../../interface/product";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { addProduct, deleteProduct, editProduct, fetchProducts } from "../../action/product";

const Productlist = () => {
    const dispatch: Dispatch<any> = useAppDispatch();
    // const {state,dispatch} = useContext(ProductContext);
    const { products } = useAppSelector((state: any) => state.Product);
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch])

    return (
        <div>
            {(products?.map((item: Iproduct) => {
                return <div key={item.id}>
                    {item.name}
                    <button
                        onClick={() => dispatch({type:"cart/add",payload: { ...item, quantity: 1 }})}
                    >
                        Add to cart
                    </button>
                </div>

            })
            )}
            <button
                onClick={() => dispatch(addProduct({ name: "Product Added", price: 500 }))}
            >
                Add Product
            </button>
            <button 
                onClick={() => dispatch(editProduct({ name: "Product Updated", id: 3, price: 500 }))}
            >
                Edit Product
            </button>
            <button 
                onClick={() => dispatch(deleteProduct(3))}
            >
                Delete Product
            </button>
        </div>
    )
}
export default Productlist