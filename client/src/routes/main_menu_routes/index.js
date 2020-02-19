import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { MainMenu } from '../../pages';

const MainMenuRoutes = () => {
    return (
        <Switch>
            <Route path="/main_menu" component={MainMenu} />
            <Route exact path="/">
                <Redirect to="/main_menu" />
            </Route>
        </Switch>
    )
};

export default MainMenuRoutes;
