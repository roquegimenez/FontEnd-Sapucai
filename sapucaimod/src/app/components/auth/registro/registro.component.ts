import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';
import { registerForm } from 'interfaces/register-form.intefaces';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  public formSubmitted = false;
  public registerForm: FormGroup;
  usuario: Usuario = new Usuario(1);

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],

    });
  }

  // No debes declarar nuevoUsuario, nuevoRegistro, o llamar al servicio aquí
  // Estas declaraciones deben estar dentro de métodos o funciones específicas

  crearUsuario() {
    this.formSubmitted = true;
    if (this.registerForm.valid) {
      // Crear un nuevo objeto registerForm y asignar los valores del formulario
      const nuevoRegistro: registerForm = {
        ID_Usuario: undefined,
        Nombre: this.registerForm.get('nombre')?.value,
        Email: this.registerForm.get('email')?.value,
        Password: this.registerForm.get('password')?.value,

      };

      // Enviar los datos del nuevo usuario al servicio
      this.usuarioService.crearUsuario(nuevoRegistro).subscribe({
        next: (resp) => {
          console.log('Usuario registrado con éxito', resp);
          this.router.navigateByUrl('/dashboard');
        },
        error: (error) => {
          console.error('Error al registrar el usuario', error);
          // Puedes mostrar un mensaje de error al usuario si lo deseas
        }
      });
    }
  }
}
