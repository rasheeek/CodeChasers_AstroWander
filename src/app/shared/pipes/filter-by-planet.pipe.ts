import { Pipe, PipeTransform } from '@angular/core';
import { IPlanetShip } from '../types/type.model';

@Pipe({
  name: 'filterByPlanet'
})
export class FilterByPlanetPipe implements PipeTransform {

  transform(ships: IPlanetShip[], fromFilter: string, fromProp: string, toFilter: string, toProp: string): IPlanetShip[] {
    return ships.filter(ship => {
      const fromMatch = !fromFilter || ship[fromProp].toLowerCase().includes(fromFilter.toLowerCase());
      const toMatch = !toFilter || ship[toProp].toLowerCase().includes(toFilter.toLowerCase());
      return fromMatch && toMatch;
    });
  }

}
