import './App.css'
import { Route, Switch } from 'react-router-dom'
import Intro from '../components/intro'
import OrderForm from '../components/OrderForm'
import OrderSuccess from '../components/OrderSuccess'

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Intro} />
      <Route path="/order-form" component={OrderForm} />
      <Route path="/order-success" component={OrderSuccess} />
    </Switch>
  )
}
