
import { useState } from "react";
import "./UserForm.style.css";
import { IUser } from "./User.type";

type Props = {
  onBackBtnClickHnd: () => void;
  onSubmitClickHnd: (data: IUser) => void;
};

const AddUser = (props: Props) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  
  const { onBackBtnClickHnd, onSubmitClickHnd } = props;

  const onSubmitBtnClickHnd = (e: React.FormEvent) => {
    e.preventDefault();

    const data: IUser = {
      id: new Date().toJSON().toString(),
      nome,
      email,
      telefone
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
          <label>Nome Completo: </label>
          <input 
            type="text" 
            value={nome} 
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
          <input type="submit" value="Adicionar Usuário" />
        </div>
      </form>
    </div>
  );
};

export default AddUser;