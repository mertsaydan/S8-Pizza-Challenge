import './App.css'
import { Route, Switch } from 'react-router-dom'
import Intro from '../components/Intro'
import OrderForm from '../components/OrderForm'
import OrderSuccess from '../components/OrderSuccess'
import { useState } from 'react';
import Footer from '../components/Footer'

export default function App() {
  const [lastOrder, setLastOrder] = useState(null);
 
  return (
    <Switch>
      <Route exact path="/">
      <Intro />
      <Footer />
      </Route>
      <Route path="/order-form">
      <OrderForm setLastOrder={setLastOrder}/>
      <Footer />
      </Route>
      <Route path="/order-success">
      <OrderSuccess order={lastOrder} />
      <Footer />
      </Route>
    </Switch>
  )
}
