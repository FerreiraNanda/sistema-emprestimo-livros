export interface ICategory {
    id: string;
    name: string;
    description: string;
}

export enum CategoryPageEnum {
    list,
    add,
    edit,
}