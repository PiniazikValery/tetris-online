import styled from "styled-components";
import { Link } from 'react-router-dom';

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

export const PopupRouteButton = styled(Link)`
    cursor: pointer;
    text-decoration: none;
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
export const PopupButton = styled.div`
    cursor: pointer;
    text-decoration: none;
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

export const WinLose = styled.div`
    color: ${props => props.win ? 'green' : 'red'};
    &::after{
        content: ${props => props.win ? '"You are win"' : '"You are lose"'};
    }
`
