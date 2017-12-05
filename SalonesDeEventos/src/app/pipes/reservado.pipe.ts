import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reservado'
})
export class ReservadoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value == "0")
      {
        return "Sin Reserva";
      }
     else
      {
        return "Reservado";
      }
  }

}
