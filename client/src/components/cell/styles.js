import styled from "styled-components";

export const CellBody = styled.div`
    outline: auto;
    background-color: #2d2d2d;
    width:${100 / 10}%;
    &::after{
        content: '';
        display: block;
        padding-bottom: 100%;
        background-color:${props => props.color};
    }
`
