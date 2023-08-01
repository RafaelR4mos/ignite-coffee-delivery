import { createContext, useState } from "react";
import { IChildren, ICoffeeData } from "../utils/commonInterfaces";

interface ICoffeeContext {
  getAllCoffees: () => void;
  coffeeListData: ICoffeeData[] | null;
}

export const CoffeeContext = createContext({} as ICoffeeContext);

export function CoffeeProvider({ children }: IChildren) {
  const [coffeeListData, setCoffeeListData] = useState<ICoffeeData[] | null>(
    null
  );

  async function getAllCoffees() {
    try {
      const response = await fetch("../data.json");

      if (response.ok) {
        const data = await response.json();
        setCoffeeListData(data.coffees);
      } else {
        throw new Error("Algo deu errado! :(");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <CoffeeContext.Provider value={{ coffeeListData, getAllCoffees }}>
      {children}
    </CoffeeContext.Provider>
  );
}
