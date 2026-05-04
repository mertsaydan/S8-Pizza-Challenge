import { Link } from 'react-router-dom';
import logo from '../images/iteration-1-images/logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
  return (
    <header className="order-form-header">
      <div className="order-form-header-inner">
        <img src={logo} alt="Logo" className="order-form-logo" />
        <div className="order-form-header-title">

          <p className="order-form-breadcrumb">
            <Link to="/" className="breadcrumb-link">Anasayfa</Link>
            <span>-</span>
            <Link to="/order-form" className="breadcrumb-link active">Sipariş Oluştur</Link>
          </p>
        </div>
      </div>
    </header>
  )
}