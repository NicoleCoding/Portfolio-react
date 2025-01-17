import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Project from "./pages/Project";
import { Switch, Router, Route } from "wouter";


function App() {

  return (
    <div className="min-h-screen flex flex-col w-full">
     <Header />
     <Router>
        <main className="flex-grow pt-6 px-4 md:px-0 py-0">
        <Switch>
          <Route path="/" component={Home}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/projects/:id" component={Project}/>
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
