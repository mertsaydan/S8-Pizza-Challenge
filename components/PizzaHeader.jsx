import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PizzaHeader.css';

export default function Header() {
  return (
    <header className="order-form-header">
      <div className="order-form-header-inner">
        <img src="/logo.svg" alt="Logo" className="order-form-logo" />
      </div>
    </header>
  )
}