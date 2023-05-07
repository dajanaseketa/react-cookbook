import './App.css';
import { Routes, Route } from "react-router-dom";
import Cookbook from './pages/Cookbook';

function App() {
  return (
      <div className="App">
          <Routes>
              <Route path="/" element={<Cookbook />} />
          </Routes>
      </div>
  );
}

export default App;
