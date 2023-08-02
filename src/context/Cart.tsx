import { createContext, useState } from "react";
import { IChildren, ICoffeeData } from "../utils/commonInterfaces";

interface ICartList extends ICoffeeData {
  quantity: number;
}

interface ICartContext {
  cartList: ICartList[] | [];
  itemsQuantityInCart: number;
  addItemToCart: (coffeeToAdd: ICartList) => void;
}

export const CartContext = createContext({} as ICartContext);

export function CartProvider({ children }: IChildren) {
  const [cartList, setCartList] = useState<ICartList[] | []>([]);
  const itemsQuantityInCart = cartList.length ? cartList.length : 0;

  function addItemToCart(coffeeToAdd: ICartList) {
    const coffeeAlreadyInCart = cartList.some(
      (item) => item.id === coffeeToAdd.id
    );

    if (coffeeAlreadyInCart) {
      setCartList((state) =>
        state.map((coffee) =>
          coffee.id === coffeeToAdd.id
            ? { ...coffee, quantity: coffeeToAdd.quantity }
            : coffee
        )
      );
      return;
    }

    setCartList((state) => [...state, coffeeToAdd]);
  }

  console.log(cartList);
  return (
    <CartContext.Provider
      value={{ cartList, itemsQuantityInCart, addItemToCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
