import logo from '../images/iteration-1-images/logo.svg';
import { useLocation } from 'react-router-dom';
import './OrderSuccess.css';
import Footer from './Footer';

export default function OrderSuccess() {
    const location = useLocation();
    const order = location.state?.order;

    return (
        <>
            <div className="order-success">
                <img src={logo} alt="Logo" className="order-form-logo" />
                <p className="order-success-subtitle">lezzetin yolda</p>
                <h1 className="order-success-title">Tebrikler! <br />Siparişiniz Alındı!</h1>
                {order ? (
                    <div className="order-success-summary">
                        <h2>Sipariş Özeti</h2>
                        <p>Sayın <strong>{order.isim}</strong>, siparişiniz başarıyla alınmıştır.</p>
                        <p><strong>{order.quantity}</strong> adet <strong>{order.boyut}</strong> boy, <strong>{order.hamur === 'thin' ? 'İnce' : 'Kalın'}</strong> hamurlu, Position Absolute Acı Pizza sipariş ettiniz.</p>
                        <p>Ekstra malzemeler olarak <strong>{order.malzemeler?.join(', ')}</strong> seçtiniz.</p>
                        <p>Toplam ödemeniz <strong>{order.totalPrice} ₺</strong>'dir.</p>
                        <p>Sipariş notunuz: <strong>{order.özel || 'Yok'}</strong>.</p>
                        <p>Siparişiniz en kısa sürede hazırlanıp size teslim edilecektir. Afiyet olsun!</p>
                    </div>
                ) : (
                    <p>Sipariş özeti yüklenemedi. Lütfen formu yeniden doldurup göndermeyi deneyin.</p>
                )}
            </div>
            <Footer />
        </>

    )
}