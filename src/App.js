import Header from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import Timeline from "./components/Timeline.jsx";
import Services from "./components/Services.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { Toaster } from "react-hot-toast";

function App() {
  return (  
   <>
      <Header />
      <Home />
      <Work />
      <Timeline />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
      <Toaster/>
   </>
  );
}
 
export default App;
