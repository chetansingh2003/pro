
import { StrictMode } from 'react';
import './App.css';
import Navbar from './Navbar.jsx'
import HeroSlider from './HeroSlider.jsx'
import CourseTicker from './CourseTicker.jsx'
import Courses from './Courses.jsx'
import RegisterNow from './RegisterNow.jsx'
import TopBar from './TopBar.jsx'
import WhyChooseUs from './WhyChooseUs.jsx';
import AboutUs from './AboutUs.jsx'
import TopRated from './TopRated.jsx'
import Associations from './Associations.jsx'
import Contact from './Contact.jsx'
import StatsCounter from './StatsCounter.jsx'
import Testimonials from './Testimonials.jsx'
import Footer from './Footer.jsx'


function App() {

  return (
    <>
  {/* <TopBar/> */}
  <Navbar />
  <HeroSlider/>
  <CourseTicker />
  <TopRated />
  <CourseTicker />
  <RegisterNow/>
  <AboutUs />
  <CourseTicker />
  <Courses />
  <StatsCounter/>
  <WhyChooseUs />
    <Testimonials />
  <Contact />
  <Associations />
  <Footer />
    </>
  )
}

export default App
