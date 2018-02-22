import { Component, OnInit } from '@angular/core';
import {AutService} from '../../servicios/aut.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {Validators, FormBuilder, FormControl, FormGroup, EmailValidator} from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import {SelectItem} from 'primeng/api';
import {RadioButtonModule} from 'primeng/radiobutton';
import {SelectButtonModule} from 'primeng/selectbutton';
import {EncuestasService} from '../../servicios/encuestas/encuestas.service';
import {Message} from 'primeng/components/common/api';
@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {
  
  miServicioAut : AutService;
  id_cliente : number;
  // numeros : Array<Number>;
  // numeroSeleccionado: number;
  numeros: any[];
  numeroSeleccionado: any;//Dropdown no funca
  respuesta2 : string; //Checkbox
  respuesta3 : string //Checkbox

  //Parte del botton select -- Bueno, Regular, Malo
  types: SelectItem[];
  msgs: Message[] = [];
  selectedType: string;
  //Parte del formular -- Validar dsp
  public registroForm : FormGroup;
  public registroRespuesta1 : FormControl = new FormControl("",[Validators.required]);
  public registroRespuesta2 : FormControl = new FormControl("",[Validators.required]);
  public registroRespuesta3 : FormControl = new FormControl("",[Validators.required]);
  public registroRespuesta4 : FormControl = new FormControl("",[Validators.required]);

  miServicioEncuesta: EncuestasService;

  constructor(servicioAut : AutService,private builder : FormBuilder, public route : ActivatedRoute, public router : Router, servicioEncuestas : EncuestasService) {
    this.miServicioAut = servicioAut;
    this.miServicioEncuesta = servicioEncuestas;
    //Para el boton Select
  this.types = [
    {label: 'Malo', value: 'malo'},
    {label: 'Regular', value: 'regular'},
    {label: 'Bueno', value: 'bueno'}
];
   }

  ngOnInit() {
    let tokenString = localStorage.getItem("token");
    let token = this.miServicioAut.getTokenParam(tokenString);
    this.id_cliente = token["data"].id_cliente;

    this.CreateForm();
  }

  public CreateForm() : void
  {
    this.registroForm = this.builder.group({
      'registroRespuesta1' : this.registroRespuesta1,
      'registroRespuesta2': this.registroRespuesta2,
      'registroRespuesta3': this.registroRespuesta3,
      'registroRespuesta4': this.registroRespuesta4
    });
  }

  VolverAtras()
  {
   this.router.navigate(["/PrincipalCliente"]);
  }

  EnviarRespuestas()
  {
    let respuesta1 = this.registroForm.get("registroRespuesta1").value;
    let respuesta2 = this.registroForm.get("registroRespuesta2").value;
    let respuesta3 = this.registroForm.get("registroRespuesta3").value;
    let respuesta4 = this.registroForm.get("registroRespuesta4").value;
    console.log(respuesta1);
    console.log(respuesta2);
    console.log(respuesta3);
    console.log(respuesta4);
    let json = {"respuesta1":respuesta1,"respuesta2":respuesta2,"respuesta3":respuesta3,"respuesta4":respuesta4,"id_cliente":this.id_cliente};
      this.miServicioEncuesta.InsertarEncuesta(JSON.stringify(json)).subscribe(
      data =>
     {
       console.log(data);
       let respuesta = JSON.parse(data["_body"]);
       if(respuesta.status == 200)
        {
          this.msgs = [];
          this.msgs.push({severity:'info', summary:'Exito', detail: 'Procesamos tus respuestas, aguarda unos segundos mientras te reedirigimos!'});
          var modelo = this;
          setTimeout(function(){
            modelo.router.navigate(["/PrincipalCliente"]);
           }, 3000);
        }
        else
        {
          this.msgs = [];
          this.msgs.push({severity:'info', summary:'Fracaso', detail: 'No pudimos procesar tus respuestas!'});
        }
     },
     error =>
     {
       console.log(error);
     }
    );
  }



}
