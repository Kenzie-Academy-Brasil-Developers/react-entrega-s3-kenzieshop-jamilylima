import Product from "../../../components/product";

export const addtoCart = (Product) => ({ type: "@cart/ADD", Product });


export const removeFromCart = (list) => ({ type: "@cart/REMOVE", list });