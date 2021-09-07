import React from "react";
import App from "../App";

export interface IRoute {
    path: string;
    component: React.ComponentType
    exact?: boolean
}

export const PublicRoutes : IRoute[] = [
    {
        path: '/',
        component: App
    }
]
