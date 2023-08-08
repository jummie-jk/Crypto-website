
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from './Components/Herosection';
import ContactUs from './Components/Contact';
import Login from './Components/Login';
import CryptoPrice from './Components/Crypto';

function App() {
    return (
          <>
            <BrowserRouter>
                <Routes>
                <Route exact path="/" element={<Hero />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/login" element={<Login />} />
                <Route path="/crypto" element={<CryptoPrice />} />
                </Routes>
            </BrowserRouter>
          </>
    );
  }
export default App;

