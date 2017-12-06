import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {Validators, FormBuilder, FormControl, FormGroup, EmailValidator} from '@angular/forms';
import {Cliente} from '../../clases/cliente';
import {ClientesService} from '../../servicios/clientes/clientes.service';
import { FileUploader } from 'ng2-file-upload';
import { FileUploadModule, FileItem} from "ng2-file-upload";
//Cambiar URL por el de la API FINAL
const URL = "http://localhost/API_Final/Registro/RegistrarClienteConFoto"
@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrls: ['./registro-cliente.component.css']
})
export class RegistroClienteComponent implements OnInit {


  public uploader:FileUploader = new FileUploader({url: URL ,itemAlias: 'foto'
});

  public fb : FormBuilder;
  public claves : FormGroup;
  public registroMail : FormControl = new FormControl("",[Validators.required, Validators.minLength(10), Validators.maxLength(80), Validators.email]); //(?=.*\d)(?=.*[a-zA-Z])
  public registroClave : FormControl = new FormControl("",[Validators.required, Validators.minLength(5), Validators.maxLength(18)]);
  public registroRepetirClave : FormControl = new FormControl("",[Validators.required, Validators.minLength(5), Validators.maxLength(18)]);//[0-9]+[a-zA-Z ]*
  public registroNombre : FormControl = new FormControl("",[Validators.required, Validators.minLength(4)]);
  public registroApellido : FormControl = new FormControl("",[Validators.required, Validators.minLength(4)]);

  public registroNroDoc : FormControl = new FormControl("",[Validators.required,Validators.minLength(7),Validators.maxLength(9)]);
  public registroDireccion : FormControl = new FormControl("",[Validators.required]);
 
  public Imagen : any;

  public registroForm : FormGroup;

  clienteNuevo : Cliente;
   
  miServicioClientes : ClientesService;

  constructor(private builder : FormBuilder, private route: ActivatedRoute,
    private router: Router, servicioClientes :ClientesService) {
    this.CreateForm();
    this.miServicioClientes = servicioClientes;
    }


 public CreateForm() : void
 {
 this.registroForm = this.builder.group({
   'registroMail' : this.registroMail,
   'registroClave': this.registroClave,
   'registroRepetirClave' : this.registroRepetirClave,
   'registroNombre' : this.registroNombre,
   'registroApellido' : this.registroApellido,
   'registroNroDoc' : this.registroNroDoc,
   'registroDireccion' : this.registroDireccion
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

//Para el manejo de Imagenes
onFileChange(event) {
  let file = event.target.files[0]; // <--- File Object for future use.
  console.log(file);
  this.Imagen = file;
}



 Registrar(){
  let nombre = this.registroForm.get("registroNombre").value;
  let apellido = this.registroForm.get("registroApellido").value;
  let clave = this.registroForm.get("registroClave").value;
  let mail = this.registroForm.get("registroMail").value;
  let direccion = this.registroForm.get("registroDireccion").value;
  let nro_doc = this.registroForm.get("registroNroDoc").value;
  if(this.Imagen == undefined)
  {
    this.clienteNuevo = new Cliente(nombre,apellido,Number(nro_doc),mail,clave,direccion,"undefined");
    this.miServicioClientes.RegistrarCliente(JSON.stringify(this.clienteNuevo)).subscribe(
      data => {
        console.log(data);
    let respuesta = JSON.parse(data["_body"]);
    if(respuesta.status = 200)
      {
        alert("Usted se ha registrado!");
        this.router.navigate(['/']);
      }
      else
      {
        alert("Ocurrio un error!");
        location.reload();
      }
      },
      error => {
        console.log(error);
      }
    );
  }
  else
    {
      this.uploader.onBuildItemForm = (item, form) => {
        form.append("nombre",nombre);
        form.append("apellido", apellido);
        form.append("nro_doc",nro_doc);
        form.append("mail",mail);
        form.append("clave",clave);
        form.append("direccion",direccion);
       }
       this.uploader.queue[this.uploader.queue.length -1].upload();
    }
 }

ngOnInit() {
  this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
  this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
    console.log("ImageUpload:uploaded:", item, status, response);
    console.log("Viene el Response!");
    console.log(response);
    let respuesta = JSON.parse(response);
    console.log(respuesta);
    if(respuesta.status = 200)
    {
      alert("Usted se ha registrado!");
      this.router.navigate(['/']);
    }
    else
    {
      alert("Ocurrio un error!");
      location.reload();
    }
};
}

llenarFormulario()
{
  this.registroNombre.setValue("Agustin");
  this.registroApellido.setValue("Lobo");
  this.registroMail.setValue("aguslobo@gmail.com");
  this.registroClave.setValue("lobo12");
  this.registroRepetirClave.setValue("lobo12");
  this.registroNroDoc.setValue("31242123");
  this.registroDireccion.setValue("Venezuela 2141");
}
}
