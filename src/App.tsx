import { useState } from 'react';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About/About';
import ContactWrap from './Pages/Contact/ContactWrap';
import Navbar from './components/Navbar';
import Services from './Pages/Services/Services';
import Solution from './Pages/Solution/Solution';

const navItems = ['Home', 'About Us', 'Services', 'Solutions', 'Contact'];


function App() {
  const [activeNavItem, setActiveNavItem] = useState('Home');

  const handleNavChange = (item: string) => {
    setActiveNavItem(item);
  };


  const renderPage = () => {
    switch (activeNavItem) {
      case 'Home':
        return <Home onNavChange={handleNavChange} />;
      case 'About Us':
        return <About />;
      case 'Services':
        return <Services />;
      case 'Solutions':
        return <Solution />;
      case 'Contact':
        return <ContactWrap />;
      default:
        return <Home onNavChange={handleNavChange} />;
    }
  };


  return (
    <>
      <div className="min-h-screen">
        <Navbar
          navItems={navItems}
          activeItem={activeNavItem}
          onNavChange={handleNavChange}
        />
        {renderPage()}
      </div>
    </>
  );
}

export default App;
