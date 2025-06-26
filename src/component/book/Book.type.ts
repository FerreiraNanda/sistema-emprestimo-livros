export interface IBook {
    id: string;
    titulo: string;
    autor: string;
    isbn: string;
    categoryId: string;
    disponivel: boolean;
}

export enum BookPageEnum {
    list,
    add,
    edit,
    view
}