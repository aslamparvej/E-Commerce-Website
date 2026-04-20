import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Cart from "./components/Cart";
import Topbar from "./components/Topbar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";


import "./App.css";

function App() {
  return (
    <Router>
      <Topbar />
      <Header />
      <main className="max-w-7xl mx-auto sm:px-6 lg:px-0">
        <Hero />
        <ProductList />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
