import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Cart from "./components/cart/Cart";
import Blog from "./components/blog/Blog";
import Account from "./components/account/Account";
import ScrollToTop from "./ScrollToTop";

import Home from "./pages/home/Home";
import OurStory from "./pages/our-story/OurStory";
import NewBatch from "./pages/new/NewBatch";
import BestSellers from "./pages/bestsellers/BestSellers";
import Shop from "./pages/shop/Shop";

export default function App() {
  return (
    <>
      <Header />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<OurStory />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/new" element={<NewBatch />} />
        <Route path="/bestsellers" element={<BestSellers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/account" element={<Account />} />
      </Routes>

      <Footer />
    </>
  );
}
