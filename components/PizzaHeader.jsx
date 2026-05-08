import { Link } from 'react-router-dom';
import logo from '../images/iteration-1-images/logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PizzaHeader.css';

export default function Header() {
  return (
    <header className="order-form-header">
      <div className="order-form-header-inner">
        <img src={logo} alt="Logo" className="order-form-logo" />
      </div>
    </header>
  )
}