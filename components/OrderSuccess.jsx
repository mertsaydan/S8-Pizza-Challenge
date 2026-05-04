import logo from '../images/iteration-1-images/logo.svg';
export default function OrderSuccess() {
    return (
        <div className="order-success">
             <img src={logo} alt="Logo" className="order-form-logo" />
            <h1 className="order-success-title">Tebrikler! <br />Siparişiniz Alındı!</h1>
        </div>
    )
}