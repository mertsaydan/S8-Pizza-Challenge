import { Link } from 'react-router-dom';
import './OrderForm.css';
import logo from '../images/iteration-1-images/logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Input, FormGroup, Label } from 'reactstrap';
import Header from './PizzaHeader';
import PizzaCard from './PizzaCard';
import { useState } from 'react';
import Footer from './Footer';



const extras = ["Pepperoni", "Tavuk Izgara", "Mısır", "Sarımsak", "Ananas",
    "Sosis", "Soğan", "Sucuk", "Biber", "Kabak", "Kanada Jambonu", "Domates", 
    "Jalapeño", "Zeytin"]
const pizzas = [
    {name: "Position Absolute Acı Pizza", price: "85.50", rating: "4.9", ratingCount: "200"}
]
export default function OrderForm() {
    const [size, setSize] = useState("");
    const [dough, setDough] = useState("");
    const [selectedExtras, setSelectedExtras] = useState([]);
    const [name, setName] = useState("");
    const [orderNote, setOrderNote] = useState("");
    const [errors, setErrors] = useState({});
    const basePrice = parseFloat(pizzas[0].price);
    
    const calculateTotalPrice = (sizeVal, doughVal, extrasArr) => {
        let total = basePrice;
        
        if (sizeVal === "M") total += 10;
        else if (sizeVal === "L") total += 20;
        
        if (doughVal === "thick") total += 5;
            
        total += extrasArr.length * 5;
        
        return total.toFixed(2);
    };
    
    const handleChange = (event) => {
        const { name, value, checked } = event.target;
        
        if (name === "size") {
            setSize(value);
            setErrors(prev => ({ ...prev, size: undefined }));
        } else if (name === "dough") {
            setDough(value);
            setErrors(prev => ({ ...prev, dough: undefined }));
        } else if (name === "extra") {
            if (checked) {
                if (selectedExtras.length < 10) {
                    setSelectedExtras([...selectedExtras, value]);
                    setErrors(prev => ({ ...prev, extras: undefined }));
                } else {
                    setErrors(prev => ({ ...prev, extras: "En fazla 10 ek malzeme seçebilirsiniz." }));
                }
            } else {
                setSelectedExtras(selectedExtras.filter(extra => extra !== value));
                setErrors(prev => ({ ...prev, extras: undefined }));
            }
        } else if (name === "name") {
            setName(value);
            setErrors(prev => ({ ...prev, name: undefined }));
        } else if (name === "orderNote") {
            setOrderNote(value);
        }
    };
    
    const totalPrice = calculateTotalPrice(size, dough, selectedExtras);
    
    return (
        <>
            <Header />
            <PizzaCard extras={extras} pizzas={pizzas} totalPrice={totalPrice} handleChange={handleChange} 
            size={size} dough={dough} selectedExtras={selectedExtras} name={name} orderNote={orderNote} errors={errors} setErrors={setErrors} />
            <Footer />
        </>
    )
}
