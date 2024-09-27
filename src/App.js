import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mainsidenavbar from './Mainsidenavbar';

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Mainsidenavbar />} />
      </Routes>
    </Router>

  );
}

export default App;