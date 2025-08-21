import React from "react";
import Navbar from "./layout/Navabar"; // Note: Component name should match the file (see note below)
import About from "./pages/About"; // You'll need to create this component
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./pages/Hero";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Footer from "./layout/Footer";
import Education from "./pages/Education";
import Page404 from "./pages/Page404";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes className="absolute z-10">
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Education />
              <Blog />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
