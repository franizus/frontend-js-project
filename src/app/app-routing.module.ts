import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginRouteComponent } from './routes/login-route/login-route.component';
import { RegisterRouteComponent } from './routes/register-route/register-route.component';
import { InicioRouteComponent } from './routes/inicio-route/inicio-route.component';
import { UsuarioInicioRouteComponent } from './routes/usuario-inicio-route/usuario-inicio-route.component';
import { CrearCasaRouteComponent } from './routes/crear-casa-route/crear-casa-route.component';
import { IsLogedIn } from 'src/services/guards/isLogedin';
import { ConfigurarCasaRouteComponent } from './routes/configurar-casa-route/configurar-casa-route.component';
import { ControlarCasaRouteComponent } from './routes/controlar-casa-route/controlar-casa-route.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'inicio'
  },
  {
    path: 'inicio',
    component: InicioRouteComponent
  },
  {
    path: 'login',
    component: LoginRouteComponent
  },
  {
    path: 'register',
    component: RegisterRouteComponent
  },
  {
    path: 'usuario-inicio',
    component: UsuarioInicioRouteComponent,
    canActivate: [IsLogedIn]
  },
  {
    path: 'crear-casa',
    component: CrearCasaRouteComponent,
    canActivate: [IsLogedIn]
  },
  {
    path: 'configurar-casa/:idCasa',
    component: ConfigurarCasaRouteComponent,
    canActivate: [IsLogedIn]
  },
  {
    path: 'controlar-casa/:idCasa',
    component: ControlarCasaRouteComponent,
    canActivate: [IsLogedIn]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
