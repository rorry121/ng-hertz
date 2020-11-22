import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'icon', pathMatch: 'full' },
      {
        path: 'icon',
        loadChildren: () => import('./components/icon/icon.module').then(mod => mod.IconModule)
      },
      {
        path: 'tree',
        loadChildren: () => import('./components/tree/tree.module').then(mod => mod.TreeModule)
      },
      {
        path: 'nav-menu',
        loadChildren: () => import('./components/nav-menu/nav-menu.module').then(mod => mod.NavMenuModule)
      },
      {
        path: 'checkbox',
        loadChildren: () => import('./components/checkbox/checkbox.module').then(mod => mod.CheckboxModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
