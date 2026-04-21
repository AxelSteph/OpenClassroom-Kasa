import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./componants/Header";
import Footer from "./componants/Footer";

function App() {
  return (
    <Router>
      <main>
        <Header />
        <Routes>
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
