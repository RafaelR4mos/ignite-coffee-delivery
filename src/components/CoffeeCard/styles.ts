import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  border-radius: 6px 36px 6px 36px;
  background-color: ${(props) => props.theme["base-card"]};
  padding: 0 1.25rem 1.25rem;

  & img {
    margin-top: -32px;
  }
`;

export const CoffeeName = styled.strong`
  margin-top: calc(20px - 8px);
  font-size: 20px;
  font-weight: 700;
  font-family: "Baloo 2", sans-serif;
  line-height: 130%;
`;

export const CoffeeTag = styled.span`
  border-radius: 100px;
  padding: 4px 8px;
  background-color: ${(props) => props.theme["yellow-light"]};

  font-size: 12px;
  font-weight: 700;
  color: ${(props) => props.theme["yellow-dark"]};
`;

export const CardFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CoffeePrice = styled.div`
  display: flex;
  align-items: flex-end;
`;
