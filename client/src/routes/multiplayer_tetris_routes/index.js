import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { MultiplayerTetris } from '../../pages';

const MultiplayerTetrisRoutes = () => {
    return (
        <Switch>
            <Route path="/multiplayer_tetris" component={MultiplayerTetris} />
        </Switch>
    );
}

export default MultiplayerTetrisRoutes;
