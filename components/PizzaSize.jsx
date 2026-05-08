import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Input, FormGroup, Label, FormFeedback } from 'reactstrap';
import './PizzaSize.css';

export default function PizzaSize({ handleChange, size, errors }) {
  return (
    <>
      <div>
        <legend className="pizza-card-form-size-legend">Boyut Seç <span>*</span></legend>
        <div className="pizza-card-form-size-container">
          <FormGroup check className="pizza-card-form-size" >
            <Label check>
              <Input type="radio" name="size" id="small" value="S" onChange={handleChange} checked={size === "S"} required invalid={!!errors.size} />{" "}
              <span className="circle">S</span>
            </Label>
          </FormGroup>
          <FormGroup check className="pizza-card-form-size" >
            <Label check>
              <Input type="radio" name="size" id="medium" value="M" onChange={handleChange} checked={size === "M"} required invalid={!!errors.size} />{" "}
              <span className="circle">M</span>
            </Label>
          </FormGroup>
          <FormGroup check className="pizza-card-form-size" >
            <Label check>
              <Input type="radio" name="size" id="large" value="L" onChange={handleChange} checked={size === "L"} required invalid={!!errors.size} /> {" "}
              <span className="circle">L</span>
            </Label>
          </FormGroup>
        </div>
        {errors.size && <FormFeedback className="d-block">{errors.size}</FormFeedback>}
      </div>
    </>
  )
}