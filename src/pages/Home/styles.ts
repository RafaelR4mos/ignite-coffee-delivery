import styled from "styled-components";

export const HeroSectionContainer = styled.div`
  background-image: url("./hero-background.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 88vh;

  & > div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    min-height: 600px;
    max-width: 85%;
    margin: 0 auto;
  }
`;

export const HeroInfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > p {
    font-size: 20px;
  }
`;

export const HeroImgContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  & > img {
    flex: 0.7;
  }
`;

export const BenefitsContainer = styled.div`
  margin-top: calc(4.625rem - 16px);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5625rem 0;
`;

export const Benefits = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`;

export const BenefitIcon = styled.div<{ bgColor: string }>`
  width: 32px;
  height: 32px;
  border-radius: 50%;

  color: ${(props) => props.theme["white"]};

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme[props.bgColor]};
`;

export const CoffeeListContainer = styled.section`
  padding: 32px 0;
  max-width: 85%;
  margin: 0 auto;
`;

export const CoffeeGalery = styled.div`
  margin-top: 3.375rem;
  display: flex;
  flex-wrap: wrap;
  gap: 40px 32px;
`;
