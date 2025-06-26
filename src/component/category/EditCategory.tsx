// src/component/category/EditCategory.tsx
import { useState } from "react";
import { ICategory } from "./Category.type";
import "./CategoryForm.style.css";

type Props = {
    data: ICategory;
    onBackBtnClickHnd: () => void;
    onUpdateClickHnd: (data: ICategory) => void;
};

const EditCategory = (props: Props) => {
    const { data, onBackBtnClickHnd, onUpdateClickHnd } = props;

    const [name, setName] = useState(data.name);
    const [description, setDescription] = useState(data.description);

    const onSubmitBtnClickHnd = (e: React.FormEvent) => {
        e.preventDefault();
        const updatedData: ICategory = {
            id: data.id,
            name: name,
            description: description
        };
        onUpdateClickHnd(updatedData);
        onBackBtnClickHnd();
    };

    return (
        <div className="form-container">
            <div>
                <h3>Editar Categoria</h3>
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
                    <input type="submit" value="Atualizar" />
                </div>
            </form>
        </div>
    );
};

export default EditCategory;