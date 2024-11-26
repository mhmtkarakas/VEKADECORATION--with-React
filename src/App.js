import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Anasayfa from "./pages/Anasayfa";
import Hakkimizda from "./pages/Hakkimizda";
import Contact from "./pages/Contact";

import Navbar1 from "./components/Navbar1";
import Footer from "./components/Footer";

import Referanslar from "./pages/Referanslar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar1 />

        <Routes>
          <Route path="/" element={<Anasayfa />} />
          <Route path="/kurumsal" element={<Hakkimizda />} />

          <Route path="/referanslar" element={<Referanslar />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
