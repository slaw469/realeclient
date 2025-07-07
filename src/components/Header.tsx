import React, { useState } from 'react';
import { Menu, X, Facebook, Instagram, Youtube, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (section: string) => {
    switch (section) {
      case 'search':
        document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'buy':
        document.getElementById('listings')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'sell':
        document.getElementById('agent')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'areas':
        document.getElementById('neighborhoods')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'about':
        document.getElementById('agent')?.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/logo.png" 
              alt="The Perry Group Logo" 
              className="h-12 w-auto mr-4"
            />
            <div className="text-white" style={{ fontFamily: 'Georgia, serif' }}>
              <div className="text-2xl font-light italic">Connor Lyon</div>
              <div className="text-xs font-normal tracking-wider uppercase">
                THE PERRY GROUP
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => handleNavigation('search')}
              className="text-white hover:text-purple-300 font-medium transition-colors cursor-pointer text-sm tracking-wide"
            >
              SEARCH
            </button>
            <div className="relative group">
              <button 
                onClick={() => handleNavigation('buy')}
                className="text-white hover:text-purple-300 font-medium transition-colors cursor-pointer text-sm tracking-wide flex items-center"
              >
                BUY <span className="ml-1">▼</span>
              </button>
            </div>
            <div className="relative group">
              <button 
                onClick={() => handleNavigation('sell')}
                className="text-white hover:text-purple-300 font-medium transition-colors cursor-pointer text-sm tracking-wide flex items-center"
              >
                SELL <span className="ml-1">▼</span>
              </button>
            </div>
            <div className="relative group">
              <button 
                onClick={() => handleNavigation('areas')}
                className="text-white hover:text-purple-300 font-medium transition-colors cursor-pointer text-sm tracking-wide flex items-center"
              >
                TOP AREAS <span className="ml-1">▼</span>
              </button>
            </div>
            <button 
              onClick={() => handleNavigation('about')}
              className="text-white hover:text-purple-300 font-medium transition-colors cursor-pointer text-sm tracking-wide"
            >
              ABOUT
            </button>
            <button className="text-white hover:text-purple-300 font-medium transition-colors cursor-pointer text-sm tracking-wide flex items-center">
              MENU <Menu className="ml-2 w-4 h-4" />
            </button>
          </nav>

          {/* Social Icons and Contact */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <Facebook className="w-5 h-5 text-white hover:text-purple-300 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-white hover:text-purple-300 cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-white hover:text-purple-300 cursor-pointer transition-colors" />
            </div>
            <button className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition-colors font-medium text-sm tracking-wide">
              LET'S TALK
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 bg-black/80 backdrop-blur-sm rounded-lg">
            <nav className="flex flex-col space-y-4 px-4">
              <button 
                onClick={() => handleNavigation('search')}
                className="text-white hover:text-purple-300 font-medium text-left"
              >
                SEARCH
              </button>
              <button 
                onClick={() => handleNavigation('buy')}
                className="text-white hover:text-purple-300 font-medium text-left"
              >
                BUY
              </button>
              <button 
                onClick={() => handleNavigation('sell')}
                className="text-white hover:text-purple-300 font-medium text-left"
              >
                SELL
              </button>
              <button 
                onClick={() => handleNavigation('areas')}
                className="text-white hover:text-purple-300 font-medium text-left"
              >
                TOP AREAS
              </button>
              <button 
                onClick={() => handleNavigation('about')}
                className="text-white hover:text-purple-300 font-medium text-left"
              >
                ABOUT
              </button>
              <div className="flex items-center space-x-4 pt-4">
                <div className="flex items-center space-x-2">
                  <Facebook className="w-5 h-5 text-white" />
                  <Instagram className="w-5 h-5 text-white" />
                  <Youtube className="w-5 h-5 text-white" />
                </div>
                <button className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition-colors font-medium">
                  LET'S TALK
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;