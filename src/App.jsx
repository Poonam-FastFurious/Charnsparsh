import "./App.css";
import Login from "./Components/Authentication/Login";
import SignUp from "./Components/Authentication/SignUp";
import Footer from "./Components/Footer/Footer";

import Header from "./Components/Home/Header";
import Home from "./Components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CheckOut from "./Components/Pages/CheckOut";
import Cart from "./Components/Pages/Cart";
import Wishlist from "./Components/Pages/Wishlist";
import Productlist from "./Components/Product/Productlist";
import Templelist from "./Components/Temple/Templelist";
import Templedetails from "./Components/Temple/Templedetails";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/CheckOut" element={<CheckOut />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/product" element={<Productlist />} />
          <Route path="/temple" element={<Templelist />} />
          <Route path="/templedetais" element={<Templedetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
