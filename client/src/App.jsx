import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Pages
import Home from '../Pages/Home/Home';
// Components
import UserSignUpForm from '../Components/UserSignUpForm/UserSignUpForm';
import './App.css'
import 'flowbite'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<UserSignUpForm />} />
      </Routes>
    </Router>
  );
}

export default App