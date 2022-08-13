import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { redirectUnauthorizedTo, redirectLoggedInTo, canActivate,} from '@angular/fire/auth-guard';


const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);//ruta al login​

const redirectLoggedInToHome = () => redirectLoggedInTo(['tabs/tab/1']);//ruta al home

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: '',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    ...canActivate(redirectLoggedInToHome)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule),
    ...canActivate(redirectLoggedInToHome)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
