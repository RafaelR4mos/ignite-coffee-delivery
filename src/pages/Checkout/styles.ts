import styled from "styled-components";

export const PageContainer = styled.div`
  max-width: 80%;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 0.6fr 0.4fr;
  gap: 2rem;

  & > div {
    margin-top: 4.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const Subtitle = styled.strong`
  font-family: "Baloo 2", sans-serif;
  font-size: 1.125rem;
  color: ${(props) => props.theme["base-subtitle"]};
  line-height: 130%;
`;

export const AddressForm = styled.form`
  flex: 0.8;
  padding: 2.5rem;
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px;
`;

export const CardTitleContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 2px;

    & h3,
    span {
      font-family: "Roboto", sans-serif;
      font-size: 1rem;
      font-weight: 400;
      line-height: 130%;
      color: ${(props) => props.theme["base-subtitle"]};
    }

    & span {
      color: ${(props) => props.theme["base-text"]};
      font-size: 0.875rem;
    }
  }
`;

export const InputContainer = styled.div`
  margin-top: 2.75rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > div {
    display: flex;
    gap: 0.75rem;
  }
`;

export const Input = styled.input<{ $flex: number }>`
  flex: ${(props) => props.$flex};

  text-align: left;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => props.theme["base-button"]};

  background: ${(props) => props.theme["base-input"]};
  padding: 0.75rem;
  color: ${(props) => props.theme["base-text"]};

  &:focus {
    box-shadow: 0 0 0 1px ${(props) => props.theme["yellow-dark"]};
  }
`;
