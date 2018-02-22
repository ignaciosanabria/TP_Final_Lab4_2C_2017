import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {VerificarJWTService} from '../servicios/verificar-jwt.service';
import { AppComponent } from '../app.component';
import { LoginComponent } from '../componentes/login/login.component';
import { LoginEmpleadoComponent } from '../componentes/login-empleado/login-empleado.component';
import { RegistroClienteComponent } from '../componentes/registro-cliente/registro-cliente.component';
import { PrincipalClienteComponent } from '../componentes/principal-cliente/principal-cliente.component';
import { PrincipalRecepcionistaComponent } from '../componentes/principal-recepcionista/principal-recepcionista.component';
import { PrincipalEncargadoComponent } from '../componentes/principal-encargado/principal-encargado.component';
import { PrincipalAdministradorComponent } from '../componentes/principal-administrador/principal-administrador.component';
import { CrearEventoComponent } from '../componentes/crear-evento/crear-evento.component';
import { MenuClienteComponent } from '../componentes/menu-cliente/menu-cliente.component';
import { InicialClienteComponent } from '../componentes/inicial-cliente/inicial-cliente.component';
import { EventosClientesComponent } from '../componentes/eventos-clientes/eventos-clientes.component';
import { ErrorComponent } from '../componentes/error/error.component';
import { PrincipalInvitadoComponent } from '../componentes/principal-invitado/principal-invitado.component';
import { MenuInvitadoComponent } from '../componentes/menu-invitado/menu-invitado.component';
import { InicialInvitadoComponent } from '../componentes/inicial-invitado/inicial-invitado.component';
import { DireccionesComponent } from '../componentes/direcciones/direcciones.component';
import { BotonMesasComponent } from '../componentes/boton-mesas/boton-mesas.component';
import { MiMesaComponent } from '../componentes/mi-mesa/mi-mesa.component';
import { MenuRecepcionistaComponent } from '../componentes/menu-recepcionista/menu-recepcionista.component';
import { MenuEncargadoComponent } from '../componentes/menu-encargado/menu-encargado.component';
import { MenuAdministradorComponent } from '../componentes/menu-administrador/menu-administrador.component';
import { InicialRecepcionistaComponent } from '../componentes/inicial-recepcionista/inicial-recepcionista.component';
import { InicialEncargadoComponent } from '../componentes/inicial-encargado/inicial-encargado.component';
import { InicialAdministradorComponent } from '../componentes/inicial-administrador/inicial-administrador.component';
import { VerEventosRecepcionistaComponent } from '../componentes/ver-eventos-recepcionista/ver-eventos-recepcionista.component';
import { VerClientesComponent } from '../componentes/ver-clientes/ver-clientes.component';
import { VerEstadisticasComponent } from '../componentes/ver-estadisticas/ver-estadisticas.component';
import { VerEventosEncargadoComponent } from '../componentes/ver-eventos-encargado/ver-eventos-encargado.component';
import { VerInvitadosRegistradosComponent } from '../componentes/ver-invitados-registrados/ver-invitados-registrados.component';
import { EncuestaComponent } from '../componentes/encuesta/encuesta.component';
import { VerEventoHoyEmpleadoComponent } from '../componentes/ver-evento-hoy-empleado/ver-evento-hoy-empleado.component';
import { MisDatosEmpleadoComponent } from '../componentes/mis-datos-empleado/mis-datos-empleado.component';
import { MisDatosClienteComponent } from '../componentes/mis-datos-cliente/mis-datos-cliente.component';
import { SubirFotosClienteComponent } from '../componentes/subir-fotos-cliente/subir-fotos-cliente.component';
import { EditarDatosClienteComponent } from '../componentes/editar-datos-cliente/editar-datos-cliente.component';
import { EditarDatosEmpleadoComponent } from '../componentes/editar-datos-empleado/editar-datos-empleado.component';
import { MiMesaEmpleadoComponent } from '../componentes/mi-mesa-empleado/mi-mesa-empleado.component';

const MiRuteo = [
  {path: '' , component: LoginComponent},
  {path: 'LoginEmpleado', component: LoginEmpleadoComponent},
  {path: 'RegistroCliente', component : RegistroClienteComponent},
  {path: 'Error', component : ErrorComponent},
  //Falta modificar Api -- Para recibir y que guarde imagenes
  {path: 'SubirFotosCliente/:idCliente', component : SubirFotosClienteComponent},
  {path: 'EncuestaCliente', component: EncuestaComponent},
  //Estos path necesitan auth - JWT
  {path: 'PrincipalCliente', component : PrincipalClienteComponent,
  canActivate: [VerificarJWTService],
  children:
  [
    {path : '', component : InicialClienteComponent},
    {path : 'CrearEvento', component : CrearEventoComponent},
    {path : 'EventosCliente', component : EventosClientesComponent},
    {path : 'VerMesas/:idEvento', component : BotonMesasComponent},
    {path: 'MisDatosCliente/:idCliente', component: MisDatosClienteComponent},
    {path: 'EditarDatosCliente/:idCliente', component: EditarDatosClienteComponent},
    //Este es nuevo --- Link a Mesas AppMiMesa
    {path: 'VerMesas/:idEvento/MiMesa/:idMesa', component: MiMesaComponent}
  ]
  },
  {
    path: 'PrincipalInvitado', component : PrincipalInvitadoComponent,
    canActivate: [VerificarJWTService],
    children: [
      { path : '', component : DireccionesComponent}
      // {path : 'Direcciones', component : DireccionesComponent}
    ]
  },

  /// EMPLEADOS -------------------------------------------
  {
    path: 'PrincipalRecepcionista', component : PrincipalRecepcionistaComponent,
    canActivate: [VerificarJWTService],
    children : [
      {path : '', component : InicialRecepcionistaComponent},
      {path : 'VerEventos', component : VerEventosRecepcionistaComponent},
      {path : 'VerClientes', component : VerClientesComponent},
      {path : 'VerEventoHoyEmpleado/:idEvento', component: VerEventoHoyEmpleadoComponent},
      {path: 'MisDatosEmpleado/:idEmpleado', component: MisDatosEmpleadoComponent},
      {path: 'VerEventoHoyEmpleado/:idEvento/MiMesaEmpleado/:idMesa', component: MiMesaEmpleadoComponent}
    ]
  },
  {path: 'PrincipalEncargado', component : PrincipalEncargadoComponent,
  canActivate: [VerificarJWTService],
  children : [
    {path : '', component : InicialEncargadoComponent},
    {path : 'VerEventoHoyEmpleado/:idEvento', component: VerEventoHoyEmpleadoComponent},
    {path : 'VerEventos', component : VerEventosEncargadoComponent},
    {path : 'VerClientes', component : VerClientesComponent},
    {path : 'VerEstadisticas', component : VerEstadisticasComponent},
    {path: 'MisDatosEmpleado/:idEmpleado', component: MisDatosEmpleadoComponent},
    {path: 'VerEventoHoyEmpleado/:idEvento/MiMesaEmpleado/:idMesa', component: MiMesaEmpleadoComponent}
  ]
   },
   {path: 'PrincipalAdministrador', component : PrincipalAdministradorComponent,
   canActivate : [VerificarJWTService],
   children : [
     {path: '', component : InicialAdministradorComponent},
     {path : 'VerEventos', component : VerEventosEncargadoComponent},
     {path : 'VerClientes', component : VerClientesComponent},
     {path : 'VerEstadisticas', component : VerEstadisticasComponent},
     {path: 'VerInvitados', component : VerInvitadosRegistradosComponent},
     {path: 'MisDatosEmpleado/:idEmpleado', component: MisDatosEmpleadoComponent}
   ]
   }
]


@NgModule({
  imports: [
    RouterModule.forRoot(MiRuteo)
  ],
  exports: [
    RouterModule
  ]
})
export class RuteandoModule { }
