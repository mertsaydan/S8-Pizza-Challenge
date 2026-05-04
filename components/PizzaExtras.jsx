import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Input, FormGroup, Label } from 'reactstrap';


export default function PizzaExtras({ extras, handleChange }) {
    return (
        <>
            <div className="pizza-card-form-checkbox-header">
                <h3>Ek Malzemeler</h3>
                <p>En fazla 10 tane malzeme seçebilirsiniz. 5₺</p>
            </div>
            <div className="pizza-card-form-checkboxes">
                {extras.map((extra, index) => (
                    <FormGroup check key={index} className="pizza-card-form-checkbox">
                        <Label check>
                            <Input type="checkbox" name="extra" id={`extra-${index}`} onChange={handleChange} />{" "}
                            {extra}
                        </Label>
                    </FormGroup>
                ))}
            </div>
        </>

    )
}