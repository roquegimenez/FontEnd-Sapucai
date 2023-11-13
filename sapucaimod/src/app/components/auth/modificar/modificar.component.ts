import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../../services/usuario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError } from 'rxjs/operators';
import { registerForm } from 'interfaces/register-form.intefaces';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css'],
})
export class ModificarComponent implements OnInit {
  usuarioId: number = 0;
  usuarioForm!: FormGroup;
  idSeleccionadoForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private usuarioService: UsuarioService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    // Inicializar el formulario de selección de ID
    this.idSeleccionadoForm = this.formBuilder.group({
      id: ['', Validators.required],
    });

    // Obtener el ID del usuario de la URL
    this.usuarioId = +this.route.snapshot.paramMap.get('id')! || 0;

    // Inicializar el formulario con los datos del usuario
    this.initForm();

    // Cargar los datos del usuario
    this.cargarUsuario();
  }

  private initForm(): void {
    this.usuarioForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: [''],
      // ... otros campos
    });
  }

  private cargarUsuario(): void {
    // Llamada al servicio para obtener los datos del usuario
    this.usuarioService.obtenerUsuarioPorId(this.usuarioId).subscribe(
      (usuario: registerForm) => {
        this.usuarioForm.patchValue(usuario);
      },
      (error: any) => {
        console.error('Error al cargar el usuario:', error);
        // Manejo de errores según tus necesidades
      }
    );
  }

  actualizarId(): void {
    const idSeleccionado = this.idSeleccionadoForm.get('id')?.value;
    if (idSeleccionado) {
      this.usuarioId = +idSeleccionado;
      this.cargarUsuario();
    }
  }

  guardarCambios(): void {
    if (this.usuarioForm.valid) {
      const datosModificados = this.usuarioForm.value;

      // Log the updated data before sending the request
      console.log('Datos a enviar para la actualización:', datosModificados);

      // Llamada al servicio para actualizar el usuario
      this.usuarioService.actualizarUsuario(this.usuarioId, datosModificados).subscribe(
        (respuesta) => {
          console.log('Usuario actualizado correctamente:', respuesta);
          // Redirigir o realizar otras acciones después de la actualización
        },
        (error) => {
          console.error('Error al actualizar el usuario:', error);
          // Manejo de errores según tus necesidades
        }
      );
    } else {
      // El formulario no es válido, realiza acciones necesarias
    }
  }

  }
