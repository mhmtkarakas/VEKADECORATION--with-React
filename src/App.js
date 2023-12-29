
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



import Anasayfa from './pages/Anasayfa';
import Hakkimizda from './pages/Hakkimizda';
import Iletisim from './pages/Iletisim';
import Seramik from './pages/Seramik';
import Duvarkagidi from './pages/Duvarkagidi';
import Vitrifiye from './pages/Vitrifiye';
import Banyomobilyalari from './pages/Banyomobilyalari';
import Navbar1 from './components/Navbar1';

function App() {
  return (
    <div>
  
      <BrowserRouter>
      <Navbar1 />
      <Routes>
        <Route path='/' element={<Anasayfa />} />
      
        <Route path='/about' element={<Hakkimizda />} />
        <Route path='/seramik' element={<Seramik />} />
        <Route path='/duvarkagidi' element={<Duvarkagidi />} />
        <Route path='/vitrifiye' element={<Vitrifiye />} />
        <Route path='/banyomobilyalari' element={<Banyomobilyalari />} />
        <Route path='/contact' element={<Iletisim />} />
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
