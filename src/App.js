import './App.css';
import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Education from "./components/Education/Education"
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Certificates from "./components/Projects/Certificates"
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
    <div id='stars'></div>
    <div id='stars2'></div>
    <div id='stars3'></div>

    <Header />
      <Nav />
      <About />
      <Education />
      <Experience />
      <Portfolio />
      <Certificates />
      <Contact />
      <Footer />
    </>



    
  );

}

export default App;
