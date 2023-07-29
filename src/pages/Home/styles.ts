import styled from "styled-components";

export const HeroSectionContainer = styled.div`
    background-image: url("./hero-background.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    margin-top: 3rem;
    padding: 1rem 0;

    & > div {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 3.5rem;
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
`;

export const HeroImgContainer = styled.div`
    flex: 1;
`;

export const BenefitsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5625rem 2.5rem;
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