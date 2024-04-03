import { Routes, Route, Router } from "react-router-dom";
import { NoRouteFound } from "./NoRouteFound";
import Home from "../components/Home/home";
import Product from "../components/Product/product";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />

      <Route path="*" element={<NoRouteFound />} />
    </Routes>
  );
};
export { AppRoute as Routes };
