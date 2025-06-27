import { IEmployee } from "./Employee.type";
import "./EmployeeModal.style.css";

type Props = {
    onClose: () => void;
    data: IEmployee;
};

const EmployeeModal = (props: Props) => {
    const { onClose, data } = props;

    return (
        <div id="myModal" className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h3>Detalhes do Funcionário</h3>
                <div>
                    <label><strong>Nome:</strong> {data.name}</label>
                </div>
                <div>
                    <label><strong>Matrícula:</strong> {data.registrationNumber}</label>
                </div>
                <div>
                    <label><strong>Cargo:</strong> {data.position}</label>
                </div>
            </div>
        </div>
    );
};

export default EmployeeModal;