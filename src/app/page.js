import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main className="pt-20">
      <Navbar></Navbar>
      <section id="hero" className="scroll-mt-20"><Hero></Hero></section>
      <section id="about" className="scroll-mt-20"><About></About></section>
      <section id="skills" className="scroll-mt-20"><Skills></Skills></section>
      <section id="projects" className="scroll-mt-20"><Projects></Projects></section>
      <section id="contact" className="scroll-mt-20"><Contact></Contact></section>
      <Footer></Footer>
    </main>
  );
}