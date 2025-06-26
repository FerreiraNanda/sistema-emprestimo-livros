// src/component/loan/LoanList.tsx
import { useState } from "react";
import { ILoan } from "./Loan.type";
import "./LoanList.style.css";
import LoanModal from "./LoanModal";
type Props = {
    list: ILoan[];
    onDeleteClickHnd: (data: ILoan) => void;
    onEdit: (data: ILoan) => void;
    onReturn: (data: ILoan) => void;
};

const LoanList = ({ list, onDeleteClickHnd, onEdit, onReturn }: Props) => {
    const [showModal, setShowModal] = useState(false);
    const [dataToShow, setDataToShow] = useState<ILoan | null>(null);

    const viewLoan = (data: ILoan) => {
        setDataToShow(data);
        setShowModal(true);
    };

    const onCloseModal = () => setShowModal(false);

    return (
        <div>
            <article>
                <h3 className="list-header">Lista de Empréstimos</h3>
            </article>
            <table>
                <thead>
                    <tr>
                        <th>Livro</th>
                        <th>Usuário</th>
                        <th>Data Empréstimo</th>
                        <th>Data Devolução</th>
                        <th>Status</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((loan) => (
                        <tr key={loan.id} className={loan.returned ? "returned" : loan.returnDate < new Date().toISOString() ? "overdue" : ""}>
                            <td>{loan.book.titulo}</td>
                            <td>{loan.user.nome}</td>
                            <td>{new Date(loan.loanDate).toLocaleDateString()}</td>
                            <td>{new Date(loan.returnDate).toLocaleDateString()}</td>
                            <td>{loan.returned ? "Devolvido" : new Date(loan.returnDate) < new Date() ? "Atrasado" : "Em andamento"}</td>
                            <td>
                                <div>
                                    <input type="button" value="Visualizar" onClick={() => viewLoan(loan)} />
                                    {!loan.returned && (
                                        <>
                                            <input type="button" value="Editar" onClick={() => onEdit(loan)} />
                                            <input type="button" value="Devolver" onClick={() => onReturn(loan)} />
                                        </>
                                    )}
                                    <input type="button" value="Excluir" onClick={() => onDeleteClickHnd(loan)} />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {showModal && dataToShow && (
                <LoanModal onClose={onCloseModal} data={dataToShow} />
            )}
        </div>
    );
};

export default LoanList;