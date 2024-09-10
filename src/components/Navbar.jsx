import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Variables to store classes based on `scrolled` state
  const navClass = `fixed top-0 w-full z-10 transition-all duration-300 ${scrolled ? 'bg-white' : 'bg-transparent'}`;
  const linkClass = scrolled
    ? 'relative text-black hover:text-black'
    : 'relative text-white hover:text-white';
  const orderBtnClass = scrolled
    ? 'bg-black hover:bg-transparent hover:text-black text-white border-black'
    : 'bg-white hover:bg-transparent hover:text-white border-white';

  const linkBefore = scrolled
    ? `
      before:content-[''] before:absolute before:bottom-[-0.25rem] 
      before:left-1/2 before:-translate-x-1/2 before:h-[2px] 
      before:w-0 before:bg-black before:transition-all 
      before:duration-300 hover:before:w-full
    `
    : `
      before:content-[''] before:absolute before:bottom-[-0.25rem] 
      before:left-1/2 before:-translate-x-1/2 before:h-[2px] 
      before:w-0 before:bg-white before:transition-all 
      before:duration-300 hover:before:w-full
    `;

  return (
    <nav className={`${scrolled ? "h-18" : "h-24 py-4"} ${navClass}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        <a className="logo" href="/">
          <img
            src="https://www.soilscan.co.ke/wp-content/uploads/2021/05/SoilScan.svg"
            alt="SoilScan Logo"
            className="h-10"
          />
        </a>
        <ul className="ms-auto flex space-x-6 text-white me-5 font-semibold">
          <li>
            <a href="/about" className={`${linkClass} ${linkBefore}`}>
              About Us
            </a>
          </li>
          <li>
            <a href="/technology" className={`${linkClass} ${linkBefore}`}>
              Technology
            </a>
          </li>
          <li>
            <a href="/press" className={`${linkClass} ${linkBefore}`}>
              Press
            </a>
          </li>
          <li>
            <a href="/careers" className={`${linkClass} ${linkBefore}`}>
              Career
            </a>
          </li>
          <li>
            <a href="/contact-us" className={`${linkClass} ${linkBefore}`}>
              Contact Us
            </a>
          </li>
        </ul>
        <a
          href="#order"
          className={`${orderBtnClass} border-2 py-2 px-4 font-semibold transition`}
        >
          Order Now
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
