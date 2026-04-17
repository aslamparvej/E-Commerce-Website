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
      <main>
        <ProductList />
      </main>

    </Router>
  );
}

export default App;
