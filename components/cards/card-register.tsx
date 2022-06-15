import styled from "styled-components"

export default styled.a`
    color: ${({ theme }) => theme.colors.card.register.primary};

    :hover,
    :focus,
    :active {
        color: ${({ theme }) => theme.colors.card.register.primary_hover};
    }
`
