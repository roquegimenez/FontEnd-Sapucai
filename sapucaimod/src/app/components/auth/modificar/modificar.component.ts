import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(
    private route: ActivatedRoute,
    private usuarioService: UsuarioService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.usuarioForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: [''],
      // ... otros campos
    });

    this.usuarioId = +this.route.snapshot.paramMap.get('id')! || 0;

    if (this.usuarioId > 0) {
      this.cargarUsuario();
    }
  }

  private cargarUsuario(): void {
    this.usuarioService.obtenerUsuarioPorId(this.usuarioId).subscribe(
      (usuario: registerForm) => {
        this.usuarioForm.patchValue(usuario);
      },
      (error: any) => {
        if (error.status === 404) {
          console.error('Usuario no encontrado');
          // Puedes redirigir a una página de error o realizar otra acción
        } else {
          console.error('Error al cargar el usuario:', error);
        }
      }
    );
  }

  actualizarId(): void {
    const idSeleccionado = this.usuarioForm.get('id')?.value;
    if (idSeleccionado) {
      this.usuarioId = +idSeleccionado;
      this.cargarUsuario();
    }
  }

  guardarCambios(): void {
    if (this.usuarioForm.valid) {
      const datosModificados = this.usuarioForm.value;

      console.log('Datos a enviar para la actualización:', datosModificados);

      this.usuarioService.actualizarUsuario(this.usuarioId, datosModificados).subscribe(
        (respuesta) => {
          console.log('Usuario actualizado correctamente:', respuesta);
          // Redirigir o realizar otras acciones después de la actualización
          this.router.navigate(['/lista-usuarios']); // Cambia la ruta según tu estructura
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
