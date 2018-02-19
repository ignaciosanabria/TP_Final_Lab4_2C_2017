//Modulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {JwtModule} from './jwt/jwt.module';
import {HttpModule} from '@angular/http';
import { MyDatePickerModule } from 'mydatepicker';
import { Ng2SmartTableModule } from 'ng2-smart-table';
// import { FileUploadModule } from 'ng2-file-upload/file-upload/file-upload.module';
import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import {RuteandoModule} from './ruteando/ruteando.module';
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import {CaptchaModule} from 'primeng/captcha';
import {GrowlModule} from 'primeng/components/growl/growl';
import {TabMenuModule} from 'primeng/tabmenu';
import {MenuItem} from 'primeng/api';
import {MatTableModule} from '@angular/material/table';
import {CalendarModule} from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DataListModule} from 'primeng/datalist';
import {FileUploadModule} from 'primeng/fileupload';
import {GalleriaModule} from 'primeng/galleria';
import {DialogModule} from 'primeng/dialog';
import {TableModule} from 'primeng/table';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';//Servicio de Confirm
import {DropdownModule} from 'primeng/dropdown';
import {RadioButtonModule} from 'primeng/radiobutton';
import {SelectButtonModule} from 'primeng/selectbutton';


//Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroClienteComponent } from './componentes/registro-cliente/registro-cliente.component';
import { PrincipalClienteComponent } from './componentes/principal-cliente/principal-cliente.component';
import { PrincipalRecepcionistaComponent } from './componentes/principal-recepcionista/principal-recepcionista.component';
import { PrincipalEncargadoComponent } from './componentes/principal-encargado/principal-encargado.component';
import { PrincipalAdministradorComponent } from './componentes/principal-administrador/principal-administrador.component';
import { CrearEventoComponent } from './componentes/crear-evento/crear-evento.component';
import { MenuClienteComponent } from './componentes/menu-cliente/menu-cliente.component';
import { InicialClienteComponent } from './componentes/inicial-cliente/inicial-cliente.component';
import { EventosClientesComponent } from './componentes/eventos-clientes/eventos-clientes.component';
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
import { VerEstadisticasComponent } from './componentes/ver-estadisticas/ver-estadisticas.component';
import { VerEventosEncargadoComponent } from './componentes/ver-eventos-encargado/ver-eventos-encargado.component';
import { VerInvitadosRegistradosComponent } from './componentes/ver-invitados-registrados/ver-invitados-registrados.component';
import { EncuestaComponent } from './componentes/encuesta/encuesta.component';
import { VerEventoHoyEmpleadoComponent } from './componentes/ver-evento-hoy-empleado/ver-evento-hoy-empleado.component';
import { MiMesaEmpleadoComponent } from './componentes/mi-mesa-empleado/mi-mesa-empleado.component';
import { LoginEmpleadoComponent } from './componentes/login-empleado/login-empleado.component';
import { MisDatosEmpleadoComponent } from './componentes/mis-datos-empleado/mis-datos-empleado.component';
import { MisDatosClienteComponent } from './componentes/mis-datos-cliente/mis-datos-cliente.component';
import { SubirFotosClienteComponent } from './componentes/subir-fotos-cliente/subir-fotos-cliente.component';
import { EditarDatosClienteComponent } from './componentes/editar-datos-cliente/editar-datos-cliente.component';
import { EditarDatosEmpleadoComponent } from './componentes/editar-datos-empleado/editar-datos-empleado.component';

// const MiRuteo = [
//   {path: '' , component: LoginComponent},
//   {path: 'LoginInvitado', component : LoginInvitadoComponent},
//   {path: 'RegistroCliente', component : RegistroClienteComponent},
//   {path: 'Error', component : ErrorComponent},
//   //Estos path necesitan auth - JWT
//   {path: 'PrincipalCliente', component : PrincipalClienteComponent,
//   canActivate: [VerificarJWTService],
//   children:
//   [
//     {path : '', component : InicialClienteComponent},
//     {path : 'CrearEvento', component : CrearEventoComponent},
//     {path : 'EventosCliente', component : EventosClientesComponent}
//   ]
//   },
//   {
//     path: 'PrincipalInvitado', component : PrincipalInvitadoComponent,
//     canActivate: [VerificarJWTService],
//     children: [
//       { path : '', component : InicialInvitadoComponent},
//       {path : 'Direcciones', component : DireccionesComponent}
//     ]
//   },
//   {
//     path: 'PrincipalRecepcionista', component : PrincipalRecepcionistaComponent,
//     canActivate: [VerificarJWTService],
//     children : [
//       {path : '', component : InicialRecepcionistaComponent},
//       {path : 'VerEventos', component : VerEventosRecepcionistaComponent},
//       {path : 'VerClientes', component : VerClientesComponent}
//     ]
//   },
//   {path: 'PrincipalEncargado', component : PrincipalEncargadoComponent,
//   canActivate: [VerificarJWTService],
//   children : [
//     {path : '', component : InicialEncargadoComponent},
//     {path : 'VerEventos', component : VerEventosEncargadoComponent},
//     {path : 'VerClientes', component : VerClientesComponent},
//     {path : 'VerEstadisticas', component : VerEstadisticasComponent}
//   ]
//    },
//    {path: 'PrincipalAdministrador', component : PrincipalAdministradorComponent,
//    canActivate : [VerificarJWTService],
//    children : [
//      {path: '', component : InicialAdministradorComponent},
//      {path : 'VerEventos', component : VerEventosEncargadoComponent},
//      {path : 'VerClientes', component : VerClientesComponent},
//      {path : 'VerEstadisticas', component : VerEstadisticasComponent},
//      {path: 'VerInvitados', component : VerInvitadosRegistradosComponent}
//    ]
//    }
// ]

declare var require: any;
export function highchartsFactory() {
  return require('highcharts');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroClienteComponent,
    PrincipalClienteComponent,
    PrincipalRecepcionistaComponent,
    PrincipalEncargadoComponent,
    PrincipalAdministradorComponent,
    CrearEventoComponent,
    MenuClienteComponent,
    InicialClienteComponent,
    EventosClientesComponent,
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
    VerEstadisticasComponent,
    VerEventosEncargadoComponent,
    VerInvitadosRegistradosComponent,
    EncuestaComponent,
    VerEventoHoyEmpleadoComponent,
    MiMesaEmpleadoComponent,
    LoginEmpleadoComponent,
    MisDatosEmpleadoComponent,
    MisDatosClienteComponent,
    SubirFotosClienteComponent,
    EditarDatosClienteComponent,
    EditarDatosEmpleadoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MyDatePickerModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCiuFtiKAvJqz4jT503V7P5swXAhtJqu3c'
    }),
    Ng2SmartTableModule,
    FileUploadModule,
    ChartModule,
    RuteandoModule,
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule,
    CaptchaModule,
    GrowlModule,
    TabMenuModule,
    MatTableModule,
    CalendarModule,
    BrowserAnimationsModule,
    DataListModule,
    FileUploadModule,
    GalleriaModule,
    DialogModule,
    TableModule,
    ConfirmDialogModule,
    DropdownModule,
    RadioButtonModule,
    SelectButtonModule
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
    MesasService,
    {
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    },
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
