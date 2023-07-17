import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop';

import Earphones from './pages/Earphones/Earphones';
import Headphones from './pages/Headphones/Headphones';
import Home from './pages/Home/Home';
import SharedLayout from './pages/SharedLayout';
import SingleProduct from './pages/SingleProduct/SingleProduct';
import Speakers from './pages/Speakers/Speakers';
import Checkout from './pages/Checkout/Checkout';
import ProtectedRoute from './pages/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="speakers" element={<Speakers />} />
          <Route path="earphones" element={<Earphones />} />
          <Route path="headphones" element={<Headphones />} /> 
          <Route path=":productTitle" element={<SingleProduct />} />
          <Route path="checkout" 
                 element={
                  <ProtectedRoute>
                    <Checkout />
                  </ProtectedRoute>
              } 
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
