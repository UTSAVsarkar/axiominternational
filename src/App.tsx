import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home';

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
