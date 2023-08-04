import styled from "styled-components";
import { Counter } from "../CoffeeCard/styles";

export const CoffeeCartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const DeleteBtn = styled(Counter)`
  cursor: pointer;
  text-transform: uppercase;
`;
