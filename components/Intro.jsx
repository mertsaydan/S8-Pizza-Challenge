import './intro.css';
import { useHistory } from 'react-router-dom';
import Nav from './Nav.jsx';
import Suggest from './Suggest.jsx';
import Products from './Products.jsx';
import Header from './Header';

export default function Intro() {
  const history = useHistory();
  const handleClick = () => {
    history.push('/order-form');
  };
  return (
    <>
      <Header handleClick={handleClick} />
      <Nav />
      <Suggest handleClick={handleClick} />
      <Nav />
      <Products />
    </>
  )
}