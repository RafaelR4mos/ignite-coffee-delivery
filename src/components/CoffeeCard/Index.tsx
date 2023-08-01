import { ICoffeeData } from "../../utils/commonInterfaces";
import { CoffeeCardContainer, CoffeeName, CoffeeTag } from "./styles";

interface CoffeCardProps {
  coffeeData: ICoffeeData;
}

export function CoffeeCard({ coffeeData }: CoffeCardProps) {
  console.log(coffeeData);
  return (
    <CoffeeCardContainer>
      <img src={coffeeData.coffeeImg} alt={coffeeData.name} />
      <div>
        {coffeeData.tags.map((tag) => (
          <CoffeeTag>{tag}</CoffeeTag>
        ))}
      </div>
      <CoffeeName>{coffeeData.name}</CoffeeName>
      <p>{coffeeData.description}</p>
    </CoffeeCardContainer>
  );
}
