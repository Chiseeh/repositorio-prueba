import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormAlumnoComponent } from './componentes/form-alumno/form-alumno.component';
import { FormSeccionComponent } from './componentes/form-seccion/form-seccion.component';
import { ListarAlumnoComponent } from './componentes/listar-alumno/listar-alumno.component';
import { AlumnoComponent } from './alumno/alumno.component';

@NgModule({
  declarations: [
    AppComponent,
    FormAlumnoComponent,
    FormSeccionComponent,
    ListarAlumnoComponent,
    AlumnoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
