import { Pipe, PipeTransform } from '@angular/core';
import { IPlanetShip } from '../types/type.model';

@Pipe({
  name: 'dateRangeFilter'
})
export class DateRangeFilterPipe implements PipeTransform {
  transform(items: IPlanetShip[], startDate: string, endDate: string): IPlanetShip[] {
    if (!startDate || !endDate) {
      return items;
    }
    
    const filteredItems = items.filter(item => {
      const departureDate = new Date(item.departureDate.toDate());
      const arrivalDate = new Date(item.arrivalDate.toDate());
      const startRange = new Date(startDate);
      const endRange = new Date(endDate);

      return departureDate >= startRange && departureDate <= endRange &&
             arrivalDate >= startRange && arrivalDate <= endRange;
    });

    return filteredItems;
  }
}