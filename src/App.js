import React from "react";
import "./App.css";
import Cover from "./components/HomePage/Cover";
import About from "./components/AboutPage/About";
import Jobs from "./components/Jobs/Jobs";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Contact/Footer";





function App() {
  return (
    <div className="main">
      
      <Cover />
      <About />
      <Jobs />
      <Contact />
      <Footer />
     
    </div>
  );
}

export default App;
