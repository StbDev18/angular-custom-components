import { Route, Routes } from '@angular/router';
import { HomePageComponent } from '@pages/home-page/home-page.component';
import { IMenuItem, menuItems } from 'app.menu';

const itemToRoute = (i: IMenuItem): Route => {
    const route: Route = { path: i.route, component: i.component }; // Forma 1
    if (i.subMenu) route.children = i.subMenu?.map((s) => itemToRoute(s));
    return route;
}

export const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'libraries', redirectTo: 'libraries/overview', pathMatch: 'full'},
    {path: 'libraries/ng-select', redirectTo: 'libraries/ng-select/overview', pathMatch: 'full'},
    ...menuItems.map((i) => itemToRoute(i)),
    {path: '**', loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent)},
];
