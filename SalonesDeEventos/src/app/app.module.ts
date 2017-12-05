import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {JwtModule} from './jwt/jwt.module';
import {HttpModule} from '@angular/http';
import { MyDatePickerModule } from 'mydatepicker';

//Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroClienteComponent } from './componentes/registro-cliente/registro-cliente.component';
import { PrincipalClienteComponent } from './componentes/principal-cliente/principal-cliente.component';
import { PrincipalRecepcionistaComponent } from './componentes/principal-recepcionista/principal-recepcionista.component';
import { PrincipalEncargadoComponent } from './componentes/principal-encargado/principal-encargado.component';
import { PrincipalAdministradorComponent } from './componentes/principal-administrador/principal-administrador.component';
import { LoginInvitadoComponent } from './componentes/login-invitado/login-invitado.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { CrearEventoComponent } from './componentes/crear-evento/crear-evento.component';
import { MenuClienteComponent } from './componentes/menu-cliente/menu-cliente.component';
import { InicialClienteComponent } from './componentes/inicial-cliente/inicial-cliente.component';
import { EventosClientesComponent } from './componentes/eventos-clientes/eventos-clientes.component';
import { AgregarInvitadosComponent } from './componentes/agregar-invitados/agregar-invitados.component';
import { ErrorComponent } from './componentes/error/error.component';

//Importacion de Servicios Necesarios para la Aplicacion
import {MiHttpService} from './servicios/mi-http.service';
import {ApiEmpleadosService} from './servicios/empleados/api-empleados.service';
import {EmpleadosService} from './servicios/empleados/empleados.service';
import {ApiClientesService} from './servicios/clientes/api-clientes.service';
import {ClientesService} from './servicios/clientes/clientes.service';
import {ApiInvitadosService} from './servicios/invitados/api-invitados.service';
import {InvitadosService} from './servicios/invitados/invitados.service';
import {EventosApiService} from './servicios/eventos/eventos-api.service';
import {EventosService} from './servicios/eventos/eventos.service';
import {ApiSalonesService} from './servicios/salones/api-salones.service';
import {SalonesService} from './servicios/salones/salones.service';
import {AutService} from './servicios/aut.service';
import {VerificarJWTService} from './servicios/verificar-jwt.service';

//PIPES
import { EstadoPipe } from './pipes/estado.pipe';
import { ReservadoPipe } from './pipes/reservado.pipe';
import { PrincipalInvitadoComponent } from './componentes/principal-invitado/principal-invitado.component';
import { MenuInvitadoComponent } from './componentes/menu-invitado/menu-invitado.component';
import { InicialInvitadoComponent } from './componentes/inicial-invitado/inicial-invitado.component';
import { DireccionesComponent } from './componentes/direcciones/direcciones.component';

//Angular Google Maps

import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { GoogleMapDirective } from './directivas/google-map.directive';

const MiRuteo = [
  {path: '' , component: LoginComponent},
  {path: 'LoginInvitado', component : LoginInvitadoComponent},
  {path: 'RegistroCliente', component : RegistroClienteComponent},
  //Estos path necesitan auth - JWT
  {path: 'PrincipalCliente', component : PrincipalClienteComponent,
  children:
  [
    {path : '', component : InicialClienteComponent},
    {path : 'CrearEvento', component : CrearEventoComponent},
    {path : 'EventosCliente', component : EventosClientesComponent}
  ]
  },
  {
    path: 'PrincipalInvitado', component : PrincipalInvitadoComponent,
    children: [
      { path : '', component : InicialInvitadoComponent},
      {path : 'Direcciones', component : DireccionesComponent}
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
    AgregarInvitadosComponent,
    EstadoPipe,
    ReservadoPipe,
    ErrorComponent,
    PrincipalInvitadoComponent,
    InicialInvitadoComponent,
    MenuInvitadoComponent,
    DireccionesComponent,
    GoogleMapDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(MiRuteo),
    HttpModule,
    MyDatePickerModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCiuFtiKAvJqz4jT503V7P5swXAhtJqu3c'
    })
  ],
  providers: [
    MiHttpService,
    ApiEmpleadosService,
    EmpleadosService,
    ApiClientesService,
    ClientesService,
    ApiInvitadosService,
    InvitadosService,
    EventosApiService,
    EventosService,
    AutService,
    VerificarJWTService,
    SalonesService,
    ApiSalonesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
