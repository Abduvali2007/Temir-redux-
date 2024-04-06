import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import NewProduct from "./components/NewProduct";
import Footer from "./components/Footer";
import TemirCard from "./components/TemirCard";
import About from "./components/About/Index";
import Basket from "./components/Basket/Index";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/hero" element={<Hero />} />
        <Route path="/products" element={<Products />} />
        <Route path="/newproducts" element={<NewProduct />} />
        <Route path="/about" element={<About />} />
        <Route path="/temircard/:proId" element={<TemirCard />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
