import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();
export const useCartContext = () => {
    return useContext(CartContext);
};

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (data) => {
        let temp_cart = [...cart];
        let cart_item = temp_cart.find((item) => item.id === data.id);
        if(cart_item) {
            temp_cart.find(item => item.id === data.id).quantity += 1;
        }
        else {
            temp_cart.push({
                id: data.id,
                name: data.name,
                quantity: 1,
                picture: data.picture,
                price: data.price,
            })
        }

        setCart(temp_cart);
    }
    const removeFromCart = (id) => {
        let temp_cart = [...cart];
        let cart_item = temp_cart.find((item)=> item.id === id);

        if (cart_item) {
            if (cart_item.quantity > 1) {
                temp_cart.find(item => item.id === id).quantity -= 1;
            } else {
                temp_cart = temp_cart.filter((item) => item.id !== id);
            }
            setCart(temp_cart);
        }
    }

    const isInCart = (id) => {
        return cart.find(item => item.id === id);
    }

    return (
        <CartContext.Provider 
            value={{
                cart,
                addToCart,
                removeFromCart,
                isInCart,
            }}
        >
            { children }
        </CartContext.Provider>
    )
}

export default CartProvider;