
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../../shared/dashboard/dashboard.component';
import { LoginComponent } from '../login/login.component';
import { RegistroComponent } from '../registro/registro.component';




const routes: Routes = [

  { path: 'Registro', component: RegistroComponent },
   { path: 'dashboard', component: DashboardComponent },
];


@NgModule({
    imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})/*
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
  })*/
  export class authRoutingModule { }
