import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/personajes" element={<About />} />
      <Route path="/razas" element={<About />} />
      <Route path="/planetas" element={<About />} />
    </Routes>
  );
}

export default App;
