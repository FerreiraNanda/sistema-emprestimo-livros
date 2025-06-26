// src/component/loan/EditLoan.tsx
import { useState } from "react";
import { ILoan } from "./Loan.type";
import "./LoanForm.style.css";

type Props = {
    data: ILoan;
    onBackBtnClickHnd: () => void;
    onUpdateClickHnd: (data: ILoan) => void;
};

const EditLoan = ({ data, onBackBtnClickHnd, onUpdateClickHnd }: Props) => {
    const [returned, setReturned] = useState(data.returned);

    const onSubmitBtnClickHnd = (e: React.FormEvent) => {
        e.preventDefault();

        const updatedData: ILoan = {
            ...data,
            returned
        };

        onUpdateClickHnd(updatedData);
        onBackBtnClickHnd();
    };

    return (
        <div className="form-container">
            <div>
                <h3>Editar Empréstimo</h3>
            </div>
            <form onSubmit={onSubmitBtnClickHnd}>
                <div>
                    <label>Livro: </label>
                    <span>{data.book.titulo}</span>
                </div>
                <div>
                    <label>Usuário: </label>
                    <span>{data.user.nome}</span>
                </div>
                <div>
                    <label>Data do Empréstimo: </label>
                    <span>{new Date(data.loanDate).toLocaleDateString()}</span>
                </div>
                <div>
                    <label>Data de Devolução: </label>
                    <span>{new Date(data.returnDate).toLocaleDateString()}</span>
                </div>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            checked={returned}
                            onChange={(e) => setReturned(e.target.checked)}
                        />
                        Devolvido
                    </label>
                </div>
                <div>
                    <input type="button" value="Voltar" onClick={onBackBtnClickHnd} />
                    <input type="submit" value="Atualizar" />
                </div>
            </form>
        </div>
    );
};

export default EditLoan;