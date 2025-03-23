import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Team from "./components/Team";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";
import WhyUs from "./components/WhyUs";
import { Toaster } from "react-hot-toast";
import Founders from "./components/Founder";
import Layout from "./layouts/LayOut";

function App() {
  return (
    <Router>
      <Layout>
        <Header />
        <Toaster position="top-right" />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/team" element={<Team />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/founder" element={<Founders />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
