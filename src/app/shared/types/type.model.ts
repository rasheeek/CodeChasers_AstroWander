export interface IPlanetShip {
    name: string,
    id?: string,
    fromPlanet: string,
    toPlanet: string,
    fromPlanetCode: string,
    toPlanetCode: string,
    price: number,
    type: 1 | 2,
    departureDate: Date | any,
    arrivalDate: Date | any,
}

export interface IBookings{
    addedDate : Date | any,
    uid  : string,
    noOfAdults : number, 
    noOfChildren : number,
    noOfInfants : number
}