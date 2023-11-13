import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})



export class MiApiService {
  private apiUrl = 'http://localhost:5079/ClienteUsuario2'; // URL completa de la API
 
  constructor(private http:HttpClient){}
  httpOptions = {
      headers: new HttpHeaders({
          'Access-Control-Allow-Methods':'*',
          'Access-Control-Allow-Headers':'*',
          'Content-Type':  '*/**',
          'Access-Control-Allow-Origin':'*'
      })
    };


  registrarUsuario(formData: object) {
    return this.http.post(this.apiUrl, formData, this.httpOptions);
  }
}