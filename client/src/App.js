import { Routes, Route, Redirect } from 'react-router-dom';
import "./App.css";


import Home from './components/Home/Home.js';
import Navigation from "./components/Navigation/Navigation.js";
import Register from './components/Register/Register.js';
import Login from './components/Login/Login.js';
import Footer from './components/Footer/Footer.js';
import AboutUs from './components/AboutUs/AboutUs.js';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/aboutUs" element={<AboutUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
