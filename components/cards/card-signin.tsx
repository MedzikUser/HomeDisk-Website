import styled from "styled-components"

export default styled.a`
    color: ${({ theme }) => theme.colors.card.signin.primary};

    :hover,
    :focus,
    :active {
        color: ${({ theme }) => theme.colors.card.signin.primary_hover};
    }
`
