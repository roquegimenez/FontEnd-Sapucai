import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { NavbarComponent } from './components/inicio/navbar/navbar.component';
import { FooterComponent } from './components/inicio/footer/footer.component';
import { HomeComponent } from './components/inicio/home/home.component';
import { AyudaComponent } from './components/inicio/ayuda/ayuda.component';
import { FuncionesComponent } from './components/inicio/funciones/funciones.component';
import { PromocionesComponent } from './components/inicio/promociones/promociones.component';
import { QuienessomosComponent } from './components/inicio/quienessomos/quienessomos.component';
import { SobresapucaiComponent } from './components/inicio/sobresapucai/sobresapucai.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegistroComponent } from './components/auth/registro/registro.component';
import { DashboardComponent } from './components/shared/dashboard/dashboard.component';
import { CompradolarComponent } from './components/auth/compradolar/compradolar.component';
import { ListaComponent } from './components/auth/lista/lista.component';
import { ModificarComponent } from './components/auth/modificar/modificar.component';



//Rutas de navegacion
const routes: Routes = [
{ path: '', redirectTo: 'home', pathMatch: 'full'},
{ path: 'home', component: HomeComponent},
{ path: 'navbar', component: NavbarComponent},
{ path: 'footer', component: FooterComponent},
{ path: 'ayuda', component: AyudaComponent},
{ path: 'funciones', component: FuncionesComponent},
{ path: 'promociones', component: PromocionesComponent},
{ path: 'quienessomos', component: QuienessomosComponent},
{ path: 'sobresapucai', component: SobresapucaiComponent},
{ path: 'registro', component: RegistroComponent},
{ path: 'login', component: LoginComponent},
{ path: 'dashboard', component: DashboardComponent},
{ path: 'compradolar', component: CompradolarComponent},
{ path: 'lista', component: ListaComponent},
{ path: 'modificar', component: ModificarComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
