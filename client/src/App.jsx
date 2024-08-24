import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { useState } from 'react';

import './App.css';
import 'flowbite';

// Pages
import Home from '../Pages/Home/Home';
import UserProfile from '../Pages/UserProfile/UserProfile';
import EventDetails from '../Pages/EventDetails/EventDetails';

// Components
import UserSignUpForm from '../Components/UserSignUpForm/UserSignUpForm';
import NavBar from '../Components/NavBar/NavBar';

function App() {
  return (
    <Router>
      <NavBarHandler />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<UserSignUpForm />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/users/:id" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

function NavBarHandler() {
  const location = useLocation();
  console.log(location.pathname);
  const showNavBar = location.pathname !== '/SIGNUP';

  return <>{showNavBar && <NavBar />}</>;
}

export default App;
