// import { About } from "./components/About";
// import { Cta } from "./components/Cta";
// import { FAQ } from "./components/FAQ";
// import { Hero } from "./components/Hero";
// import { HowItWorks } from "./components/HowItWorks";
// import { Newsletter } from "./components/Newsletter";
// import { Services } from "./components/Services";
// import { Sponsors } from "./components/Sponsors";
// import { Team } from "./components/Team";
// import { Testimonials } from "./components/Testimonials";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Pricing } from "./components/Pricing";
import { ScrollToTop } from "./components/ScrollToTop";
import { Carousel } from "./components/Carousel";
import { Contact } from "./components/Contact";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Features />
      <Pricing />
      <Contact />
      {/* <Hero /> */}
      {/* <Sponsors /> */}
      {/* <About /> */}
      {/* <HowItWorks /> */}
      {/* <Services /> */}
      {/* <Cta /> */}
      {/* <Testimonials /> */}
      {/* <Team /> */}
      {/* <Newsletter /> */}
      {/* <FAQ /> */}
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
