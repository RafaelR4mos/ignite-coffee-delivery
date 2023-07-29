import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    max-width: 85%;
    margin: 2rem auto;
`;

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

export const ButtonCart = styled.div<{ color: string; }>`
    cursor: pointer;

    border-radius: 6px;
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 0.625rem 0.5rem;

    width: fit-content;
    background-color: ${(props) => props.theme[props.color]};
    color: ${(props) =>  props.color === "purple-light" ? props.theme["purple-dark"] : props.theme["yellow-dark"]
    };
`;

export const LocationContainer = styled(ButtonCart)`
    cursor: auto;
`;