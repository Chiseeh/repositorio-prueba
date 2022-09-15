import { Component, Output,EventEmitter } from '@angular/core';
import { Alumno } from 'src/app/modelos/alumno';
import { Seccion } from 'src/app/modelos/seccion'

@Component({
  selector: 'app-form-alumno',
  templateUrl: './form-alumno.component.html',
  styleUrls: ['./form-alumno.component.scss']
})
export class FormAlumnoComponent{
    public alumno: Alumno = {
      run: 0,
      dv: 'ej: -k',
      nombre: '',
      apellido: '',
      edad: 0,
      seccion: {
        Nombre_Seccion: '',
        id_Seccion: 0,
      }
    }

    public cambiarRun_Alumno(evento: Event): void{
      const elemento = evento.target as HTMLInputElement;
      this.alumno.run = Number.parseInt(elemento.value) || 0;
    }

    public cambiarDv_Alumno(evento: Event): void{
      const elemento = evento.target as HTMLInputElement;
      this.alumno.dv = elemento.value;
    }

    public cambiarNombre_Alumno(evento: Event): void{
      const elemento = evento.target as HTMLInputElement;
      this.alumno.nombre = elemento.value;
    }

    public cambiarApellido_Alumno(evento: Event): void{
      const elemento = evento.target as HTMLInputElement;
      this.alumno.apellido = elemento.value;
    }

    public cambiarEdad_Alumno(evento: Event): void{
      const elemento = evento.target as HTMLInputElement;
      this.alumno.edad = Number.parseInt(elemento.value) || 0;
    }

    public cambiarSeccion_Alumno(evento: Event): void{
      const elemento = evento.target as HTMLSelectElement;
      this.alumno.seccion = elemento.value as unknown as Seccion;
    }

    @Output() public enviarDatos_Alumno = new EventEmitter<Alumno>();
    public guardarElemento(){
      const dt_alumno: Alumno = {
        ...this.alumno
      }
      this.enviarDatos_Alumno.emit(dt_alumno);
      this.alumno = {
      run:0,
      dv:'',
      nombre:'',
      apellido:'',
      edad:0,
      seccion: {
        Nombre_Seccion: '',
        id_Seccion: 0,
      }

    }
  }

}
