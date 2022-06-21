import styled from "styled-components";

export default styled.div`
    margin: 1rem;
    padding: 1.5rem;
    text-align: left;
    color: inherit;
    text-decoration: none;
    border: 2px solid ${({ theme }) => theme.colors.card.border};
    border-radius: 10px;
    transition: color 0.15s ease, border-color 0.25s ease;
    max-width: 300px;

    :hover,
    :focus,
    :active {
        border-color: ${({ theme }) => theme.colors.card.hover.border};
    }

    h2 {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
    }

    p {
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.5;
    }
`;
