import React from 'react';
import { MenuContainer, MenuTitle, MenuButton, ButtonsContainer, MenuButtonText } from './styles';

const MainMenu = () => {
    return (
        <MenuContainer>
            <MenuTitle>Tetris</MenuTitle>
            <ButtonsContainer>
                <MenuButton to="/singleplayer_tetris">
                    <MenuButtonText>Play offline</MenuButtonText>
                </MenuButton>
                <MenuButton to="/multiplayer_tetris">
                    <MenuButtonText>Play online</MenuButtonText>
                </MenuButton>
                <MenuButton to="/">
                    <MenuButtonText>Settings</MenuButtonText>
                </MenuButton>
            </ButtonsContainer>
        </MenuContainer>
    );
}

export default MainMenu;
