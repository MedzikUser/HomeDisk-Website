import styled from "styled-components";
import colors from "../../colors";

export default styled.table`
    border: 1px solid;
    width: 80vw;
    border-collapse: collapse;
    text-shadow: 0 0 5px ${colors.user.table.textShadow};

    thead {
        background-color: ${colors.user.table.bg};
        color: ${colors.user.table.color};
        font-size: 1.1em;
    }

    tr,
    td {
        border: 1px solid ${colors.user.table.border};
        padding: 8px;
    }

    td {
        padding: 1px;
        padding-left: 5px;
    }

    td:first-child {
        width: 50%;
    }

    td:last-child {
        width: 20%;
    }
`;
