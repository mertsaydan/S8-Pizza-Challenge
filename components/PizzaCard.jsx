import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Input, FormGroup, Label } from 'reactstrap';
import PizzaSize from './PizzaSize';
import PizzaDough from './PizzaDough';
import PizzaExtras from './PizzaExtras';
import PizzaNotes from './PizzaNotes';
import PizzaFormSubmit from './PizzaFormSubmit';


export default function PizzaCard({ extras, pizzas, totalPrice, handleChange, size, dough, selectedExtras, name, orderNote, errors, setErrors }) {
    return (
        <>
            <main className="order-form-main">
                <section className="pizza-card">
                    <div className="pizza-card-head">
                        <div>
                            <h2 className="pizza-card-title">{pizzas[0].name}</h2>

                        </div>
                        <div className="pizza-card-rating">
                            <p className="pizza-card-price">{pizzas[0].price} ₺</p>
                            <span className="pizza-card-rating-value">{pizzas[0].rating}</span>
                            <span className="pizza-card-rating-count">({pizzas[0].ratingCount})</span>
                        </div>
                    </div>

                    <p className="pizza-card-description">
                        Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.
                    </p>
                    <div className="pizza-card-form">
                        <Form>
                            <div className="pizza-card-form-top">
                                <PizzaSize handleChange={handleChange} size={size} errors={errors} />
                                <PizzaDough handleChange={handleChange} dough={dough} errors={errors} />
                            </div>
                        <PizzaExtras extras={extras} handleChange={handleChange} selectedExtras={selectedExtras} errors={errors} />
                            <PizzaNotes handleChange={handleChange} errors={errors} />
                            <PizzaFormSubmit totalPrice={totalPrice} handleChange={handleChange} size={size} dough={dough} selectedExtras={selectedExtras} name={name} orderNote={orderNote} errors={errors} setErrors={setErrors} />
                        </Form>
                    </div>
                </section>
            </main>
        </>
    )
}