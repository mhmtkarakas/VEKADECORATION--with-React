import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Anasayfa from "./pages/Anasayfa";
import Hakkimizda from "./pages/Hakkimizda";
import Contact from "./pages/Contact";
import Seramik from "./pages/Seramik";
import Duvarkagidi from "./pages/Duvarkagidi";
import Vitrifiye from "./pages/Vitrifiye";
import Banyomobilyalari from "./pages/Banyomobilyalari";
import Navbar1 from "./components/Navbar1";
import Footer from "./components/Footer";
import Duskabini from './pages/Duskabini';
import Ankastre from './pages/Ankastre';
import Yapikimyasallari from './pages/Yapikimyasallari';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar1 />

        <Routes>
          <Route path="/" element={<Anasayfa />} />
          <Route path="/about" element={<Hakkimizda />} />
          <Route path="/seramik" element={<Seramik />} />
          <Route path="/duvarkagidi" element={<Duvarkagidi />} />
          <Route path="/vitrifiye" element={<Vitrifiye />} />
          <Route path="/duskabini" element={<Duskabini />} />
          <Route path="/ankastre" element={<Ankastre />} />
          <Route path="/banyomobilyalari" element={<Banyomobilyalari />} />
          <Route path="/yapikimyasallari" element={<Yapikimyasallari />} />
          <Route path="/contact" element={<Contact /> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
