import { Routes ,Route, Redirect } from 'react-router-dom';
import "./App.css";
import Register from './components/Register/register.js';
import Login from './components/Login/login.js';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/login" element={<Login/>} />
        </Routes>
    </div>
  );
}

export default App;
