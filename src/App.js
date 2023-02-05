import { Route, Routes } from 'react-router';
import './App.css';
import Home from './Pages/Home';
import Success from './Pages/Success';

function App() {
  return (
    <Routes>
      <Route index to="/" element={<Home/>} />
      <Route index to="/success" element={<Success/>}/>
    </Routes>
  );
}

export default App;
