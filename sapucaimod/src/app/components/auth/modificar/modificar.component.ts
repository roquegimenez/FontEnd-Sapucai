// modificar.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../../services/usuario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../../../models/usuario.model';
import { registerForm } from 'interfaces/register-form.intefaces';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css'],
})
export class ModificarComponent implements OnInit {
  usuarioId: number = 0;
  usuarioForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private usuarioService: UsuarioService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.usuarioForm = this.formBuilder.group({
      id: [null, Validators.required], // Deja este campo en blanco
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: [''],
      // Otros campos del usuario
    });
  }

  cargarUsuario(): void {
    const idIngresado = this.usuarioForm.get('id')?.value;
    if (idIngresado) {
      this.usuarioService.obtenerUsuarioPorId(idIngresado).subscribe(
        (usuario: registerForm) => {
          this.usuarioForm.patchValue(usuario);
        },
        (error: any) => {
          console.error('Error al cargar el usuario:', error);
        }
      );
    }
  }

  guardarCambios(): void {
    if (this.usuarioForm.valid) {
      const datosModificados = this.usuarioForm.value;

      // Crear un nuevo objeto Usuario con las propiedades necesarias
      const usuarioConvertido: Usuario = {
        ID_Usuario: datosModificados.id || 0,
        Nombre: datosModificados.nombre || '',
        Email: datosModificados.email || '',
        Password: datosModificados.password || '',
        // Otros campos del usuario
      };

      this.usuarioService.actualizarUsuario(usuarioConvertido.ID_Usuario, usuarioConvertido).subscribe(
        (respuesta) => {
          console.log('Usuario actualizado correctamente:', respuesta);
          // Puedes redirigir o realizar otras acciones después de la actualización
        },
        (error) => {
          console.error('Error al actualizar el usuario:', error);
        }
      );
    } else {
      console.log('El formulario no es válido');
    }
  }
}
