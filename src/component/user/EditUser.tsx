
import { useState } from "react";
import { IUser } from "./User.type";
import "./UserForm.style.css";

type Props = {
    data: IUser;
    onBackBtnClickHnd: () => void;
    onUpdateClickHnd: (data: IUser) => void;
};

const EditUser = (props: Props) => {
    const { data, onBackBtnClickHnd, onUpdateClickHnd } = props;

    const [name, setNome] = useState(data.name);
    const [email, setEmail] = useState(data.email);
    const [telefone, setTelefone] = useState(data.telefone || "");

    const onSubmitBtnClickHnd = (e: React.FormEvent) => {
        e.preventDefault();

        const updatedData: IUser = {
            id: data.id,
            name,
            email,
            telefone
        };

        onUpdateClickHnd(updatedData);
        onBackBtnClickHnd();
    };

    return (
        <div className="form-container">
            <div>
                <h3>Editar Usuário</h3>
            </div>
            <form onSubmit={onSubmitBtnClickHnd}>
                <div>
                    <label>Nome: </label>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setNome(e.target.value)} 
                        required
                    />
                </div>
                <div>
                    <label>E-mail: </label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required
                    />
                </div>
                <div>
                    <label>Telefone: </label>
                    <input 
                        type="text" 
                        value={telefone} 
                        onChange={(e) => setTelefone(e.target.value)}
                    />
                </div>
                <div>
                    <input type="button" value="Voltar" onClick={onBackBtnClickHnd} />
                    <input type="submit" value="Atualizar Usuário" />
                </div>
            </form>
        </div>
    );
};

export default EditUser;