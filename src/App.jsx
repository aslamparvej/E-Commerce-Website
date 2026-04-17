import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Topbar from "./components/Topbar";
import Header from "./components/Header";

import Cart from "./components/Cart";
import ProductList from "./components/ProductList";

import "./App.css";

function App() {
  return (
    <Router>
      <Topbar />
      <Header />
      <main className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-6 sm:py-8">
        <h3 className="text-4xl sm:text-3xl md:text-4xl mb-4 font-semibold text-black">Explore Our Products</h3>
        <ProductList />
      </main>
    </Router>
  );
}

export default App;
