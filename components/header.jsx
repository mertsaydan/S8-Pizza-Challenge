import logo from '../images/iteration-1-images/logo.svg';
import './Header.css';

export default function Header({ handleClick }) {
    return (
        <header className="intro">
              <img className="logo" src={logo} alt="Logo" />
              <p className="subtitle">fırsatı kaçırma</p>
              <h1 className="title">KOD ACIKTIRIR <br />PİZZA, DOYURUR</h1>
              <button className="button" onClick={handleClick}>Acıktım</button>
            </header>
    )
}