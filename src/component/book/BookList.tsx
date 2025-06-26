// src/component/book/BookList.tsx
import { useState } from "react";
import { IBook } from "./Book.type";
import "./BookList.style.css";
import BookModal from "./BookModal";

type Props = {
    categories: {id: string, name: string}[];
    list: IBook[];
    onDeleteClickHnd: (data: IBook) => void;
    onEdit: (data: IBook) => void;
};

const BookList = ({ categories, list, onDeleteClickHnd, onEdit }: Props) => {
    const [showModal, setShowModal] = useState(false);
    const [dataToShow, setDataToShow] = useState<IBook | null>(null);

    const viewBook = (data: IBook) => {
        setDataToShow(data);
        setShowModal(true);
    };

    const onCloseModal = () => setShowModal(false);

    const getCategoryName = (id: string) => {
        return categories.find(c => c.id === id)?.name || "Sem categoria";
    };

    return (
        <div>
            <article>
                <h3 className="list-header">Lista de Livros</h3>
            </article>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Autor</th>
                        <th>Categoria</th>
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
                            <td>{getCategoryName(book.categoryId)}</td>
                            <td>{book.isbn}</td>
                            <td>{book.disponivel ? "Sim" : "Não"}</td>
                            <td>
                                <div>
                                    <button onClick={() => viewBook(book)}>Visualizar</button>
                                    <button onClick={() => onEdit(book)}>Editar</button>
                                    <button onClick={() => onDeleteClickHnd(book)}>Excluir</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
            {showModal && dataToShow && (
                <BookModal 
                    categories={categories}
                    data={dataToShow}
                    onClose={onCloseModal}
                />
            )}
        </div>
    );
};

export default BookList;