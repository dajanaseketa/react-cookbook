import './App.css';
import { Routes, Route } from "react-router-dom";
import Cookbook from './pages/Cookbook';
import Meal from './pages/Meal';

function App() {
  return (
      <div className="App">
          <Routes>
              <Route path="/" element={<Cookbook />} />
              <Route path="/:id" element={<Meal />} />
          </Routes>
      </div>
  );
}

export default App;
