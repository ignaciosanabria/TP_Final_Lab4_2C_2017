import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {Validators, FormBuilder, FormControl, FormGroup, EmailValidator} from '@angular/forms';
import {Cliente} from '../../clases/cliente';
@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrls: ['./registro-cliente.component.css']
})
export class RegistroClienteComponent implements OnInit {

  public fb : FormBuilder;
  public claves : FormGroup;
  public registroMail : FormControl = new FormControl("",[Validators.required, Validators.minLength(10), Validators.maxLength(80), Validators.email]); //(?=.*\d)(?=.*[a-zA-Z])
  public registroClave : FormControl = new FormControl("",[Validators.required, Validators.minLength(5), Validators.maxLength(18)]);
  public registroRepetirClave : FormControl = new FormControl("",[Validators.required, Validators.minLength(5), Validators.maxLength(18)]);//[0-9]+[a-zA-Z ]*
  public registroNombre : FormControl = new FormControl("",[Validators.required, Validators.minLength(4)]);
  public registroApellido : FormControl = new FormControl("",[Validators.required, Validators.minLength(4)]);

  public registroForm : FormGroup;

  clienteNuevo : Cliente;

  constructor(private builder : FormBuilder, private route: ActivatedRoute,
    private router: Router) {
    this.CreateForm();
    }


 public CreateForm() : void
 {
 this.registroForm = this.builder.group({
   'registroMail' : this.registroMail,
   'registroClave': this.registroClave,
   'registroRepetirClave' : this.registroRepetirClave,
   'registroNombre' : this.registroNombre,
   'registroApellido' : this.registroApellido
 },{validator : this.areEqual});
 
}


areEqual(control : FormGroup) {
//  return control.get('registroClave').value === control.get('registroRepetirClave').value 
//  ? null : {'areEqual': true};
let password = control.get('registroClave').value; // to get value in input tag
let confirmPassword = control.get('registroRepetirClave').value; // to get value in input tag
 if(password != confirmPassword) {
     //console.log('false');
     control.get('registroRepetirClave').setErrors( {MatchPassword: true} )
 } else {
     //console.log('true');
     return null
 }
}



 Registrar(){
  //this.clienteNuevo = new Cliente(this.)
  //  if(this.registroForm.valid == true)
  //   {
  //    let usuarioRegistrado = {mail: this.registroForm.get("registroMail").value, clave: this.registroForm.get("registroClave").value};
  //    localStorage.setItem("usuarioRegistrado",JSON.stringify(usuarioRegistrado));
  //    alert("Usted se ha registrado con exito!");
  //    this.router.navigate(['/']);
  //   }
  //   else
  //     {
  //       alert("Ocurrio un error durante el registro!");
  //     }
  console.log(this.registroForm);
 }

ngOnInit() {
}
}
