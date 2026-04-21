import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./componants/Header";
import Footer from "./componants/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
