import './App.css';
import Nav from './components/Nav';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import ResumePreview from './components/ResumePreview';
import Contacts from './components/Contacts';

function App() {
  return (
    <div>
      <Nav/>
      <AboutMe/>
      <Carousel/>
      <ResumePreview/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
