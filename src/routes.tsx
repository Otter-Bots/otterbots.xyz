import { RouteDefinition, useRoutes } from "@solidjs/router";
import { lazy } from "solid-js";

const routeArr: RouteDefinition[] = [
    {
        path: "/",
        component: lazy(() => import("./pages/")),
    }
]
export const Routes = useRoutes(routeArr);