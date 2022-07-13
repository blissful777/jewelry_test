import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Info from './components/Info/Info'
import Slider from './components/Slider/Slider'
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Routes>
        <Route path="/" element={<Info />} />
        <Route path="/slider" element={<Slider />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
