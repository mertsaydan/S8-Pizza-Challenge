import { Link } from 'react-router-dom';
import './OrderForm.css';
import logo from '../images/iteration-1-images/logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Input, FormGroup, Label } from 'reactstrap';
import Header from './header';
import PizzaCard from './PizzaCard';
import { useState } from 'react';

const extras = ["Pepperoni", "Tavuk Izgara", "Mısır", "Sarımsak", "Ananas",
    "Sosis", "Soğan", "Sucuk", "Biber", "Kabak", "Kanada Jambonu", "Domates", 
    "Jalapeño", "Zeytin"]
const pizzas = [
    {name: "Position Absolute Acı Pizza", price: "85.50", rating: "4.9", ratingCount: "200"}
]
export default function OrderForm() {
    const [size, setSize] = useState("small");
    const [dough, setDough] = useState("thin");
    const [selectedExtras, setSelectedExtras] = useState([]);
    const basePrice = parseFloat(pizzas[0].price);
    
    const calculateTotalPrice = (sizeVal, doughVal, extrasArr) => {
        let total = basePrice;
        
        // Add size price
        if (sizeVal === "medium") total += 10;
        else if (sizeVal === "large") total += 20;
        
        // Add dough price
        if (doughVal === "thick") total += 5;
        
        // Add extras price
        total += extrasArr.length * 5;
        
        return total.toFixed(2);
    };
    
    const handleChange = (event) => {
        const { name, value, checked } = event.target;
        
        if (name === "size") {
            setSize(value);
        } else if (name === "dough") {
            setDough(value);
        } else if (name === "extra") {
            let newExtras;
            if (checked) {
                newExtras = [...selectedExtras, value];
            } else {
                newExtras = selectedExtras.filter(extra => extra !== value);
            }
            setSelectedExtras(newExtras);
        }
    };
    
    const totalPrice = calculateTotalPrice(size, dough, selectedExtras);
    
    return (
        <>
            <Header />
            <PizzaCard extras={extras} pizzas={pizzas} totalPrice={totalPrice} handleChange={handleChange} size={size} dough={dough} selectedExtras={selectedExtras} />
        </>
    )
}
