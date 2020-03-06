import styled from "styled-components";

export const AreasHolder = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: gray;
`

export const LeftPanel = styled.div`
    color: white;
    text-align: center;
    width: 30%;
    &::after{
        content:''
    }
`

export const RightPanel = styled.div`
    color: white;
    text-align: center;
    width: 30%;
    &::after{
        content:''
    }
`
