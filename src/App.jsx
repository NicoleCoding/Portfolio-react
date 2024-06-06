import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Switch, Router, Route } from 'wouter';


function App() {

  return (
    <>
     <Header />
     <Router>
        <Switch>
          <Route path="/" component={Home}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
      </Router>
      <Footer />
    </>
  )
}

export default App
