import { Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

export default function PizzaFormSubmit({ totalPrice, size, dough, selectedExtras }) {
    const [count, setCount] = useState(1);

    const calculateSelectionsTotal = () => {
        let total = 0;

        if (size === "medium") total += 10;
        else if (size === "large") total += 20;

        if (dough === "thick") total += 5;

        total += (selectedExtras?.length || 0) * 5;

        return total.toFixed(2);
    };

    const handleIncrement = (e) => {
        e.preventDefault();
        setCount(count + 1);
    };

    const handleDecrement = (e) => {
        e.preventDefault();
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const finalTotal = (parseFloat(totalPrice) * count).toFixed(2);

    return (
        <div className="pizza-card-form-bottom">
            <div className="pizza-card-form-count">
                <button className="pizza-card-form-count-button" onClick={handleDecrement}>-</button>
                <span className="pizza-card-form-count-value">{count}</span>
                <button className="pizza-card-form-count-button" onClick={handleIncrement}>+</button>
            </div>
            <div className="pizza-card-form-total">
                <div className="pizza-card-form-total-container">
                    <p className="pizza-card-form-total-label">Sipariş Toplamı</p>
                    <div className="pizza-card-form-total-extra">
                        <p>Seçimler </p> <span>{calculateSelectionsTotal()} ₺</span>
                    </div>
                    <div className="pizza-card-form-total-price">
                        <p>Toplam </p><span>{finalTotal} ₺</span>
                    </div>
                </div>
                <button className="pizza-card-form-submit-button">Siparişi Tamamla</button>
            </div>

        </div>
    )
}