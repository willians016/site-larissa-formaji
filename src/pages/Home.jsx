import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Education from "../components/Education";
import Approach from "../components/Approach";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer"

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Education />
      <Approach />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer/>
    </>
  );
}
