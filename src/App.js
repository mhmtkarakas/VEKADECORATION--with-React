import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Anasayfa from "./pages/Anasayfa";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";

import Navbar1 from "./components/Navbar1";
import Footer from "./components/Footer";

import Referanslar from "./pages/References";
import Partners from "./pages/Partners";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar1 />

        <Routes>
          <Route path="/" element={<Anasayfa />} />
          <Route path="/kurumsal" element={<AboutUs />} />
          <Route path="/isortaklarimiz" element={<Partners />} />
          <Route path="/referanslar" element={<Referanslar />} />
          <Route path="/iletisim" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
