import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Input, FormGroup, Label, FormFeedback } from 'reactstrap';


export default function PizzaDough({ handleChange, dough, errors }) {
    return (
            <div>
                <FormGroup className="pizza-card-form-dough">
                    <Label for="dough" className="pizza-card-form-dough-legend">Hamur Seç <span>*</span></Label>
                    <Input type="select" className="pizza-card-form-dough-select" name="dough" id="dough" onChange={handleChange} value={dough} invalid={!!errors.dough} required>
                        <option value="">Hamur Tipi Seçiniz</option>
                        <option value="thin">İnce</option>
                        <option value="thick">Kalın</option>
                    </Input>
                    {errors.dough && <FormFeedback className="d-block">{errors.dough}</FormFeedback>}
                </FormGroup>
            </div>
    )}