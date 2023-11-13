import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { registerForm } from 'interfaces/register-form.intefaces';
import { LoginForm } from 'interfaces/login-form';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = 'http://localhost:5079/api';

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  crearUsuario(formData: registerForm) {
    return this.http.post(`${this.apiUrl}/Usuario`, formData, this.httpOptions);
  }

  login(formData: LoginForm) {
    return this.http.post(`${this.apiUrl}/Usuario`, formData, this.httpOptions);
  }
  getAllUsuarios() {
    return this.http.get(`${this.apiUrl}/Usuario`);
  }

// usuario.service.ts
eliminarUsuario(id: number): Observable<any> {
  const url = `${this.apiUrl}/Usuario/${id}`;
  return this.http.delete(url);
}

obtenerUsuarioPorId(id: number): Observable<registerForm> {
  const url = `${this.apiUrl}/Usuario/${id}`; // Ajusta la ruta según tu API

  return this.http.get<registerForm>(url);
}

actualizarUsuario(id: number, datos: any): Observable<any> {
  // Lógica para actualizar el usuario y manejo de errores
  return this.http.put<any>(`${this.apiUrl}/usuarios/${id}`, datos).pipe(
    catchError((error: any) => {
      console.error('Error en la actualización del usuario:', error);
      throw error; // Puedes personalizar esto según tus necesidades
    })
  );
}


}

