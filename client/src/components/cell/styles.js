import styled from "styled-components";

export const CellBody = styled.div`
    width:${100 / 10}%;
    &::after{
        content: '';
        display: block;
        padding-bottom: 100%;
        background-color:${props => props.color};
    }
`
