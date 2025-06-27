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

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('pt-BR');
    };

    const getStatus = (loan: ILoan) => {
        if (loan.returned) return "✅ Devolvido";
        if (new Date(loan.returnDate) < new Date()) return "⚠️ Atrasado";
        return "⏳ Em andamento";
    };

    return (
        <div className="table-container">
            <table className="compact-table">
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
                        <tr key={loan.id}>
                            <td>{loan.book?.titulo || "-"}</td>
                            <td>{loan.user?.name || "-"}</td>
                            <td>{formatDate(loan.loanDate)}</td>
                            <td>{formatDate(loan.returnDate)}</td>
                            <td>{getStatus(loan)}</td>
                            <td>
                                <div className="table-actions">
                                    <button onClick={() => viewLoan(loan)} title="Visualizar">👁️</button>
                                    {!loan.returned && (
                                        <>
                                            <button onClick={() => onEdit(loan)} title="Editar">✏️</button>
                                            <button onClick={() => onReturn(loan)} title="Devolver">🔄</button>
                                        </>
                                    )}
                                    <button onClick={() => onDeleteClickHnd(loan)} title="Excluir">🗑️</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {showModal && dataToShow && (
                <LoanModal 
                    data={dataToShow} 
                    onClose={onCloseModal}
                />
            )}
        </div>
    );
};

export default LoanList;