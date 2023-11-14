import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CompradolarComponent } from './components/auth/compradolar/compradolar.component';
import { IngresarsaldoComponent } from './components/auth/ingresarsaldo/ingresarsaldo.component';
import { SesionComponent } from './components/auth/sesion/sesion.component';
import { ListaComponent } from './components/auth/lista/lista.component';
import { ModificarComponent } from './components/auth/modificar/modificar.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    FooterComponent,
    SobresapucaiComponent,
    FuncionesComponent,
    PromocionesComponent,
    AyudaComponent,
    LoginComponent,
    RegistroComponent,
    QuienessomosComponent,
    DashboardComponent,
    CompradolarComponent,
    IngresarsaldoComponent,
    SesionComponent,
    ListaComponent,
    ModificarComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
