
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from './Components/Hero/Herosection';
import ContactUs from './Components/Hero/Contact';
import SignUp from './Components/Login/Signup';
import CryptoPrice from './Components/CryptoPrice/CryptoCoins';
import Signin from './Components/Login/Signin';

function App() {
    return (
          <>
            <BrowserRouter>
                <Routes>
                <Route exact path="/" element={<Hero />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/crypto" element={<CryptoPrice />} />
                <Route path="/signin" element={<Signin />} />
                </Routes>
            </BrowserRouter>
          </>
    );
  }
export default App;

