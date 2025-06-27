import { useState } from "react";
import { IEmployee } from "./Employee.type";
import "./EmployeeList.style.css";
import EmployeeModal from "./EmployeeModal";

type Props = {
    list: IEmployee[];
    onDeleteClickHnd: (data: IEmployee) => void;
    onEdit: (data: IEmployee) => void;
};

const EmployeeList = (props: Props) => {
    const { list, onDeleteClickHnd, onEdit } = props;
    const [showModal, setShowModal] = useState(false);
    const [dataToShow, setDataToShow] = useState<IEmployee | null>(null);

    const viewEmployee = (data: IEmployee) => {
        setDataToShow(data);
        setShowModal(true);
    };

    const onCloseModal = () => setShowModal(false);

return (
    <div>
        <article>
            <h3 className="list-header">Lista de Funcionários</h3>
        </article>
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Matrícula</th>
                    <th>Cargo</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {list.map((employee) => {
                    return (
                        <tr key={employee.id}>
                            <td>{employee.name}</td>
                            <td>{employee.registrationNumber}</td>
                            <td>{employee.position}</td>
                            <td>
                                <div>
                                    <input type="button" value="Visualizar" onClick={() => viewEmployee(employee)} />
                                    <input type="button" value="Editar" onClick={() => onEdit(employee)} />
                                    <input type="button" value="Excluir" onClick={() => onDeleteClickHnd(employee)} />
                                </div>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
            {showModal && dataToShow !== null && (
            <EmployeeModal onClose={onCloseModal} data={dataToShow} />
            )}
    </div>
    );
};

export default EmployeeList;