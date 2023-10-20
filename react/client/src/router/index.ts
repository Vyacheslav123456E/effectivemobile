import React from "react";
import {RouteNames} from "./names";
import History from '../views/histories/History';

export interface IRoute {
    path: string;
    component: React.ComponentType;
    exact?: boolean;
}

export const publicRoutes: IRoute[] = [
    {path: RouteNames.HISTORY, exact: true, component: History},

]