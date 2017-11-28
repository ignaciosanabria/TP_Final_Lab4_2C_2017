import { Component, OnInit } from '@angular/core';
import {IMyDpOptions,IMyDateModel} from 'mydatepicker';
@Component({
  selector: 'app-crear-evento',
  templateUrl: './crear-evento.component.html',
  styleUrls: ['./crear-evento.component.css']
})
export class CrearEventoComponent implements OnInit {
  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd/mm/yyyy',
};

// Initialized to specific date (09.10.2018).
public model: any = { date: { year: 2017, month: 11, day: 28 } };
  constructor() {
  }
  

  ngOnInit()
  {
    
  }

  onDateChanged(event: IMyDateModel) {
    // event properties are: event.date, event.jsdate, event.formatted and event.epoc
    console.log(event);
}

  public ver()
  {
    console.log(this.model);
  }

}
