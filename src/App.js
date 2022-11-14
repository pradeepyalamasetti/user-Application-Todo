import React from "react";
//import { BrowserRouter, Switch, Route } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Header from "./components/Header";
import About from "./pages/About";
import AddEdit from "./pages/AddEdit";
import Home from "./pages/Home";
import Sample from "./pages/Sample";
import View from "./pages/View";

const App = () => {
  return (
    <Router>
    <div className="App">
    <Header />
        <ToastContainer position="top-center" />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/add" element={<AddEdit/>} />
          <Route path="/sample" element={<Sample/>} />
          <Route path="/update/:id" element={<AddEdit/>} />
          <Route path="/view/:id" element={<View/>} />
          <Route path="/about" element ={<About/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
