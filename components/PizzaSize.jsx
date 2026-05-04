import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Input, FormGroup, Label } from 'reactstrap';

export default function PizzaSize({ handleChange }) {
  return (<div>
    <legend className="pizza-card-form-size-legend">Boyut Seç <span>*</span></legend>
    <FormGroup check className="pizza-card-form-size" >
      <Label check>
        <Input type="radio" name="size" id="small" value="small" onChange={handleChange} />{" "}
        Küçük
      </Label>
    </FormGroup>
    <FormGroup check className="pizza-card-form-size" >
      <Label check>
        <Input type="radio" name="size" id="medium" value="medium" onChange={handleChange} />{" "}
        Orta
      </Label>
    </FormGroup>
    <FormGroup check className="pizza-card-form-size" >
      <Label check>
        <Input type="radio" name="size" id="large" value="large" onChange={handleChange} /> {" "}
        Büyük
      </Label>
    </FormGroup>
  </div>
  )
}