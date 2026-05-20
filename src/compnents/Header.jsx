"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const textColor = (isScrolled || isOpen) ? 'text-gray-100' : 'text-gray-900';

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleSectionNav = (e, sectionId) => {
    e.preventDefault();

    if (!isHomePage) {
      router.push(`/#${sectionId}`);
      setIsOpen(false);
      return;
    }

    scrollToSection(sectionId);
    setIsOpen(false);
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  const navigationItems = [
    { name: 'Home', href: '#home', sectionId: 'home' },
    { name: 'How it works', href: '#how-it-works', sectionId: 'how-it-works' },
    { name: 'Features', href: '#features', sectionId: 'features' },
    { name: 'FAQ', href: '#faq', sectionId: 'faq' },
    { name: 'Individuals', href: '/individuals', sectionId: null },
  ];

  return (<>
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
    ${
        isOpen ? 'bg-gray-900/80 backdrop-blur-xl border-b border-gray-200/30'  : ''
    }
    ${
        isScrolled
            ? 'bg-gray-900/80 backdrop-blur-xl border-b border-gray-200/30'
            : 'bg-gray-50 border border-gray-100'
    } `}>
      <nav className="mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a
                href="#home"
                className="group"
                onClick={(e) => handleSectionNav(e, 'home')}
            >
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className='flex items-end gap-3'>
                  <img
                      src='/Vector.png'
                      alt="finc logo"
                      className={`w-10 h-10 object-contain transform group-hover:scale-110 hover:-rotate-12 transition-transform duration-300 ${!isScrolled && !isOpen ? 'brightness-0' : ''}`}
                  />
                  <h1 className={`text-3xl  font-thin ${textColor}`}>finc</h1>
                    </div>
                </div>
              </div>
            </a>
          </div>

          <div className="hidden lg:flex items-center space-x-12">
            {navigationItems.map((item, index) => item.sectionId ? (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleSectionNav(e, item.sectionId)}
                className={`relative ${textColor} hover:opacity-70 font-light tracking-wide transition-colors duration-300 group cursor-pointer`}
                style={{ '--index': index }}
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`relative ${textColor} hover:opacity-70 font-light tracking-wide transition-colors duration-300 group cursor-pointer`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="lg:hidden flex items-center space-x-3">
            <button
                onClick={toggleMenu}
                className={`p-2 ${textColor} transition-colors duration-200`}
            >
              <div className="relative w-6 h-6">
                <span className={`absolute top-1.5 left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ${
                    isOpen ? 'rotate-45 translate-y-1' : ''
                }`}></span>
                <span className={`absolute top-3 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                    isOpen ? 'opacity-0' : ''
                }`}></span>
                <span className={`absolute top-4.5 left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ${
                    isOpen ? '-rotate-45 -translate-y-1' : ''
                }`}></span>
              </div>
            </button>
          </div>
        </div>

        <div className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isOpen
                ? 'max-h-screen opacity-100 '
                : 'max-h-0 opacity-0'
        }`}>
          <div className="py-6 space-y-1">
            {navigationItems.map((item, index) => item.sectionId ? (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleSectionNav(e, item.sectionId)}
                className="block px-4 py-4 text-lg font-light text-gray-100 hover:text-gray-300 transition-all duration-300 transform hover:translate-x-2 cursor-pointer"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: isOpen ? 'slideInLeft 0.5s ease-out forwards' : 'none'
                }}
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-4 text-lg font-light text-gray-100 hover:text-gray-300 transition-all duration-300 transform hover:translate-x-2 cursor-pointer"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <style jsx>{`
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </header>
  </>);
};

export default Header;
