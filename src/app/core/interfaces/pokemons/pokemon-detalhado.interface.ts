export interface IPokemonDetalhado {
    name: string;
    forms: IForm[]
    id: number;
    is_default: true
    location_area_encounters: string;
    abilities: IAbiliity[];
    types: IType[];
    weight: number;
}

interface IAbiliity {
    name: string;
    url: string;
}

interface IType {
    name: string;
    url: string;
}

interface IForm {
    name: string;
    url: string;
}