import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import "flowbite";

// Pages
import Home from "../Pages/Home/Home";
import UserProfile from '../Pages/UserProfile/UserProfile';
import EventDetails from '../Pages/EventDetails/EventDetails';

// Components
import UserSignUpForm from '../Components/UserSignUpForm/UserSignUpForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<UserSignUpForm />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/users/:id" element={<UserProfile />} />
      </Routes>
    </Router>
  );
} 

export default App;
