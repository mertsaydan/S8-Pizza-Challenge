import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Input, FormGroup, Label} from 'reactstrap';


export default function PizzaDough({ handleChange }) {
    return (
            <div>
                <FormGroup className="pizza-card-form-dough">
                    <Label for="dough" className="pizza-card-form-dough-legend">Hamur Seç <span>*</span></Label>
                    <Input type="select" className="pizza-card-form-dough-select" name="dough" id="dough" onChange={handleChange}>
                        <option value="">Hamur Tipi Seçiniz</option>
                        <option value="thin">İnce</option>
                        <option value="thick">Kalın</option>
                    </Input>
                </FormGroup>
            </div>
    )}