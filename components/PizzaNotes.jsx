import { FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PizzaNotes.css';

export default function PizzaNotes({ handleChange, errors }) {
    return (
        <>
            <div className="pizza-card-form-name">
                <FormGroup>
                    <Label for="name" className="pizza-card-form-name-label">Adınız Soyadınız <span>*</span></Label>
                    <Input type="text" name="name" id="name" placeholder="Adınızı ve Soyadınızı Giriniz" className="pizza-card-form-name-input" onChange={handleChange} invalid={!!errors.name} />
                    {errors.name && <FormFeedback>{errors.name}</FormFeedback>}
                </FormGroup>
            </div>
            <div className="pizza-card-form-OrderNote">
                <FormGroup>
                    <Label for="orderNote" className="pizza-card-form-OrderNote-label">Sipariş Notu</Label>
                    <Input type="textarea" name="orderNote" id="orderNote" placeholder="Siparişinize eklemek istediğiniz bir not var mı?" className="pizza-card-form-OrderNote-input" onChange={handleChange} />
                </FormGroup>
            </div>
        </>
    )
}