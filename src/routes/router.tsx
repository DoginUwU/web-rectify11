import { Routes, Route } from "react-router-dom";
import Changelog from "../views/Changelog";
import Contact from "../views/Contact";
import Home from "../views/Home";

const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/changelog" element={<Changelog />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
);

export { Router };
