import React from 'react';
import MainMenuRoutes from './main_menu_routes';
import SingleplayerTetrisRoutes from './singleplayer_tetris_routes';

const Routes = () => {
    return (
        <React.Fragment>
            <MainMenuRoutes />
            <SingleplayerTetrisRoutes />
        </React.Fragment>
    )
}

export default Routes;
