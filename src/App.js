import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import HotDeals from './components/HotDeals';
import About from './components/About';
import Products from './components/Products/Products';
import TrustedCompanies from './components/TrustedCompanies';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header/>
      <Home/>
      <TrustedCompanies/>
      <HotDeals/>
      <About/>
      <Products/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;
