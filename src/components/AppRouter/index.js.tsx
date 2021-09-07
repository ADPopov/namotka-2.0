import React from 'react';
import {useTypeSelector} from "../../hooks/useTypeSelector";
import {Redirect, Route, Switch} from "react-router-dom";
import {privateRouters, publicRoutes} from "../../routes";
import {RouteNames} from "../../routes";

const AppRouter = () => {
    const {isAuth} = useTypeSelector(state => state.auth)

    return (
        isAuth ?
            <Switch>
                {privateRouters.map(route =>
                    <Route path={route.path}
                           exact={route.exact}
                           component={route.component}
                           key={route.path}/>)}
                toDo: Make a redirect to an authenticated user
                <Redirect to={'/1'} />
            </Switch>
            :
            <Switch>
                {publicRoutes.map(route =>
                    <Route path={route.path}
                           exact={route.exact}
                           component={route.component}
                           key={route.path}/>)}

                <Redirect to={RouteNames.LOGIN} />
            </Switch>
    )
};

export default AppRouter;