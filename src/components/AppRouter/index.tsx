import React, {useEffect} from 'react';
import {useTypeSelector} from "../../hooks/useTypeSelector";
import {Redirect, Route, Switch} from "react-router-dom";
import {privateRouters, publicRoutes, RouteNames} from "../../routes";
import {useAction} from "../../hooks/useAction";

const AppRouter = () => {
    const {isAuth} = useTypeSelector(state => state.auth);
    const {session} = useAction();

    useEffect(() => {
        session()
    }, [])

    return (
        isAuth ?
            <Switch>
                {privateRouters.map(route =>
                <Route path={route.path}
                       exact={route.exact}
                       component={route.component}
                       key={route.path}/>)}
                <Redirect to={RouteNames.FEED}/>
            </Switch>
            :
            <Switch>
                {publicRoutes.map(route =>
                <Route path={route.path}
                       exact={route.exact}
                       component={route.component}
                       key={route.path}/>)}
                <Redirect to={RouteNames.LOGIN}/>
            </Switch>
    )
};

export default AppRouter;