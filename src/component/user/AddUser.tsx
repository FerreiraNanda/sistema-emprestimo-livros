import { useState } from "react";
import { IUser } from "./User.type";
import "./UserForm.style.css";

type Props = {
    onBackBtnClickHnd: () => void;
    onSubmitClickHnd: (data: IUser) => void;
};

const AddUser = (props: Props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");

    const { onBackBtnClickHnd, onSubmitClickHnd } = props;

    const onSubmitBtnClickHnd = (e: React.FormEvent) => {
        e.preventDefault();
        const data: IUser = {
            id: new Date().toJSON().toString(),
            name: name,
            email: email,
            telefone: telefone
        };
        onSubmitClickHnd(data);
        onBackBtnClickHnd();
    };

    return (
        <div className="form-container">
            <div>
                <h3>Adicionar Usuário</h3>
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
                    <label>Email: </label>
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
                        type="tel" 
                        value={telefone} 
                        onChange={(e) => setTelefone(e.target.value)} 
                        required
                    />
                </div>
                <div>
                    <input type="button" value="Voltar" onClick={onBackBtnClickHnd} />
                    <input type="submit" value="Adicionar Usuário" />
                </div>
            </form>
        </div>
    );
};

export default AddUser;