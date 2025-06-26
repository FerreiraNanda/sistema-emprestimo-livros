// src/component/book/AddBook.tsx
import { useState } from "react";
import "./BookForm.style.css";
import { IBook } from "./Book.type";

type Props = {
  categories: {id: string, name: string}[];
  onBackBtnClickHnd: () => void;
  onSubmitClickHnd: (data: IBook) => void;
};

const AddBook = (props: Props) => {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [categoryId, setCategoryId] = useState("");
  
  const { categories, onBackBtnClickHnd, onSubmitClickHnd } = props;

  const onSubmitBtnClickHnd = (e: React.FormEvent) => {
        e.preventDefault();

        if (!categoryId) {
            alert("Por favor, selecione uma categoria");
            return;
        }

        const data: IBook = {
            id: new Date().toJSON().toString(),
            titulo,
            autor,
            isbn,
            categoryId, // Incluindo a categoria
            disponivel: true
        };

        onSubmitClickHnd(data);
        onBackBtnClickHnd();
    };

  return (
    <div className="form-container">
      <div>
        <h3>Adicionar Livro</h3>
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
          <input type="button" value="Voltar" onClick={onBackBtnClickHnd} />
          <input type="submit" value="Adicionar Livro" />
        </div>
        <div>
            <label>Categoria: </label>
                <select
                  value={categoryId}
                  onChange={(e) => setCategoryId(e.target.value)}
                  required
                  >
                  <option value="">Selecione uma categoria</option>
                  {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                  ))}
                </select>
            </div>
              <div>
                <input type="button" value="Voltar" onClick={onBackBtnClickHnd} />
                <input type="submit" value="Adicionar Livro" />
              </div>
      </form>
    </div>
  );
};

export default AddBook;