import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import "./App.css";

import carBuyoutContext from './contexts/CarBuyoutContext.js';
import { getUser } from './util/authService.js';
import Home from './components/Home/Home.js';
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
import AllProductsCatalog from './components/PartsCatalog/AllProductsCatalog.js';
import Details from './components/Details/Details.js';
import Edit from './components/Edit/Edit.js';
import Cart from './components/Cart/Cart.js';
import CarRequests from './components/CarRequests/CarRequests.js';
import TermsOfUse from './components/TermsAndConditions/TermsOfUse.js';
import Navigation from './components/Navigation/Navigation.js';
import Register from './components/Register/Register.js';
import Logins from './components/Login/Logins.js';
import ConfirmEmail from './components/ConfirmEmail/ConfirmEmail.js';
import Checkout from './components/Checkout/Checkout.js';
import OrderSummary from './components/OrderSummary/OrderSummary.js';

function App() {
  const [userInfo, setUserInfo] = useState({ isAuthenticated: false, email: '', isAdmin: 0 });
  const [errorMessage, setErrorMessage] = useState('');
  const [carInfo, setCarInfo] = useState('');

  const handleClickShowError = (msg, timeout = 3000) => {
    setErrorMessage(msg);

    setTimeout(() => {
      setErrorMessage();
    }, timeout);
  }

  useEffect(() => {
    let user = getUser();
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
      <Navigation {...userInfo} handleClickShowError={handleClickShowError}/>
      {errorMessage &&
        <section id="notifications">
          <div id="errorBox" className="notification" style={errorMessage ? { display: "block" } : { display: "none" }}>
            <span>{errorMessage}</span>
          </div>
        </section>
      }
      <carBuyoutContext.Provider value={{ carInfo, setCarInfo }}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/register" element={<Register  onLogin={onLogin} handleClickShowError={handleClickShowError} />} />
          <Route exact path="/login" element={<Logins onLogin={onLogin} handleClickShowError={handleClickShowError} />} />
          <Route exact path="/logout" element={<Logout onLogout={onLogout} />} />
          <Route exact path="/aboutUs" element={<AboutUs />} />
          <Route exact path="/izkupuvane" element={<Buyout handleClickShowError={handleClickShowError}/>} />
          <Route exact path="/izkupuvane/info" element={<BuyoutInfo />} />
          <Route exact path="/izkupuvane/infopic" element={<BuyoutImages handleClickShowError={handleClickShowError} />} />
          <Route exact path="/create" element={<Create handleClickShowError={handleClickShowError} />} />
          <Route exact path="/cart" element={<Cart handleClickShowError={handleClickShowError} />} />
          <Route path="*" element={<Page404 />} />
          <Route path="/products/:productCategory" element={<PartsCatalog />} />
          <Route path="/products/brand/:brandName" element={<BrandCatalog />} />
          <Route path="/product/:productId" element={<Details handleClickShowError={handleClickShowError} />} />
          <Route exact path="/product/edit/:productId" element={<Edit handleClickShowError={handleClickShowError} />} />
          <Route path="/products" element={<AllProductsCatalog />} />
          <Route path="/car-requests" element={<CarRequests />} />
          <Route path="/usloviya-za-polzvane" element={<TermsOfUse />} />
          <Route path="/potvardi-email" element={<ConfirmEmail />}></Route>
          <Route path="/checkout" element={<Checkout/>}></Route>
          <Route path="/order-summary" element={<OrderSummary/>}></Route>
        </Routes>
      </carBuyoutContext.Provider >
      <Footer />
    </div>
  );
}

export default App;
