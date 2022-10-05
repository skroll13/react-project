import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from "./pages/home"; 
import Header from './components/header/index'
import AddExpense from './pages/add-expense/index'
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path ="/" exact component={Home} />
        <Route path ="/add-expense" component={AddExpense} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App;
