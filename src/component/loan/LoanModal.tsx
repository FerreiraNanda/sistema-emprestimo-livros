// src/component/loan/LoanModal.tsx
import { ILoan } from "./Loan.type";
import "./LoanModal.style.css";

type Props = {
    onClose: () => void;
    data: ILoan;
};

const LoanModal = ({ onClose, data }: Props) => {
    return (
        <div id="loanModal" className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h3>Detalhes do Empréstimo</h3>
                <div>
                    <label>Livro: {data.book.titulo}</label>
                </div>
                <div>
                    <label>Autor: {data.book.autor}</label>
                </div>
                <div>
                    <label>Usuário: {data.user.nome}</label>
                </div>
                <div>
                    <label>Email: {data.user.email}</label>
                </div>
                <div>
                    <label>Data do Empréstimo: {new Date(data.loanDate).toLocaleDateString()}</label>
                </div>
                <div>
                    <label>Data de Devolução: {new Date(data.returnDate).toLocaleDateString()}</label>
                </div>
                <div>
                    <label>Status: {data.returned ? "Devolvido" : new Date(data.returnDate) < new Date() ? "Atrasado" : "Em andamento"}</label>
                </div>
            </div>
        </div>
    );
};

export default LoanModal;