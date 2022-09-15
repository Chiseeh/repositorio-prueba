import { Component, Input } from '@angular/core';
import { Alumno } from 'src/app/modelos/alumno';


@Component({
  selector: 'app-listar-alumno',
  templateUrl: './listar-alumno.component.html',
  styleUrls: ['./listar-alumno.component.scss']
})
export class ListarAlumnoComponent  {

  @Input() public alumnos!: Array<Alumno>;


}
