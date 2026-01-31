import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from './Components/NavBar.jsx'
import Footer from './Components/Footer.jsx'
import Home from './Pages/Home.jsx'
import Appointment from './Pages/Appointment.jsx'
import Doctor from './Pages/Doctor.jsx'
import NotFound from './Pages/NotFound.jsx'


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/doctors" element={<Doctor />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        </BrowserRouter>
    </div>
  )
}
