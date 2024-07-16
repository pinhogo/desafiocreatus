import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../Pages/Login';
import List from '../Pages/List';
import React from 'react';

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/list" element={<List />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}