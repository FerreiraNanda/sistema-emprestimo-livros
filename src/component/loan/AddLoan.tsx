// src/component/loan/AddLoan.tsx
import { useState } from "react";
import "./LoanForm.style.css";
import { ILoan } from "./Loan.type";
import { IBook } from "../book/Book.type";
import { IUser } from "../user/User.type";

type Props = {
    books: IBook[];
    users: IUser[];
    onBackBtnClickHnd: () => void;
    onSubmitClickHnd: (data: ILoan) => void;
};

const AddLoan = ({ books, users, onBackBtnClickHnd, onSubmitClickHnd }: Props) => {
    const [selectedBookId, setSelectedBookId] = useState("");
    const [selectedUserId, setSelectedUserId] = useState("");
    const [loanDate, setLoanDate] = useState("");
    const [returnDate, setReturnDate] = useState("");

    const onSubmitBtnClickHnd = (e: React.FormEvent) => {
        e.preventDefault();

        const selectedBook = books.find(book => book.id === selectedBookId);
        const selectedUser = users.find(user => user.id === selectedUserId);

        if (!selectedBook || !selectedUser) {
            alert("Por favor, selecione um livro e um usuário válidos");
            return;
        }

        const data: ILoan = {
            id: new Date().toJSON().toString(),
            book: selectedBook,
            user: selectedUser,
            loanDate,
            returnDate,
            returned: false
        };

        onSubmitClickHnd(data);
        onBackBtnClickHnd();
    };

    return (
        <div className="form-container">
            <div>
                <h3>Registrar Empréstimo</h3>
            </div>
            <form onSubmit={onSubmitBtnClickHnd}>
                <div>
                    <label>Livro: </label>
                    <select
                        value={selectedBookId}
                        onChange={(e) => setSelectedBookId(e.target.value)}
                        required
                    >
                        <option value="">Selecione um livro</option>
                        {books.filter(b => b.disponivel).map(book => (
                            <option key={book.id} value={book.id}>
                                {book.titulo} - {book.autor}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Usuário: </label>
                    <select
                        value={selectedUserId}
                        onChange={(e) => setSelectedUserId(e.target.value)}
                        required
                    >
                        <option value="">Selecione um usuário</option>
                        {users.map(user => (
                            <option key={user.id} value={user.id}>
                                {user.nome} - {user.email}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Data do Empréstimo: </label>
                    <input
                        type="date"
                        value={loanDate}
                        onChange={(e) => setLoanDate(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Data de Devolução: </label>
                    <input
                        type="date"
                        value={returnDate}
                        onChange={(e) => setReturnDate(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <input type="button" value="Voltar" onClick={onBackBtnClickHnd} />
                    <input type="submit" value="Registrar Empréstimo" />
                </div>
            </form>
        </div>
    );
};

export default AddLoan;