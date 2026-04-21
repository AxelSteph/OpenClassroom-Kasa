import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./componants/Header";
import Footer from "./componants/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Logement from "./pages/Logement";

import "./styles/App.css";

<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>

function App() {
  return (
    <Router>
        <Header />
        <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logement/:id" element={<Logement />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
