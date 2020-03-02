import styled from "styled-components";

export const PopupBody = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50vh;
    height: 100%;
    background-color: black;
    color: white;
    opacity: 0.7;
`

export const PopupTitle = styled.title`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10%;
    text-align: center;
    font-family: "Courier New", Courier, monospace;
    font-size:50px;
`

export const PopupButton = styled.div`
    cursor: pointer;
    margin-top:25px;
    border-radius:10px;
    padding-top:5px;
    padding-bottom:5px;
    border: 2px solid #555;
    font-size: 25px;
    text-align: center;
    width: 90%;
    border-color: #ddd;
    color: #ddd;
    background: rgba(255, 255, 255, .1);
    &:hover{
        filter: brightness(1.75);
        background: rgba(255, 255, 255, .12);
    }
`
