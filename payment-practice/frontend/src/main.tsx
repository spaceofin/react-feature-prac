// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/Header.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home.tsx";
import Stripe from "./pages/Stripe.tsx";
import Paypal from "./pages/Paypal.tsx";
import Kakaopay from "./pages/Kakaopay.tsx";
import KakaopaySuccess from "./components/KakaopaySuccess.tsx";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/stripe" element={<Stripe />} />
      <Route path="/paypal" element={<Paypal />} />
      <Route path="/kakaopay" element={<Kakaopay />} />
      <Route path="/kakaopay/success" element={<KakaopaySuccess />} />
    </Routes>
  </BrowserRouter>
  // </StrictMode>
);
