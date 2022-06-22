import styled from "styled-components";
import colors from "../colors";

export default styled.div`
    background-color: ${colors.background};
    color: ${({ theme }) => theme.colors.primary};
    height: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
`;
