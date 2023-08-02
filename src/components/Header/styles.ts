import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  position: sticky;
  top: 0;
  justify-content: space-between;
  align-items: center;
  padding: 32px 10%;

  width: 100%;
  height: 12vh;
  margin: 0 auto;
  z-index: 9;
  background-color: ${(props) => props.theme["background"]};

  & > img {
    cursor: pointer;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const ButtonCart = styled.div<{ color: string }>`
  cursor: pointer;

  position: relative;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0.625rem 0.5rem;

  width: fit-content;
  background-color: ${(props) => props.theme[props.color]};
  color: ${(props) =>
    props.color === "purple-light"
      ? props.theme["purple-dark"]
      : props.theme["yellow-dark"]};
`;

export const Counter = styled.div<{ $isShow: boolean }>`
  display: ${(props) => (props.$isShow ? "flex" : "none")};
  align-items: center;
  justify-content: center;

  width: 20px;
  height: 20px;
  border-radius: 50%;
  color: ${(props) => props.theme["white"]};
  font-size: 0.8rem;
  background-color: ${(props) => props.theme["yellow-dark"]};
  font-weight: 700;
  position: absolute;
  top: -10px;
  right: -10px;
`;

export const LocationContainer = styled(ButtonCart)`
  cursor: auto;
`;
