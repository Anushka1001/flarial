import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Openings from "./components/Openings";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/job-openings" element={<Openings />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<ContactForm />} />
          <Route path="/resume-making" element={<ContactForm />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
