import React from "react";
import './App.css'
import { Routes, Route, HashRouter, Link} from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import About from './About';
import Login from './Login';
import Register from "./Register";

function App() {
  return (
    <div>
      <HashRouter>
        <div>
          <div className="topnav">
            <Link to="/">首頁</Link>
            <Link to="/Products">Products</Link>
            <Link to="/About">About</Link>
            <Link to="/Login" className="split">登入</Link>
            <Link to="/Register" className="split">註冊</Link>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/About" element={<About />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
          </Routes>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
