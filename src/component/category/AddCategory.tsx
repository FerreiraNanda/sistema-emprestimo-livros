// src/component/category/AddCategory.tsx
import { useState } from "react";
import "./CategoryForm.style.css";
import { ICategory } from "./Category.type";

type Props = {
    onBackBtnClickHnd: () => void;
    onSubmitClickHnd: (data: ICategory) => void;
};

const AddCategory = (props: Props) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const { onBackBtnClickHnd, onSubmitClickHnd } = props;

    const onSubmitBtnClickHnd = (e: React.FormEvent) => {
        e.preventDefault();
        const data: ICategory = {
            id: new Date().toJSON().toString(),
            name: name,
            description: description
        };
        onSubmitClickHnd(data);
        onBackBtnClickHnd();
    };

    return (
        <div className="form-container">
            <div>
                <h3>Adicionar Categoria</h3>
            </div>
            <form onSubmit={onSubmitBtnClickHnd}>
                <div>
                    <label>Nome: </label>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required
                    />
                </div>
                <div>
                    <label>Descrição: </label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows={3}
                    />
                </div>
                <div>
                    <input type="button" value="Voltar" onClick={onBackBtnClickHnd} />
                    <input type="submit" value="Adicionar" />
                </div>
            </form>
        </div>
    );
};

export default AddCategory;