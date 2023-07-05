import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from 'react';
import Header from "./Components/Header.jsx";
import Contact from './Components/Contact.jsx';
import Whyjoin from './Components/Whyjoin.jsx';
import Footer from './Components/Footer.jsx';
import Home from './Components/Home.jsx';
import DesignedPlans from './Components/DesignedPlans.jsx';
import Tasks from './Components/tasks/Tasks.jsx';
import Challenges from './challenges/Challenges.jsx';
import Login from './Components/Login/Login.js';
import Register from './Components/register/Register.jsx';


function App() {

  const [user, setLoginUser] = useState({});

  return (

    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={user && user._id ? <Home /> : <Login setLoginUser={setLoginUser} />} />
        <Route path="/login" element={<Login setLoginUser={setLoginUser} />} />
        <Route path="/register" element={<Register />} />
        <Route path='/home' element={<Home />} />
        <Route path='/Whyjoin' element={<Whyjoin />} />
        <Route path='/Challenges' element={<Challenges />} />
        <Route path='/Tasks' element={<Tasks />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/DesignedPlans' element={<DesignedPlans />} />
      </Routes>

      <Footer />
    </BrowserRouter>

  );
}

export default App;
