import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'start', pathMatch: 'full' },
  { path: 'login', loadChildren: './users/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './users/register/register.module#RegisterPageModule' },
  { path: 'app-container', loadChildren: './app-container/app-container.module#AppContainerPageModule' },
  { path: 'start', loadChildren: './users/start/start.module#StartPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
