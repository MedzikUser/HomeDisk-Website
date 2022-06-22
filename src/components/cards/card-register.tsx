import styled from "styled-components";
import colors from "../../colors";

export default styled.a`
    color: ${colors.card.register.primary};

    :hover,
    :focus,
    :active {
        color: ${colors.card.register.primary_hover};
    }
`;
