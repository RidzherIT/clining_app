import React from "react";
import Main from "./pages/Main";
import './scss/style.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Admin from "./pages/Admin";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}