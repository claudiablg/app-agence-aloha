import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from '@aloha/components';
import { Home, Agency, Contact, Blog, Activities, Expertise, Login } from '@aloha/pages';

import './App.css'

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/app" element={<Login />}></Route>
      <Route path="/agence" element={<Agency />}></Route>
      <Route path="/secteurs-activites" element={<Activities />}></Route>
      <Route path="/expertises" element={<Expertise />}></Route>
      <Route path="/blog" element={<Blog />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="*" element={<Navigate to="/"/>}></Route>
    </Routes>
    </>
  )
}

export default App
