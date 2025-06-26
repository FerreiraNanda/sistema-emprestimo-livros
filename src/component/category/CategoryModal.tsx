// src/component/category/CategoryModal.tsx
import { ICategory } from "./Category.type";
import "./CategoryModal.style.css";

type Props = {
    onClose: () => void;
    data: ICategory;
};

const CategoryModal = (props: Props) => {
    const { onClose, data } = props;

    return (
        <div id="myModal" className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h3>Detalhes da Categoria</h3>
                <div>
                    <label>Nome: {data.name}</label>
                </div>
                <div>
                    <label>Descrição: {data.description}</label>
                </div>
            </div>
        </div>
    );
};

export default CategoryModal;