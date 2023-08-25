import styled from "styled-components";

export const SuccessPageContainer = styled.div`
  max-width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > h1 {
    color: ${(props) => props.theme["yellow-dark"]};
  }

  & > p {
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const OrderInfoAndImageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 7rem;
`;

export const OrderInfo = styled.div`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-radius: 6px 36px;
  background: linear-gradient(
    90deg,
    rgba(219, 172, 44, 1) 0%,
    rgba(128, 71, 248, 1) 100%
  ); /* Apply the gradient border */
`;
