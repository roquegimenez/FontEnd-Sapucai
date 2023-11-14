import { Component } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  UsuarioArray : any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;

  nombre: string ="";
  email: string="";
  password: string="";

}
