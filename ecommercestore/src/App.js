import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    // BEM
    //wrap everything within the return in Router
    <Router> 
      <div className="app">
        {/* placed the header outside since we want it in every page */}
      <Header />
        {/* //after your div wrap everything in routes */}
        <Routes>
          {/* //from there route/ what do you want to show up when you are at that path */}
          <Route path="/checkout" 
          element={[<Checkout/>]}/>
          <Route path="/" 
          element={[<Home />]}/> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;