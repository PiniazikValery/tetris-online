import styled from "styled-components";
import { Link } from 'react-router-dom';

export const MenuContainer = styled.div`
    position:absolute;
    left:0; right:0;
    top:0; bottom:0;
    margin:auto;
    max-width:100%;
    max-height:100%;
    overflow:auto;
`

export const MenuTitle = styled.title`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20%;
    text-align: center;
    font-family: "Courier New", Courier, monospace;
    font-size:50px;
`

export const ButtonsContainer = styled.div`
    width: 100%;
    height: 80%;
    display:flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content:space-between;
`

export const MenuButton = styled(Link)`
    align-self: center;
    width: 40%;
    color: black;
    text-decoration: none;
    display: flex;
    align-items:center;
    flex-grow:1;
    cursor: pointer;
`

export const MenuButtonText = styled.div`
    width: 100%;
    text-align: center;
`
