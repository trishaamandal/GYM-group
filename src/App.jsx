import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'

import "react-toastify/dist/ReactToastify.css";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkoutSessions from './components/Workout';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import BMICalculator from './components/BMICalculator';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Hero />
      <WorkoutSessions />
      <Gallery />
      <Pricing />
      <Contact />
      <BMICalculator />
      <Footer />
      <ToastContainer theme='dark' position='top-center' />

    </Router>
  );
};

export default App;
