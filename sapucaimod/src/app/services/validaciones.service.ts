import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidacionesService {
//VALIDACIONES CON EXPRESIONES REGULARES
public nombreCompleto: string ='([a-zA-Z]+) ([a-zA-Z]+)';
public mail          : string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';




  constructor() { /*
//validacion de claves iguales en registro de usuarios
  clavesiguales(campo1: string, campo2:string){
    return(formGroup:AbstractControl): Validators | null => {
    const pass1 = formGroup.get(campo1)?.value;
    const pass2 = formGroup.get(campo2)?.value;
    if(pass1!== pass2){
      formGroup.get(campo2)?.setErrors({});
      return null;
    }else
    formGroup.get(campo2)?.setErrors(null);
    return null;
    }*/







  }
}
