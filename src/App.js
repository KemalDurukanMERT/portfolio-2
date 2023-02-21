import { Route, Routes } from 'react-router';
import './App.css';
import Home from './Pages/Home';
import ProjectDetail from './Pages/ProjectDetail/ProjectDetail';

function App() {
  return (
    <Routes>
      <Route index path="/" element={<Home/>} />
      <Route path="/:project" element={<ProjectDetail/>}/>
    </Routes>
  );
}

export default App;
