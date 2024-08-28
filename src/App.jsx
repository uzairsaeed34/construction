import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Services from "./components/Services/Services";
// import Teams from "./components/Teams/Teams";
import Project from "./components/Project/Project";
import Testimonial from "./components/Testimonial/Testimonial";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
      {/* <Teams /> */}
      <Project />
      <Testimonial />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
