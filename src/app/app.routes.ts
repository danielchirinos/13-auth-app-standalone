import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: "auth",
        //guards
        loadChildren: () => import("./auth/auth.routes").then( r => r.AUTH_ROUTES )
    },
    {
        path: "dashboard",
        //guards
        loadChildren: () => import("./dashboard/dashboard.routes").then( r => r.DASHBOARD_ROUTES )
    },
    {
        path: "**",
        //guards
        redirectTo: "auth"
    }


];
