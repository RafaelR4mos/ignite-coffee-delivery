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
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme["base-button"]};

  & > span {
    color: ${(props) => props.theme["base-subtitle"]};
  }

  & > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  & > img {
    width: 4rem;
  }

  & > strong {
    align-self: flex-start;
    justify-self: flex-end;
    white-space: nowrap;
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const DeleteBtn = styled(Counter)`
  gap: 10px;
  cursor: pointer;
  text-transform: uppercase;

  & > span {
    color: ${(props) => props.theme["base-text"]};
  }
`;
