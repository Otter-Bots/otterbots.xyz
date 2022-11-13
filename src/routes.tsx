import { RouteDefinition, useRoutes } from "@solidjs/router";
import { lazy } from "solid-js";

const routeArr: RouteDefinition[] = [
    {
        path: "/",
        component: lazy(() => import("./pages/")),
    },
    {
        path: "/errors/404",
        component: lazy(() => import("./pages/errors/404")),
    },
    {
        path: "*",
        component: lazy(() => import("./pages/errors/404")),
    }
]
export const Routes = useRoutes(routeArr);