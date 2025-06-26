import { useState } from "react";
import { IUser } from "./User.type";
import "./UserList.style.css";
import UserModal from "./UserModal";

type Props = {
    list: IUser[];
    onDeleteClickHnd: (data: IUser) => void;
    onEdit: (data: IUser) => void;
};

const UserList = (props: Props) => {
    const { list, onDeleteClickHnd, onEdit } = props;
    const [showModal, setShowModal] = useState(false);
    const [dataToShow, setDataToShow] = useState(null as IUser | null);

    const viewUser = (data: IUser) => {
        setDataToShow(data);
        setShowModal(true);
    };

    const onCloseModal = () => setShowModal(false);

    return (
        <div>
            <article>
                <h3 className="list-header">Lista de Usuários</h3>
            </article>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Telefone</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((user) => {
                        return (
                            <tr key={user.id}>
                                <td>{user.nome}</td>
                                <td>{user.email}</td>
                                <td>{user.telefone || "-"}</td>
                                <td>
                                    <div>
                                        <input type="button" value="Visualizar" onClick={() => viewUser(user)} />
                                        <input type="button" value="Editar" onClick={() => onEdit(user)} />
                                        <input type="button" value="Excluir" onClick={() => onDeleteClickHnd(user)} />
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            {showModal && dataToShow !== null && (
                <UserModal onClose={onCloseModal} data={dataToShow} />
            )}
        </div>
    );
};

export default UserList;