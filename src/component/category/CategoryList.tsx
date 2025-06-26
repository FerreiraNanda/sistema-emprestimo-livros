// src/component/category/CategoryList.tsx
import { useState } from "react";
import { ICategory } from "./Category.type";
import "./CategoryList.style.css";
import CategoryModal from "./CategoryModal";

type Props = {
    list: ICategory[];
    onDeleteClickHnd: (data: ICategory) => void;
    onEdit: (data: ICategory) => void;
};

const CategoryList = (props: Props) => {
    const { list, onDeleteClickHnd, onEdit } = props;
    const [showModal, setShowModal] = useState(false);
    const [dataToShow, setDataToShow] = useState<ICategory | null>(null);

    const viewCategory = (data: ICategory) => {
        setDataToShow(data);
        setShowModal(true);
    };

    const onCloseModal = () => setShowModal(false);

    return (
        <div>
            <article>
                <h3 className="list-header">Lista de Categorias</h3>
            </article>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((category) => {
                        return (
                            <tr key={category.id}>
                                <td>{category.name}</td>
                                <td>{category.description.substring(0, 50)}...</td>
                                <td>
                                    <div>
                                        <input type="button" value="Visualizar" onClick={() => viewCategory(category)} />
                                        <input type="button" value="Editar" onClick={() => onEdit(category)} />
                                        <input type="button" value="Excluir" onClick={() => onDeleteClickHnd(category)} />
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            {showModal && dataToShow !== null && (
                <CategoryModal onClose={onCloseModal} data={dataToShow} />
            )}
        </div>
    );
};

export default CategoryList;