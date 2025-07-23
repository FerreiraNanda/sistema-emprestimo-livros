import { useState } from "react";
import { IBook } from "./Book.type";
import "../styles/shared.css";

type Props = {
    generosDisponiveis: string[];
    onBackBtnClickHnd: () => void;
    onSubmitClickHnd: (data: IBook) => void;
};

const AddBook = ({ generosDisponiveis, onBackBtnClickHnd, onSubmitClickHnd }: Props) => {
    const [formData, setFormData] = useState<Omit<IBook, 'id' | 'disponivel' | 'registeredBy'>>({
        titulo: '',
        autor: '',
        isbn: '',
        genero: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.titulo || !formData.autor || !formData.isbn || !formData.genero) {
            alert("Preencha todos os campos!");
            return;
        }
        
        const newBook: IBook = {
            id: Date.now().toString(),
            ...formData,
            disponivel: true,
            registeredBy: "current-user-id"
        };
        
        onSubmitClickHnd(newBook);
        onBackBtnClickHnd();
    };

    return (
        <div className="form-responsive-wrapper">
            <div className="form-container">
                <h2 className="form-title">Adicionar Novo Livro</h2>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="titulo">Título:</label>
                        <input 
                            id="titulo"
                            type="text" 
                            name="titulo"
                            className="form-input-mobile"
                            value={formData.titulo}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="autor">Autor:</label>
                        <input 
                            id="autor"
                            type="text" 
                            name="autor"
                            className="form-input-mobile"
                            value={formData.autor}
                            onChange={handleChange}
                            required
                        />
                    </div> 
                    <div className="form-group">
                        <label htmlFor="isbn">ISBN:</label>
                        <input 
                            id="isbn"
                            type="text" 
                            name="isbn"
                            className="form-input-mobile"
                            value={formData.isbn}
                            onChange={handleChange}
                            required
                        />
                    </div> 
                    <div className="form-group">
                        <label htmlFor="genero">Gênero:</label>
                        <select
                            id="genero"
                            name="genero"
                            className="form-input-mobile"
                            value={formData.genero}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Selecione...</option>
                            {generosDisponiveis.map(genero => (
                                <option key={genero} value={genero}>{genero}</option>
                            ))}
                        </select>
                    </div>
                    
                    <div className="button-group responsive-buttons">
                        <button 
                            type="button" 
                            onClick={onBackBtnClickHnd} 
                            className="cancel-button touch-button"
                        >
                            Cancelar
                        </button>
                        <button 
                            type="submit" 
                            className="submit-button touch-button"
                        >
                            Salvar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddBook;