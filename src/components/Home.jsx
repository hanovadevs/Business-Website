import Hero from "./Hero";
import Services from "./Services";
import Portfolio from "./Portfolio";
import About from "./About";
import Testimonials from "./Testimonials";
import Contact from "./Contact";

const Home = () => {
  return (
    <main>
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Testimonials />
      <Contact />
    </main>
  );
};

export default Home;
