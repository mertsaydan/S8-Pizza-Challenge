import { Link } from 'react-router-dom';
import logo from '../images/iteration-1-images/logo.svg';
import './OrderForm.css';

export default function OrderForm() {
  return (
    <header className="order-form-header">
      <section className="order-form">
        <div className="order-form-logo">
          <img src={logo} alt="Teknolojik Yemekler" />
        </div>
        <div className="order-form-nav">
          <Link to="/" className="order-form-link-home">Anasayfa</Link>
          <span>-</span>
          <Link to="/order-form" className="order-form-link">Sipariş Oluştur</Link>
        </div>
      </section>
    </header>
  )
}
