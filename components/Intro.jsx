import './intro.css';
import { useHistory } from 'react-router-dom';
import logo from '../images/iteration-1-images/logo.svg';

export default function Intro() {
  const history = useHistory();
  const handleClick = () => {
    history.push('/order-form');
  };
  return (
    <header className="intro">
        <img className="logo" src={logo} alt="Logo" />
        <h1 className="title">KOD ACIKTIRIR <br/>PİZZA, DOYURUR</h1>
        <button className="button" onClick={handleClick}>Acıktım</button>
    </header>
    
    )}