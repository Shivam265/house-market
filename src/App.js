import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomePage from "./Pages/HomePage";
import Offers from "./Pages/Offers";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="offers" element={<Offers/>} />
      <Route path="signin" element={<Signin/>} />
      <Route path="signup" element={<Signup/>} />
      <Route path="offers" element={<Signup/>} />
      <Route path="offers" element={<Offers/>} />
      
    </Routes>

       </BrowserRouter>
  );
}

export default App;
