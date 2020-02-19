import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { SingleplayerTetris } from '../../pages';

const SingleplayerTetrisRoutes = () => {
    return (
        <Switch>
            <Route path="/singleplayer_tetris" component={SingleplayerTetris} />
        </Switch>
    );
}

export default SingleplayerTetrisRoutes;
