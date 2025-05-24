import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home"; // Slider-based homepage
import Characters from "./Pages/Characters"; // Original character grid
import CardDetails from "./components/Cards/CardDetails";
import Episodes from "./Pages/Episodes";
import Location from "./Pages/Location";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Slider homepage */}
          <Route path="/characters" element={<Characters />} /> {/* Original character grid */}
          <Route path="/:id" element={<CardDetails />} />
          <Route path="/characters/:id" element={<CardDetails />} />
          <Route path="/location" element={<Location />} />
          <Route path="/location/:id" element={<CardDetails />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/episodes/:id" element={<CardDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;