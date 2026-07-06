import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTopRoute from "./components/ScrollToTop/ScrollToTopRoute";
import ScrollToTopButton from "./components/ScrollToTop/ScrollToTopButton";
import Preloader from "./components/Preloader/Preloader";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Portfolio from "./pages/Portfolio/Portfolio";
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";
import Certifications from "./pages/Certifications/Certifications";
import Feedbacks from "./pages/Feedbacks/Feedbacks";
import Contact from "./pages/Contact/Contact";
import Blog from "./pages/Blog/Blog";
import BlogPost from "./pages/Blog/BlogPost";
import NotFound from "./pages/NotFound/NotFound";

import useNavbarHeight from "./hooks/useNavbarHeight";

export default function App() {
  const [loading, setLoading] = useState(true);
  useNavbarHeight();

  return (
    <>
      {loading && <Preloader onFinish={() => setLoading(false)} />}

      <ScrollToTopRoute />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:id" element={<ProjectDetails />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/feedbacks" element={<Feedbacks />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
