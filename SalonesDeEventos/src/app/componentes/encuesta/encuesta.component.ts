import { Component, OnInit } from '@angular/core';
import {AutService} from '../../servicios/aut.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {Validators, FormBuilder, FormControl, FormGroup, EmailValidator} from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import {SelectItem} from 'primeng/api';
import {RadioButtonModule} from 'primeng/radiobutton';
import {SelectButtonModule} from 'primeng/selectbutton';
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
  
  selectedType: string;
  //Parte del formular -- Validar dsp
  public registroForm : FormGroup;
  public registroPregunta1 : FormControl = new FormControl("",[Validators.required]);
  constructor(servicioAut : AutService,private builder : FormBuilder) {
    this.miServicioAut = servicioAut;
    this.numeros = [
      // {name: '1', code: '1'},
      // {name: '2', code: '2'},
      // {name: '3', code: '3'},
      // {name: '4', code: '4'},
      // {name: '5', code: '5'}
      {label: 'Audi', value: 'Audi'},
      {label: 'BMW', value: 'BMW'},
      // {label: '1', value: '1'},
      // {label: '2', value: '2'},
      // {label: '3', value: '3'},
      // {label: 'Ford', value: 'Ford'},
      // {label: 'Honda', value: 'Honda'},
  ];
  this.types = [
    {label: 'Paypal', value: 'PayPal', icon: 'fa fa-fw fa-cc-paypal'},
    {label: 'Visa', value: 'Visa', icon: 'fa fa-fw fa-cc-visa'},
    {label: 'MasterCard', value: 'MasterCard', icon: 'fa fa-fw fa-cc-mastercard'}
];
   }

  ngOnInit() {
    let tokenString = localStorage.getItem("token");
    let token = this.miServicioAut.getTokenParam(tokenString);
    this.id_cliente = token["data"].id_cliente;
    // this.numeros = [
      // {name: '1', code: '1'},
      // {name: '2', code: '2'},
      // {name: '3', code: '3'},
      // {name: '4', code: '4'},
      // {name: '5', code: '5'}
      // {label: 'Audi', value: 'Audi'},
      // {label: 'BMW', value: 'BMW'},

      // {label: '1', value: '1'},
      // {label: '2', value: '2'},
      // {label: '3', value: '3'},
      // {label: 'Ford', value: 'Ford'},
      // {label: 'Honda', value: 'Honda'},
  // ];

    this.CreateForm();
  }

  public CreateForm() : void
  {
    this.registroForm = this.builder.group({
      'registroPregunta1' : this.registroPregunta1
    });
  }

  VolverAtras()
  {
    console.log("Falta hacer este metodo");
  }

  EnviarRespuestas()
  {
    console.log("Falta hacer este metodo");
  }



}
