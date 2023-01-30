import { Route, Routes } from 'react-router';
import './App.css';
import Home from './Pages/Home';

function App() {
  return (
    <Routes>
      <Route index to="/" element={<Home/>} />
    </Routes>
  );
}

export default App;
