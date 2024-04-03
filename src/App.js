import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import NewProduct from "./components/NewProduct";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/hero" element={<Hero />} />
        <Route path="/products" element={<Products />} />
        <Route path="/newproducts" element={<NewProduct />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
