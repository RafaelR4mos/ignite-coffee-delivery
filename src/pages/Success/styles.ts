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
  align-items: stretch;
  justify-content: space-between;
  grid-template-columns: 1fr 1fr;
  gap: 7rem;
  max-height: 300px;
`;

export const OrderInfo = styled.div`
  //border styles
  --linear-gradient: linear-gradient(
    to left,
    rgba(128, 71, 248, 1),
    rgba(219, 172, 44, 1)
  );
  --border-width: 1px;
  --border-radius: 6px 36px;

  background: var(--linear-gradient);
  border: 0;
  border-radius: var(--border-radius);

  padding: 2.5rem;
  position: relative;
  z-index: 1;
  align-self: stretch;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  &::before {
    content: "";
    display: block;

    height: calc(100% - calc(var(--border-width) * 2));
    width: calc(100% - calc(var(--border-width) * 2));

    background-color: ${(props) => props.theme.background};
    position: absolute;

    top: var(--border-width);
    left: var(--border-width);

    border-radius: calc(6px - var(--border-width))
      calc(36px - var(--border-width));
    z-index: -1;
  }
`;

export const ImgContainer = styled.div`
  & > img {
    max-height: 18.75rem;
    max-width: 100%;
  }
`;

type iconBgColorProps = "purple" | "yellow" | "yellow-dark";

export const DeliveryInfoRow = styled.div<{ $iconBgColor: iconBgColorProps }>`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  & > span {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme[props.$iconBgColor]};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 4px;

    p {
      color: ${(props) => props.theme["base-text"]};
    }
  }
`;
