import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-principal-cliente',
  templateUrl: './principal-cliente.component.html',
  styleUrls: ['./principal-cliente.component.css']
})
export class PrincipalClienteComponent implements OnInit {

  espacios : Array<any>;
  constructor() 
    { 
      this.espacios = new Array<any>();
      this.espacios.length = 22;

    }

  ngOnInit() {
  }

}
