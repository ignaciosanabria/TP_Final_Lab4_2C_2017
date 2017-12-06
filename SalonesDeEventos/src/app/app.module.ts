import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {JwtModule} from './jwt/jwt.module';
import {HttpModule} from '@angular/http';
import { MyDatePickerModule } from 'mydatepicker';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FileUploadModule } from 'ng2-file-upload/file-upload/file-upload.module';

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
import {ApiMesasService} from './servicios/mesas/api-mesas.service';
import {MesasService} from './servicios/mesas/mesas.service';

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
import { BotonMesasComponent } from './componentes/boton-mesas/boton-mesas.component';
import { MiMesaComponent } from './componentes/mi-mesa/mi-mesa.component';
import { MenuRecepcionistaComponent } from './componentes/menu-recepcionista/menu-recepcionista.component';
import { MenuEncargadoComponent } from './componentes/menu-encargado/menu-encargado.component';
import { MenuAdministradorComponent } from './componentes/menu-administrador/menu-administrador.component';
import { InicialRecepcionistaComponent } from './componentes/inicial-recepcionista/inicial-recepcionista.component';
import { InicialEncargadoComponent } from './componentes/inicial-encargado/inicial-encargado.component';
import { InicialAdministradorComponent } from './componentes/inicial-administrador/inicial-administrador.component';
import { VerEventosRecepcionistaComponent } from './componentes/ver-eventos-recepcionista/ver-eventos-recepcionista.component';
import { VerClientesComponent } from './componentes/ver-clientes/ver-clientes.component';

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
  },
  {
    path: 'PrincipalRecepcionista', component : PrincipalRecepcionistaComponent,
    children : [
      {path : '', component : InicialRecepcionistaComponent},
      {path : 'VerEventos', component : VerEventosRecepcionistaComponent},
      {path : 'VerClientes', component : VerClientesComponent}
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
    BotonMesasComponent,
    MiMesaComponent,
    MenuRecepcionistaComponent,
    MenuEncargadoComponent,
    MenuAdministradorComponent,
    InicialRecepcionistaComponent,
    InicialEncargadoComponent,
    InicialAdministradorComponent,
    VerEventosRecepcionistaComponent,
    VerClientesComponent,
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
    }),
    Ng2SmartTableModule,
    FileUploadModule
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
    ApiSalonesService,
    ApiMesasService,
    MesasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
