import { Pipe, PipeTransform } from '@angular/core';
import { IPlanetShip } from '../types/type.model';

@Pipe({
  name: 'dateRangeFilter',
})
export class DateRangeFilterPipe implements PipeTransform {
  transform(
    items: IPlanetShip[],
    startDate: string,
    endDate: string
  ): IPlanetShip[] {
    if (!startDate || !endDate) {
      return items;
    }

    const filteredItems = items.filter((item) => {
      const departureDate = item.departureDate.toDate().toISOString().split('T')[0];
      const arrivalDate =item.arrivalDate.toDate().toISOString().split('T')[0];
      const startRange = startDate.split('T')[0];
      const endRange = endDate.split('T')[0];
      console.log("Ship dates", item.departureDate.toDate().toISOString().split('T')[0],item.arrivalDate.toDate().toISOString().split('T')[0] );
      
      return (
        departureDate== startRange &&
        arrivalDate == endRange
      );
    });

    console.log('Filtered items', filteredItems, startDate.split('T')[0], endDate.split('T')[0], items);

    return filteredItems;
  }
}
