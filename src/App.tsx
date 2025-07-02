// @ts-ignore
import Navbar from "./components/Navbar";
// @ts-ignore
import Hero from "./sections/Hero";
// @ts-ignore
import About from "./sections/About";
// @ts-ignore
import Skills from "./sections/Skills";
// @ts-ignore
import Experience from "./sections/Experience";
// @ts-ignore
import Certificates from "./sections/Certificates";
// @ts-ignore
import Projects from "./sections/Projects";
// @ts-ignore
import Contact from "./sections/Contact";
// @ts-ignore
import Footer from "./sections/Footer";


function App() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Certificates />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
