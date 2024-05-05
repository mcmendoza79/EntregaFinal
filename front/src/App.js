import React from 'react';

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import "./App.css";
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import Homepage from './pages/Homepage';
import Elcolegiopage from './pages/Elcolegiopage';
import Novedadespage from './pages/Novedadespage';
import Contactopage from './pages/Contactopage';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/'element={<Homepage/>}/>
        <Route path='/Home'element={<Homepage/>}/>
        <Route path='/ElColegio'element={<Elcolegiopage/>}/>
        <Route path='/Contacto'element={<Contactopage/>}/>
        <Route path='/Novedades'element={<Novedadespage/>}/>
      </Routes>
      </BrowserRouter>

      <Footer />
      </div>
      );
      }
      
export default App;
