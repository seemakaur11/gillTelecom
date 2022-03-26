import React from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { BrowserRouter, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import About from './components/About';
import Services from './components/Services';
import Clients from './components/Clients';
import Contact from './components/Contact';

function App() {
  return (
    <div>
    <BrowserRouter>
        <Navbar/> 
      <Switch>
          <Route exact path='/' component={Home}></Route> 
          <Route exact path='/about' component={About}></Route> 
          <Route path='/about' component={Services}></Route>
          <Route path='/about' component={Clients}></Route>
          <Route path='/about' component={Contact}></Route>
       </Switch>
      </BrowserRouter> 
     
    </div>
  )
}
export default App;
