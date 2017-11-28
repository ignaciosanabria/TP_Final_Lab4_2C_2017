import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {HttpModule} from '@angular/http';
import { MyDatePickerModule } from 'mydatepicker';

import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroClienteComponent } from './componentes/registro-cliente/registro-cliente.component';
import { PrincipalClienteComponent } from './componentes/principal-cliente/principal-cliente.component';
import { PrincipalRecepcionistaComponent } from './componentes/principal-recepcionista/principal-recepcionista.component';
import { PrincipalEncargadoComponent } from './componentes/principal-encargado/principal-encargado.component';
import { PrincipalAdministradorComponent } from './componentes/principal-administrador/principal-administrador.component';
import { LoginInvitadoComponent } from './componentes/login-invitado/login-invitado.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';

//Importacion de Servicios Necesarios para la Aplicacion
import {MiHttpService} from './servicios/mi-http.service';
import {ApiEmpleadosService} from './servicios/empleados/api-empleados.service';
import {EmpleadosService} from './servicios/empleados/empleados.service';
import {ApiClientesService} from './servicios/clientes/api-clientes.service';
import {ClientesService} from './servicios/clientes/clientes.service';
import {ApiInvitadosService} from './servicios/invitados/api-invitados.service';
import {InvitadosService} from './servicios/invitados/invitados.service';
import { CrearEventoComponent } from './componentes/crear-evento/crear-evento.component';
import { MenuClienteComponent } from './componentes/menu-cliente/menu-cliente.component';
import { InicialClienteComponent } from './componentes/inicial-cliente/inicial-cliente.component';
import { EventosClientesComponent } from './componentes/eventos-clientes/eventos-clientes.component';
import { AgregarInvitadosComponent } from './componentes/agregar-invitados/agregar-invitados.component';

const MiRuteo = [
  {path: '' , component: LoginComponent},
  {path: 'LoginInvitado', component : LoginInvitadoComponent},
  {path: 'RegistroCliente', component : RegistroClienteComponent},
  //Estos path necesitan auth - JWT
  {path: 'PrincipalCliente', component : PrincipalClienteComponent,
  children:
  [
    {path : '', component : InicialClienteComponent},
    {path : 'CrearEvento', component : CrearEventoComponent}
  ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroClienteComponent,
    PrincipalClienteComponent,
    PrincipalRecepcionistaComponent,
    PrincipalEncargadoComponent,
    PrincipalAdministradorComponent,
    LoginInvitadoComponent,
    CabeceraComponent,
    CrearEventoComponent,
    MenuClienteComponent,
    InicialClienteComponent,
    EventosClientesComponent,
    AgregarInvitadosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(MiRuteo),
    HttpModule,
    MyDatePickerModule
  ],
  providers: [
    MiHttpService,
    ApiEmpleadosService,
    EmpleadosService,
    ApiClientesService,
    ClientesService,
    ApiInvitadosService,
    InvitadosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
