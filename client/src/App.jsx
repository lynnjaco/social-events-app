import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Pages
import Home from '../Pages/Home/Home';
import UserProfile from '../Pages/UserProfile/UserProfile';
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
        <Route path="users/:id" element={<UserProfile />} />
      </Routes>
    </Router>
  );
} 

export default App