// src/component/loan/Loan.type.ts
import { IBook } from "../book/Book.type";
import { IUser } from "../user/User.type";

export interface ILoan {
    id: string;
    book: IBook;
    user: IUser;
    loanDate: string;
    returnDate: string;
    returned: boolean;
}

export enum LoanPageEnum {
    list,
    add,
    edit,
    view
}