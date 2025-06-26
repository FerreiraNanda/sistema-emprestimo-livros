// components/user/UserModal.tsx
import { IUser } from "./User.type";
import "./UserModal.style.css";

type Props = {
    onClose: () => void;
    data: IUser;
};

const UserModal = (props: Props) => {
    const { onClose, data } = props;

    return (
        <div id="myModal" className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h3>Detalhes do Usuário</h3>
                <div>
                    <label>Nome: {data.nome}</label>
                </div>
                <div>
                    <label>Email: {data.email}</label>
                </div>
                <div>
                    <label>Telefone: {data.telefone || "Não informado"}</label>
                </div>
            </div>
        </div>
    );
};

export default UserModal;