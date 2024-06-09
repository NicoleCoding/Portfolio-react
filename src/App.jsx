import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Switch, Router, Route } from "wouter";


function App() {

  return (
    <div className="min-h-screen flex flex-col w-screen">
     <Header />
     <Router>
        <main className="flex-grow pt-16 px-4 md:px-0">
        <Switch>
          <Route path="/" component={Home}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
        </main>
      </Router>
      <Footer />
    </div>
  )
}

export default App
