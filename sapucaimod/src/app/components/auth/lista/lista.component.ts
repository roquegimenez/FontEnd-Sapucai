// lista-usuarios.component.ts
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  usuarios: any[] = []; // Asegúrate de definir el tipo correcto para tus usuarios

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.usuarioService.getAllUsuarios().subscribe(
      (data: any) => {
        console.log('Datos recibidos:', data);
        this.usuarios = data;
      },
      (error) => {
        console.error('Error al cargar usuarios:', error);
      }
    );
  }


// lista-usuarios.component.ts
borrarUsuario(id: number | undefined) {
  console.log('ID a eliminar:', id);

  if (id === undefined) {
    console.error('ID no definido');
    return;
  }

  if (confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
    this.usuarioService.eliminarUsuario(id).subscribe(
      () => {
        console.log('Usuario eliminado con éxito');
        this.cargarUsuarios(); // Actualizar la lista después de la eliminación
      },
      (error) => {
        console.error('Error al eliminar el usuario:', error);
      }
    );
  }
}



}
