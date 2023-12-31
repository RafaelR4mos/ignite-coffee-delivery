import {
  BenefitIcon,
  Benefits,
  BenefitsContainer,
  CoffeeGalery,
  CoffeeListContainer,
  HeroImgContainer,
  HeroInfoContainer,
  HeroSectionContainer,
} from "./styles";
import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import heroImg from "../../assets/hero-img.png";
import { CoffeeCard } from "../../components/CoffeeCard/Index";
import { useContext, useEffect } from "react";
import { CoffeeContext } from "../../context/Coffee";

export function Home() {
  const { coffeeListData, getAllCoffees } = useContext(CoffeeContext);

  useEffect(() => {
    getAllCoffees();
  }, []);

  return (
    <main>
      <HeroSectionContainer>
        <div>
          <HeroInfoContainer>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>

            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>

            <BenefitsContainer>
              <Benefits>
                <BenefitIcon $bgColor="yellow-dark">
                  <ShoppingCart size={16} weight="fill" />
                </BenefitIcon>
                <span>Compra simples e segura</span>
              </Benefits>
              <Benefits>
                <BenefitIcon $bgColor="base-text">
                  <Package size={16} weight="fill" />
                </BenefitIcon>
                <span>Embalagem mantém o café intacto</span>
              </Benefits>

              <Benefits>
                <BenefitIcon $bgColor="yellow">
                  <Timer size={16} weight="fill" />
                </BenefitIcon>
                <span>Entrega rápida e rastreada</span>
              </Benefits>

              <Benefits>
                <BenefitIcon $bgColor="purple">
                  <Coffee size={16} weight="fill" />
                </BenefitIcon>
                <span>O café chega fresquinho até você</span>
              </Benefits>
            </BenefitsContainer>
          </HeroInfoContainer>

          <HeroImgContainer>
            <img
              src={heroImg}
              alt="copo de café estilizado com grão em volta"
            />
          </HeroImgContainer>
        </div>
      </HeroSectionContainer>

      <CoffeeListContainer>
        <h2>Nossos Cafés</h2>

        <CoffeeGalery>
          {coffeeListData ? (
            coffeeListData.map((coffee) => (
              <CoffeeCard coffeeData={coffee} key={coffee.id} />
            ))
          ) : (
            <h2>Nenhum café encontrado</h2>
          )}
        </CoffeeGalery>
      </CoffeeListContainer>
    </main>
  );
}
