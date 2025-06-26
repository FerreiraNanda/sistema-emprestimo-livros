// src/component/book/EditBook.tsx
import { useState } from "react";
import { IBook } from "./Book.type";
import "./BookForm.style.css";

type Props = {
    categories: {id: string, name: string}[];
    data: IBook;
    onBackBtnClickHnd: () => void;
    onUpdateClickHnd: (data: IBook) => void;
};

const EditBook = (props: Props) => {
    const { categories, data, onBackBtnClickHnd, onUpdateClickHnd } = props;

    const [titulo, setTitulo] = useState(data.titulo);
    const [autor, setAutor] = useState(data.autor);
    const [isbn, setIsbn] = useState(data.isbn);
    const [categoryId, setCategoryId] = useState(data.categoryId);

    const onSubmitBtnClickHnd = (e: React.FormEvent) => {
        e.preventDefault();

        const updatedData: IBook = {
            id: data.id,
            titulo,
            autor,
            isbn,
            categoryId,
            disponivel: data.disponivel
        };

        onUpdateClickHnd(updatedData);
        onBackBtnClickHnd();
    };

    return (
        <div className="form-container">
            <div>
                <h3>Editar Livro</h3>
            </div>
            <form onSubmit={onSubmitBtnClickHnd}>
                <div>
                    <label>Título: </label>
                    <input 
                        type="text" 
                        value={titulo} 
                        onChange={(e) => setTitulo(e.target.value)} 
                        required
                    />
                </div>
                <div>
                    <label>Autor: </label>
                    <input 
                        type="text" 
                        value={autor} 
                        onChange={(e) => setAutor(e.target.value)} 
                        required
                    />
                </div>
                <div>
                    <label>ISBN: </label>
                    <input 
                        type="text" 
                        value={isbn} 
                        onChange={(e) => setIsbn(e.target.value)} 
                        required
                    />
                </div>
                <div>
                    <label>Categoria: </label>
                    <select
                        value={categoryId}
                        onChange={(e) => setCategoryId(e.target.value)}
                        required>
                        {categories.map(category => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <input type="button" value="Voltar" onClick={onBackBtnClickHnd} />
                    <input type="submit" value="Atualizar Livro" />
                </div>
            </form>
        </div>
    );
};

export default EditBook;