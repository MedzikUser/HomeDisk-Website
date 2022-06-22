import styled from "styled-components";
import colors from "../../colors";

export default styled.a`
    padding-top: 1rem;
    color: ${colors.card.home.primary};

    :hover,
    :focus,
    :active {
        color: ${colors.card.home.primary_hover};
    }
`;
