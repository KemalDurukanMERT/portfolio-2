import { Route, Routes } from 'react-router';
import './App.css';
import Home from './Pages/Home';
import ProductDetail from './Pages/ProductDetail';

function App() {
  return (
    <Routes>
      <Route index to="/" element={<Home/>} />
      <Route to="/:project" element={<ProductDetail/>}/>
    </Routes>
  );
}

export default App;
