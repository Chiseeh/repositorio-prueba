import { Component, Output, EventEmitter } from '@angular/core';
import { Seccion } from './../../modelos/seccion'

@Component({
  selector: 'app-form-seccion',
  templateUrl: './form-seccion.component.html',
  styleUrls: ['./form-seccion.component.scss']
})
export class FormSeccionComponent{
  public seccion: Seccion = {
    Nombre_Seccion:'',
    id_Seccion:0,

  }
  public cambiarNombre_Seccion(evento: Event): void{
    const elemento = evento.target as HTMLInputElement;
    this.seccion.Nombre_Seccion = elemento.value;
  }

  public cambiarId_Seccion(evento: Event): void{
    const elemento = evento.target as HTMLInputElement;
    this.seccion.id_Seccion = Number.parseInt(elemento.value) || 0;
  }

  @Output() public EnviarSeccion = new EventEmitter<Seccion>();
  public guardarElemento(){
    const datos_seccion: Seccion = {
      ...this.seccion
    }
    this.EnviarSeccion.emit(datos_seccion);
    this.seccion = {
      Nombre_Seccion:'',
      id_Seccion:0,
    }
  }

}
