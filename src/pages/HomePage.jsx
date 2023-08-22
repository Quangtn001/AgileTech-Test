import Feature from "@component/Feature";
import Footer from "@component/Footer";
import Hero from "@component/Hero";
import Navbar from "@component/Navbar";
import { Testimonials } from "@component/Testimonials";

const HomePage = () => {
  return (
    <div className="container overflow-hidden">
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
