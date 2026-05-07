import './intro.css';
import { useHistory } from 'react-router-dom';

import Nav from './Nav';
import Suggest from './Suggest';
import Products from './Products';
import Footer from './Footer';
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
    <Footer />
    </>
  )
}