import React from 'react'
import Home from './Home';
import {Route, Routes} from 'react-router-dom';
import Address from './components/Address';
import Payment from './components/Payment';
import Confirmation from './components/Confirmation';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/address" element={<Address />} />
      <Route path="/payment" element={<Payment />} />
      <Route path = "/confirmation" element={<Confirmation />} />
    </Routes>
  )
}

export default App