import { Routes ,Route, Redirect } from 'react-router-dom';
import "./App.css";
import Register from './components/Register/register.js';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route exact path="/user/register" element={<Register/>} />
        </Routes>
    </div>
  );
}

export default App;
