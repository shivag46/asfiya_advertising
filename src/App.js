import logo from './logo.svg';
import './App.css';
import Home from './pages/home/Home'
import OurTeam from './pages/team/OurTeam'
import Testimonial from './pages/testimonials/Testimonial';
import Contact from './pages/contacts/Contact';
import Footer from './pages/footer/Footer'
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
