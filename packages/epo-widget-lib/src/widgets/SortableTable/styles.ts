import styled from "styled-components";

export const Table = styled.table`
    border: 1px solid #000000;
    font-size: medium;
    text-align: center;
    border-spacing: 0px;
    & > th, td, thead, thead > tr > th{
        border: 1px solid #000000;
    }

    & > thead {
        background-color: #009FA1;
        font-size: large;
    }
`;

export const HeaderButton = styled.button`
    display: flex;
    align-items: center;
`;
