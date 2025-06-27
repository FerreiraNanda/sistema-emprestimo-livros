import { useState } from "react";
import { IBook } from "./Book.type";
import "./BookList.style.css";
import BookModal from "./BookModal";

type Props = {
    generosDisponiveis: string[];
    employees: {id: string, name: string}[];
    list: IBook[];
    onDeleteClickHnd: (data: IBook) => void;
    onEdit: (data: IBook) => void;
};

const BookList = ({ list, onDeleteClickHnd, onEdit }: Props) => {
    const [showModal, setShowModal] = useState(false);
    const [dataToShow, setDataToShow] = useState<IBook | null>(null);

    const viewBook = (data: IBook) => {
        setDataToShow(data);
        setShowModal(true);
    };

    const onCloseModal = () => setShowModal(false);

    return (
        <div className="table-container">
            <table className="compact-table">
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Autor</th>
                        <th>Gênero</th>
                        <th>ISBN</th>
                        <th>Disponível</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((book) => (
                        <tr key={book.id}>
                            <td>{book.titulo}</td>
                            <td>{book.autor}</td>
                            <td>{book.genero}</td>
                            <td>{book.isbn}</td>
                            <td>{book.disponivel ? "✔️" : "❌"}</td>
                            <td>
                                <div className="table-actions">
                                    <button 
                                        className="action-btn view-btn"
                                        onClick={() => viewBook(book)}
                                        title="Visualizar"
                                    >
                                        👁️
                                    </button>
                                    <button 
                                        className="action-btn edit-btn"
                                        onClick={() => onEdit(book)}
                                        title="Editar"
                                    >
                                        ✏️
                                    </button>
                                    <button 
                                        className="action-btn delete-btn"
                                        onClick={() => onDeleteClickHnd(book)}
                                        title="Excluir"
                                    >
                                        🗑️
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
            {showModal && dataToShow && (
                <BookModal 
                    data={dataToShow}
                    onClose={onCloseModal}
                />
            )}
        </div>
    );
};

export default BookList;