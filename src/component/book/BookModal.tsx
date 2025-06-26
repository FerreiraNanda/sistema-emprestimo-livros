// src/component/book/BookModal.tsx
import { IBook } from "./Book.type";
import "./BookModal.style.css";

type Props = {
   categories: {id: string, name: string}[];
    onClose: () => void;
    data: IBook;
};
const BookModal = ({ categories, data, onClose }: Props) => {
     const getCategoryName = () => {
        const category = categories.find(c => c.id === data.categoryId);
        return category ? category.name : "Sem categoria";
    };

    return (
        <div id="myModal" className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h3>Detalhes do Livro</h3>
                <div>
                    <label>Título: {data.titulo}</label>
                </div>
                <div>
                    <label>Autor: {data.autor}</label>
                </div>
                <div>
                    <label>ISBN: {data.isbn}</label>
                </div>
                 <div>
                    <label>Categoria: {getCategoryName()}</label>
                </div>
                <div>
                    <label>Disponível: {data.disponivel ? "Sim" : "Não"}</label>
                </div>
            </div>
        </div>
    );
};

export default BookModal;