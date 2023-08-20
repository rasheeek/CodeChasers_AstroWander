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
    [key: string]: any;
}



export interface IPlanet{
    name: string,
    day: number,
    image: string,
}

export interface IFlights{
    image: string,
    planetName: string,
    code: string,
    day: number,
    price: number,
    type: 1 | 2,
}



export interface IBooking{
    addedDate : Date | any,
    uid  : string,
    noOfAdults : number, 
    noOfChildren : number,
    noOfInfants : number,
    shipId : string, 
    fromPlanet: string,
    toPlanet: string,
    id?: string,
}