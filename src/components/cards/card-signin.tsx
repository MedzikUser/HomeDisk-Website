import styled from "styled-components";
import colors from "../../colors";

export default styled.a`
    color: ${colors.card.signin.primary};

    :hover,
    :focus,
    :active {
        color: ${colors.card.signin.primary_hover};
    }
`;
