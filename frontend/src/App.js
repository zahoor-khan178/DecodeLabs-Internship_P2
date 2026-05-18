import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './Components/Home';
import Signup from './Components/Signup';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;