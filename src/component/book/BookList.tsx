import { useState } from "react";
import { IBook } from "./Book.type";
import "../styles/shared.css";
import BookModal from "./BookModal";
import { VisibilityIcon, EditIcon, CloseIcon } from "../icons";

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
            <article>
                <h3 className="list-header">Lista de Livros</h3>
            </article>
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
                            <td>{book.disponivel ? "Sim" : "Não"}</td>
                            <td>
                                <div className="table-actions" style={{ display: 'flex', gap: '0.5rem' }}>
                                    <button
                                        aria-label="Visualizar"
                                        className="action-btn view-btn"
                                        onClick={() => viewBook(book)}
                                        title="Visualizar"
                                        style={{ background: "none", border: "none", cursor: "pointer" }}
                                    >
                                        <VisibilityIcon />
                                    </button>
                                    <button
                                        aria-label="Editar"
                                        className="action-btn edit-btn"
                                        onClick={() => onEdit(book)}
                                        title="Editar"
                                        style={{ background: "none", border: "none", cursor: "pointer" }}
                                    >
                                        <EditIcon />
                                    </button>
                                    <button
                                        aria-label="Excluir"
                                        className="action-btn delete-btn"
                                        onClick={() => onDeleteClickHnd(book)}
                                        title="Excluir"
                                        style={{ background: "none", border: "none", cursor: "pointer" }}
                                    >
                                        <CloseIcon />
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