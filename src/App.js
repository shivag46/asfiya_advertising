import './App.css';
import Home from '../src/pages/home/Home.js';
import Footer from '../src/pages/footer/Footer.js';
import OurTeam from './pages/team/OurTeam';
import Testimonial from './pages/testimonials/Testimonial';
import Contact from './pages/contacts/Contact';
import Customer from './pages/customers/Customer';

function App() {
  return (
    <div className="App">
      <Home />
      <OurTeam />
      <Customer />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
