import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Feature from "./components/feature";
import Benefits from "./components/benefit";
import Reseller from "./components/reseller";
import Pricing from "./components/pricing";
import Footer from "./components/footer";
import "react-toastify/dist/ReactToastify.css";

function App() {
  useEffect(() => {
    document.title = "GATEPASS";
  });

  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Home />
      <Feature />
      <Benefits />
      <Reseller />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
