import React from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { BrowserRouter, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import About from './components/About';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Switch>
        <Navbar/> 
       <About/>
          <Route exact path='/' component={Home}></Route> 
          <Route path='/about' component={About}></Route> 
          {/* <Route path='/about' component={About}></Route>
          <Route path='/about' component={About}></Route>
          <Route path='/about' component={About}></Route> */}
       </Switch>
      </BrowserRouter> 
     
    </div>
  )
}
export default App;
