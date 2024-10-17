import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { HeaderComponent } from './components/header/header.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { RegistrosComponent } from './pages/registros/registros.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { IdeasActivasComponent } from './pages/ideas-activas/ideas-activas.component';
import { RetosActivosComponent } from './pages/retos-activos/retos-activos.component';
import { IdeaNuevaComponent } from './pages/idea-nueva/idea-nueva.component';
import { RetoNuevoComponent } from './pages/reto-nuevo/reto-nuevo.component';
import { FooterComponent } from './components/footer/footer.component';
import { IdeaDetailsComponent } from './pages/idea-details/idea-details.component';
import { IdeaRevisionComponent } from './pages/idea-revision/idea-revision.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
    InicioComponent,
    RegistrosComponent,
    AgregarComponent,
    PerfilComponent,
    IdeasActivasComponent,
    RetosActivosComponent,
    IdeaNuevaComponent,
    RetoNuevoComponent,
    FooterComponent,
    FooterComponent,
    IdeaDetailsComponent,
    IdeaRevisionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
