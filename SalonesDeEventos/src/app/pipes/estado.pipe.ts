import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estado'
})
export class EstadoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value == "si")
      {
        return "Finalizado";
      }
      else if(value = "cancelado")
        {
          return "Cancelado";
        }
  }

}
