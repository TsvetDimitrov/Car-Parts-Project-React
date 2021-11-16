import { Routes, Route, Redirect } from 'react-router-dom';
import "./App.css";


import Home from './components/Home/Home.js';
import Navigation from "./components/Navigation/Navigation.js";
import Register from './components/Register/Register.js';
import Login from './components/Login/Login.js';
import Footer from './components/Footer/Footer.js';
import AboutUs from './components/AboutUs/AboutUs.js';
import Buyout from './components/Buyout/Buyout.js';
import Page404 from './components/Page404/Page404.js';
import Create from './components/Create/Create.js';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/aboutUs" element={<AboutUs />} />
        <Route exact path="/izkupuvane" element={<Buyout />} />
        <Route exact path="/create" element={<Create />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
