import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';


//Importacion de Servicios Necesarios para la Aplicacion
import {MiHttpService} from './servicios/mi-http.service';
import {ApiEmpleadosService} from './servicios/empleados/api-empleados.service';
import {EmpleadosService} from './servicios/empleados/empleados.service';
import {ApiClientesService} from './servicios/clientes/api-clientes.service';
import {ClientesService} from './servicios/clientes/clientes.service';

const MiRuteo = [{path: '' , component: LoginComponent}]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(MiRuteo),
    HttpModule
  ],
  providers: [
    MiHttpService,
    ApiEmpleadosService,
    EmpleadosService,
    ApiClientesService,
    ClientesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
