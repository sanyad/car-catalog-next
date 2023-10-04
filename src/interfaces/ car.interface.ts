export interface ICar {
    id: number;
    price: number;
    name: string;
    image: string;
}
// export interface ICarData extends Omit<ICar, 'id'> {}
export interface ICarData {
    cars: ICar[]
}
export interface ICarDataSingle {
    car: ICar
}
