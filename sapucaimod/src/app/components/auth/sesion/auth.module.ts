import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { authRoutingModule } from './auth.routing';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SesionComponent } from '../sesion/sesion.component';
import { MiApiService } from '../../../services/auth/mi-api.service';



@NgModule({
  declarations: [

    SesionComponent
  ],
  exports:[

  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,


    ],
     providers: [
    MiApiService,
    // Agrega tu servicio aquí
  ],
})
export class AuthModule { }
