import { FocoRestService } from './../services/rest/foco-rest.service';
import { CasaRestService } from './../services/rest/casa-rest.service';
import { AuthService } from './../services/rest/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginRouteComponent } from './routes/login-route/login-route.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterRouteComponent } from './routes/register-route/register-route.component';
import { UsuarioRestService } from 'src/services/rest/usuario-rest.service';
import { InicioRouteComponent } from './routes/inicio-route/inicio-route.component';
import { UsuarioInicioRouteComponent } from './routes/usuario-inicio-route/usuario-inicio-route.component';
import { CrearCasaRouteComponent } from './routes/crear-casa-route/crear-casa-route.component';
import { IsLogedIn } from 'src/services/guards/isLogedin';
import { ConfigurarCasaRouteComponent } from './routes/configurar-casa-route/configurar-casa-route.component';
import { LedsRestService } from 'src/services/rest/leds-rest.service';
import { ControlarCasaRouteComponent } from './routes/controlar-casa-route/controlar-casa-route.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginRouteComponent,
    RegisterRouteComponent,
    InicioRouteComponent,
    UsuarioInicioRouteComponent,
    CrearCasaRouteComponent,
    ConfigurarCasaRouteComponent,
    ControlarCasaRouteComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    AuthService,
    UsuarioRestService,
    CasaRestService,
    IsLogedIn,
    LedsRestService,
    FocoRestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
