import styled from "styled-components";

export default styled.a`
    padding-top: 1rem;
    color: ${({ theme }) => theme.colors.card.home.primary};

    :hover,
    :focus,
    :active {
        color: ${({ theme }) => theme.colors.card.home.primary_hover};
    }
`;
