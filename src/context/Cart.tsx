import { createContext, useState } from "react";
import { IChildren, ICoffeeData } from "../utils/commonInterfaces";
import { useNavigate } from "react-router-dom";
import { ICoffeeOrder } from "../pages/Checkout/Index";

export interface ICartList extends ICoffeeData {
  quantity: number;
}

interface ICartContext {
  cartList: ICartList[] | [];
  itemsQuantityInCart: number;
  deliveryPrice: string;
  totalItensPrice: string;
  totalFinalPrice: string;
  coffeeOrder: ICoffeeOrder | null;
  addItemToCart: (coffeeToAdd: ICartList) => void;
  removeItemToCart: (coffeId: number) => void;
  changeCoffeeQuantity: (coffeeId: number, quantity: number) => void;
  finishCoffeeOrder: (coffeeOrderData: ICoffeeOrder) => void;
}

export const CartContext = createContext({} as ICartContext);

export function CartProvider({ children }: IChildren) {
  const [cartList, setCartList] = useState<ICartList[] | []>([]);
  const [coffeeOrder, setCoffeeOrder] = useState<ICoffeeOrder | null>(null);
  const itemsQuantityInCart = cartList.length ? cartList.length : 0;
  const navigate = useNavigate();

  const deliveryPrice = (3.5).toFixed(2);
  const totalItensPrice = cartList
    .map((item) => item.price * item.quantity)
    .reduce((acc, item) => acc + item, 0)
    .toFixed(2);
  const totalFinalPrice = (
    Number(totalItensPrice) + Number(deliveryPrice)
  ).toFixed(2);

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

  function removeItemToCart(coffeId: number) {
    setCartList((state) => state.filter((coffee) => coffee.id !== coffeId));
  }

  function changeCoffeeQuantity(coffeeId: number, quantity: number) {
    setCartList((state) =>
      state.map((coffee) =>
        coffee.id === coffeeId ? { ...coffee, quantity: quantity } : coffee
      )
    );
  }

  function finishCoffeeOrder(coffeeOrderData: ICoffeeOrder) {
    setCoffeeOrder(coffeeOrderData);
    navigate("/success");
  }

  console.log(cartList);

  return (
    <CartContext.Provider
      value={{
        cartList,
        itemsQuantityInCart,
        totalItensPrice,
        totalFinalPrice,
        deliveryPrice,
        coffeeOrder,
        addItemToCart,
        removeItemToCart,
        changeCoffeeQuantity,
        finishCoffeeOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
