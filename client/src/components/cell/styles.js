import styled from "styled-components";

export const CellBody = styled.div`
    border: solid;
    border-width: 1px;
    box-sizing: border-box;
    background-color: #2d2d2d;
    width:${100 / 10}%;
    &::after{
        content: '';
        display: block;
        padding-bottom: 100%;
        background-color:${props => props.color};
    }
`
