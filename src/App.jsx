import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth'
import Home from "./pages/Home";
import Login from "./pages/Login";
import Player from "./pages/Player";
import {Routes, Route} from "react-router-dom";
import { ToastContainer } from 'react-toastify';

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if(user) {
        console.log("Logged In");
        navigate("/");

      } else {
          console.log("Logged Out");
          navigate("/login");
      }
    })
  }, []);

  return (
    <div>
      <ToastContainer theme="dark" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
    </div>
  )
}

export default App;