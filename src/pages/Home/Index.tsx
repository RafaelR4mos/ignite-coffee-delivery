import { BenefitIcon, Benefits, BenefitsContainer, HeroImgContainer, HeroInfoContainer, HeroSectionContainer } from "./styles";
import { Coffee, Package, ShoppingCart, Timer,  } from "@phosphor-icons/react";
import heroImg from "../../assets/hero-img.png"


export function Home() {
  return (
    <main>
      <HeroSectionContainer>
        <div>

        <HeroInfoContainer>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>

        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

        <BenefitsContainer>
          <Benefits>
            <BenefitIcon bgColor="yellow-dark">
            <ShoppingCart size={16} weight="fill"/>
            </BenefitIcon>
            <span>Compra simples e segura</span>
          </Benefits>
          <Benefits>
            <BenefitIcon bgColor="base-text">
            <Package size={16} weight="fill" />
            </BenefitIcon>
            <span>Compra simples e segura</span>
          </Benefits>

          <Benefits>
            <BenefitIcon bgColor="yellow">
            <Timer size={16} weight="fill" />
            </BenefitIcon>
            <span>Compra simples e segura</span>
          </Benefits>
          
          <Benefits>
            <BenefitIcon bgColor="purple">
            <Coffee size={16} weight="fill" />
            </BenefitIcon>
            <span>Compra simples e segura</span>
          </Benefits>
        </BenefitsContainer>
        </HeroInfoContainer>

        <HeroImgContainer>
          <img src={heroImg} alt="copo de café estilizado com grão em volta" />
        </HeroImgContainer>

        </div>
      </HeroSectionContainer>
    </main>
  );
}
