import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ValidacionesService } from 'src/app/services/validaciones.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public formRegister = false;

  public loginForm = this.fb.group({
    Email: [localStorage.getItem('email') || '', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    remember: [false]
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private vali: ValidacionesService
  ) {}

  login() {
    if (this.loginForm.valid) {
      const loginData: any = this.loginForm.value; // Convertir a tipo 'any'

      if (this.loginForm.get('remember')?.value) {
        localStorage.setItem('email', this.loginForm.get('Email')?.value || '');
      } else {
        localStorage.removeItem('email');
      }

      this.usuarioService.login(loginData).subscribe(
        (resp) => {
          // Navegar al Dashboard
          this.router.navigateByUrl('/dashboard');
        },
        (err) => {
          // Manejar errores
          console.log('Error inesperado', err);
        }
      );
    }
  }
}
