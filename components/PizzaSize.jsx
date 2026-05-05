import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Input, FormGroup, Label, FormFeedback } from 'reactstrap';

export default function PizzaSize({ handleChange, size, errors }) {
  return (<div>
    <legend className="pizza-card-form-size-legend">Boyut Seç <span>*</span></legend>
    <FormGroup check className="pizza-card-form-size" >
      <Label check>
        <Input type="radio" name="size" id="small" value="small" onChange={handleChange} checked={size === "small"} required invalid={!!errors.size} />{" "}
        Küçük
      </Label>
    </FormGroup>
    <FormGroup check className="pizza-card-form-size" >
      <Label check>
        <Input type="radio" name="size" id="medium" value="medium" onChange={handleChange} checked={size === "medium"} required invalid={!!errors.size} />{" "}
        Orta
      </Label>
    </FormGroup>
    <FormGroup check className="pizza-card-form-size" >
      <Label check>
        <Input type="radio" name="size" id="large" value="large" onChange={handleChange} checked={size === "large"} required invalid={!!errors.size} /> {" "}
        Büyük
      </Label>
    </FormGroup>
    {errors.size && <FormFeedback className="d-block">{errors.size}</FormFeedback>}
  </div>
  )
}