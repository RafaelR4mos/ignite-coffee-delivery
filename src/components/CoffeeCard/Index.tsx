import { ICoffeeData } from "../../utils/commonInterfaces";

interface CoffeCardProps {
  coffeeData?: ICoffeeData;
}

export function CoffeeCard({ coffeeData }: CoffeCardProps) {
  console.log(coffeeData);
  return (
    <div>
      <h1>Card</h1>
    </div>
  );
}
