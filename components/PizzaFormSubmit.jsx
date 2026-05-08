import { Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './PizzaFormSubmit.css';

const apiKey = import.meta.env.VITE_API_KEY;

let buttonDisabled = false;
export default function PizzaFormSubmit({ totalPrice, size, dough, selectedExtras,
    name, orderNote, errors, setErrors, pizzas, setLastOrder }) {
    const [count, setCount] = useState(1);
    const history = useHistory();

    const calculateSelectionsTotal = () => {
        let total = 0;

        if (size === "M") total += 10;
        else if (size === "L") total += 20;
        if (dough === "thick") total += 5;
        total += (selectedExtras?.length || 0) * 5;
        return total.toFixed(2);
    };
    
    const isDecrementDisabled = count <= 1;

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
    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = {};
        let isValid = true;
        if (!name || name.length < 3) {
            newErrors.name = "İsim en az 3 karakter olmalıdır.";
            isValid = false;
        }
        if (selectedExtras.length > 10) {
            newErrors.extras = "En fazla 10 ek malzeme seçebilirsiniz.";
            isValid = false;
        }
        if (!size) {
            newErrors.size = "Boyut seçmelisiniz.";
            isValid = false;
        }
        if (!dough) {
            newErrors.dough = "Hamur seçmelisiniz.";
            isValid = false;
        }

        setErrors(newErrors);

        if (!isValid) {
            return;
        }

        try {
            const payload = {
                isim: name,
                pizza: pizzas[0].name,
                boyut: size,
                hamur: dough,
                malzemeler: selectedExtras,
                özel: orderNote,
                quantity: count,
                totalPrice: (parseFloat(totalPrice) * count).toFixed(2)
            };

            const response = await axios.post('https://reqres.in/api/users', payload, {
                headers: {
                    'x-api-key': apiKey
                }
            });
            setLastOrder(payload);
            console.log('Order submitted successfully:', response.data);
            console.log('Sent payload:', payload);
            history.push('/order-success');
            
        } catch (error) {
            console.error('Error submitting order:', error);
        }
    }

    const finalTotal = (parseFloat(totalPrice) * count).toFixed(2);
    return (
        <div className="pizza-card-form-bottom">
            <div className="pizza-card-form-count">
                <button className="pizza-card-form-count-button" onClick={handleDecrement}
                    disabled={isDecrementDisabled}>
                    -
                </button>
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
                <button className="pizza-card-form-submit-button" onClick={handleSubmit}>
                    Siparişi Tamamla
                </button>
            </div>

        </div>
    )
}