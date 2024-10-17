import { NgModule } from '@angular/core'; 
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { RegistrosComponent } from './pages/registros/registros.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { IdeasActivasComponent } from './pages/ideas-activas/ideas-activas.component';
import { RetosActivosComponent } from './pages/retos-activos/retos-activos.component';
import { IdeaNuevaComponent } from './pages/idea-nueva/idea-nueva.component';
import { RetoNuevoComponent } from './pages/reto-nuevo/reto-nuevo.component';
import { IdeaDetailsComponent } from './pages/idea-details/idea-details.component';
import { IdeaRevisionComponent } from './pages/idea-revision/idea-revision.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'registros', component: RegistrosComponent },
  { path: 'agregar', component: AgregarComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'ideas-activas', component: IdeasActivasComponent }, // Ruta para Ideas Activas
  { path: 'retos', component: RetosActivosComponent }, // Ruta para Retos Activos
  { path: 'idea-nueva', component: IdeaNuevaComponent }, // Ruta para Nueva Idea
  { path: 'reto-nuevo', component: RetoNuevoComponent }, // Ruta para Nuevo Reto
  { path: 'idea-details', component: IdeaDetailsComponent },
  { path: 'idea-revision', component: IdeaRevisionComponent },
  { path: 'ideas-activas', component: IdeasActivasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
