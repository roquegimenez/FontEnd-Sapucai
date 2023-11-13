import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { FormBuilder } from '@angular/forms';
import { RegisterForm } from 'interfaces/register-form.intefaces';
import {LoginForm} from 'interfaces/login-form'

import { Usuario } from '../models/usuario.model';
import { environment } from 'src/environments/environment';

const base_url=environment.base_url;
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient){}
  httpOptions = {
      headers: new HttpHeaders({
          'Access-Control-Allow-Methods':'DELETE, POST, GET, OPTIONS',
          'Access-Control-Allow-Headers':'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
          'Content-Type':  'application/json',
          'Access-Control-Allow-Origin':'http://localhost:5079, http://localhost:4200,*'
      })
    };

 crearUsuario( formData: RegisterForm) {

return this.http.post(`${ base_url}/v1/Authentication/Register`,
                         formData,
                         this.httpOptions);

 }
 login( formData: LoginForm ) {

  return this.http.post(`${ base_url }/Autenticacion`, formData )

  }
}
