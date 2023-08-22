import Feature from "../components/Feature";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import { Testimonials } from "../components/Testimonials";

const HomePage = () => {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <Feature />
      <Testimonials />
      <hr />
      <Footer />
    </div>
  );
};

export default HomePage;
