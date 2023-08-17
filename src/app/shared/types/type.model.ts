export interface IPlanetShip {
    name: string,
    id: string,
    fromPlanet: string,
    toPlanet: string,
    fromPlanetCode: string,
    toPlanetCode: string,
    price: number,
    type: 1 | 2,
    departureDate: Date | any,
    arrivalDate: Date | any,
}