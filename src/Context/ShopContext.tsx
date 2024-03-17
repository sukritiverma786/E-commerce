import React, { createContext, PropsWithChildren, useState } from "react";
import all_product from "../component/Assests/all_products";

export const ShopContext = createContext<any | null>(null);

const getDefaultCart = (): { [key: number]: number } => {
  let cart: { [key: number]: number } = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider: React.FC<PropsWithChildren<{}>> = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart);

  const addtoCart = (itemId: number) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log(cartItems);
  };

  const removeFromCart = (itemId: number) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  // const getTotalCartAmount = ()=>{
  //   let totalAmount=0;
  //   for(const item in cartItems){
  //     if(cartItems[item]>0){
  //       let itemInfo = all_product.find((product)=>product.id===Number(item))
  //       totalAmount +=itemInfo.new_price*cartItems[item];
  //     }
  //     return totalAmount;
  //   }
  // }
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        if (itemInfo) {
          totalAmount += itemInfo.new_price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const contextValue = {
    getTotalCartAmount,
    getTotalCartItems,
    all_product,
    cartItems,
    addtoCart,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
