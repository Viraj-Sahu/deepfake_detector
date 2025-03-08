
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

interface NavMenuProps {
  scrolled: boolean;
}

const NavMenu = ({ scrolled }: NavMenuProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'Introduction', href: '#introduction' },
    { name: 'Impacts', href: '#impacts' },
    { name: 'Solution', href: '#solution' },
    { name: 'Technology', href: '#technology' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];
  
  return (
    <div className="verif-container">
      <nav className="flex items-center justify-between py-4">
        <a href="#hero" className="flex items-center space-x-2">
          <span className={cn(
            "font-bold text-2xl transition-colors",
            scrolled ? "text-verif-blue" : "text-white"
          )}>
            Verif<span className="text-verif-purple">.ai</span>
          </span>
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-verif-blue",
                scrolled ? "text-foreground" : "text-white"
              )}
            >
              {item.name}
            </a>
          ))}
          <Button className="bg-verif-blue hover:bg-verif-lightBlue text-white font-medium">
            Try Demo
          </Button>
        </div>
        
        <button
          className="p-2 md:hidden rounded-md"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X className={cn(
              "h-6 w-6 transition-colors",
              scrolled ? "text-foreground" : "text-white"
            )} />
          ) : (
            <Menu className={cn(
              "h-6 w-6 transition-colors",
              scrolled ? "text-foreground" : "text-white"
            )} />
          )}
        </button>
      </nav>
      
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 glass-card rounded-b-2xl p-4 z-50 animate-fade-in">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground font-medium transition-colors hover:text-verif-blue py-2"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button className="bg-verif-blue hover:bg-verif-lightBlue text-white font-medium w-full">
              Try Demo
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavMenu;
