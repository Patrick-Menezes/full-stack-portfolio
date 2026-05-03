import { Routes } from '@angular/router';
import path from 'path';

export const routes: Routes = [
{path:"", loadComponent: () => import('./components/page/page').then(m => m.Page)
},
{path:"minishop", loadComponent: () => import('./projects/minishop/minishop').then(m => m.Minishop)}



];
