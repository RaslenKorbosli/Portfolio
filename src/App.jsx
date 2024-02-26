import HeroSection from './HeroSection';
import NavBar from './ui/NavBar';
import GlobalStyles from './styling/GlobalStyling';
import AboutMePage from './AboutMePage';
import ProjectSection from './ProjectSection';
import ContactSection from './ContactSection';
import FooterSection from './FooterSection';
function App() {
  return (
    <>
      <GlobalStyles />
      <NavBar />
      <HeroSection />
      <AboutMePage />
      <ProjectSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}

export default App;
