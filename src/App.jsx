import './App.css'
import { Route, Switch } from 'react-router-dom'
import Intro from '../components/intro'
import OrderForm from '../components/OrderForm'

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Intro} />
      <Route path="/order-form" component={OrderForm} />
    </Switch>
  )
}
