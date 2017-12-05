import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estado'
})
export class EstadoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value == "1")
      {
        return "Finalizado";
      }
     else
      {
        return "En Proceso";
      }
  }

}
