import logo from './logo.svg';
import './App.css';
import Testimonial from  './pages/testimonials/Testimonial'
import Contact from './pages/contacts/Contact'
import OurTeam from './pages/team/OurTeam'

function App() {
  return (
    <div className="App">
      <OurTeam />
      <Testimonial />
      <Contact />
    </div>
  );
}

export default App;
