export interface IUser {
    id: string;
    nome: string;
    email: string;
    telefone?: string;
}

export enum UserPageEnum {
    list,
    add,
    edit,
    view
}