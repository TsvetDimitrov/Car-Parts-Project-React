import { Routes, Route, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import "./App.css";

import { getUser } from './util/authService.js';
import Home from './components/Home/Home.js';
import Navigation from "./components/Navigation/Navigation.js";
import Register from './components/Register/Register.js';
import Login from './components/Login/Login.js';
import Logout from './components/Logout/Logout.js';
import Footer from './components/Footer/Footer.js';
import AboutUs from './components/AboutUs/AboutUs.js';
import Buyout from './components/Buyout/Buyout.js';
import BuyoutInfo from './components/Buyout/BuyoutSteps/BuyoutInfo.js';
import BuyoutImages from './components/Buyout/BuyoutSteps/BuyoutImages.js';
import Page404 from './components/Page404/Page404.js';
import Create from './components/Create/Create.js';
import PartsCatalog from './components/PartsCatalog/PartsCatalog.js';
import BrandCatalog from './components/PartsCatalog/BrandCatalog.js';
import Details from './components/Details/Details.js';
import Cart from './components/Cart/Cart.js';

function App() {
  const [userInfo, setUserInfo] = useState({ isAuthenticated: false, email: '', isAdmin: 0 });



  useEffect(() => {
    let user = getUser();
    console.log(user);
    setUserInfo({
      isAuthenticated: Boolean(user),
      email: user.email,
      isAdmin: user.isAdmin
    })

  }, []);

  const onLogin = (email, isAdmin) => {
    setUserInfo({
      isAuthenticated: true,
      email: email,
      isAdmin: isAdmin
    })
  }

  const onLogout = () => {
    setUserInfo({
      isAuthenticated: false,
      email: null,
      isAdmin: 0,
    })
  };
  
  return (
    <div className="App">
      <Navigation {...userInfo} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login onLogin={onLogin} />} />
        <Route exact path="/logout" element={<Logout onLogout={onLogout} />} />
        <Route exact path="/aboutUs" element={<AboutUs />} />
        <Route exact path="/izkupuvane" element={<Buyout />} />
        <Route exact path="/izkupuvane/info" element={<BuyoutInfo />} />
        <Route exact path="/izkupuvane/infopic" element={<BuyoutImages />} />
        <Route exact path="/create" element={<Create />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route path="*" element={<Page404 />} />
        <Route path="/products/:productCategory" element={<PartsCatalog />} />
        <Route path="/products/brand/:brandName" element={<BrandCatalog />} />
        <Route path="/product/:productId" element={<Details />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
