import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  border-radius: 6px 36px 6px 36px;
  background-color: ${(props) => props.theme["base-card"]};
  padding: 0 1.25rem 1.25rem;
  text-align: center;
  max-width: 256px;
  width: 100%;

  & img {
    margin-top: -32px;
  }

  & p {
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-label"]};
  }
`;

export const CoffeeTagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
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
  margin-top: calc(32px - 0.5rem);

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  .icon {
    &:hover {
      color: ${(props) => props.theme["purple-dark"]};
    }
  }
`;

export const CoffeeActionsContainer = styled.div`
  display: flex;
  align-items: stretch;
  gap: 0.5rem;
`;

export const CoffeePrice = styled.div`
  display: flex;
  align-items: flex-end;
  font-family: "Baloo 2", sans-serif;

  & strong {
    font-weight: 800;
    font-size: 24px;
  }
`;

export const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  min-width: 5rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme["base-button"]};

  color: ${(props) => props.theme["purple"]};

  & span {
    color: ${(props) => props.theme["base-title"]};
  }
`;

export const AddCartBtn = styled.button`
  background-color: ${(props) => props.theme["purple-dark"]};
  color: ${(props) => props.theme["white"]};
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 6px;
  padding: 0.5rem;

  &:focus {
    box-shadow: none;
    outline: 0;
  }
`;
