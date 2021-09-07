import React from "react";
import Login from "../pages/Login";
import Blog from "../pages/Blog";

export interface IRoute {
    path: RouteNames;
    component: React.ComponentType
    exact?: boolean
}

export enum RouteNames {
    LOGIN = '/login',
    BLOG_BY_ID = '/:userId(\\d+)',
    CREATE_POST = '/create',
    EDIT_POST = '/edit/:postId'
}

export const publicRoutes: IRoute[] = [
    {
        path: RouteNames.LOGIN,
        component: Login,
        exact: true
    }
]

export const privateRouters: IRoute[] = [
    {
        path: RouteNames.BLOG_BY_ID,
        component: Blog,
        exact: true
    },
    {
        path: RouteNames.CREATE_POST,
        component: Blog,
        exact: true
    },
    {
        path: RouteNames.EDIT_POST,
        component: Blog,
        exact: true
    }
]
