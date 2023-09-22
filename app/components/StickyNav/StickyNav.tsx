'use client';

import { useEffect, useState, useRef } from 'react';
import { navbar } from '@/app/constants';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';
import useClickOutside from '@/app/hooks/useClickOutside';

const StickyNav = () => {
  // Reveal the navigation bar when the hero section is passed
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(menuRef, () => setMenuIsOpen(false));

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById('hero')?.offsetHeight;
      if (heroHeight) {
        setIsNavbarVisible(window.scrollY >= heroHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      ref={menuRef}
      className={`fixed bottom-[35px] left-[50%] translate-x-[-50%] bg-transparent-dark backdrop-blur-sm rounded-xl p-2 transition-all duration-500 
	 	${
      isNavbarVisible
        ? 'opacity-100 pointer-events-auto'
        : 'opacity-0 pointer-events-none'
    } 
	  `}
    >
      <div className="flex items-center justify-center gap-2">
        <div className="flex items-center gap-2 p-3 px-4  bg-dark-gray rounded-lg">
          {!menuIsOpen ? (
            <div className="lg:hidden" onClick={() => setMenuIsOpen(true)}>
              <Bars3Icon className="fill-light-gray hover:fill-cool-white  transition-colors duration-200 aspect-square h-5" />
            </div>
          ) : (
            <div className="lg:hidden" onClick={() => setMenuIsOpen(false)}>
              <XMarkIcon className="fill-light-gray hover:fill-cool-white aspect-square h-7 transition-colors duration-200" />
            </div>
          )}

          <ul
            className={`flex items-center gap-4 font-oxygen text-light-gray font-light rounded-lg mx-2
			transition-all duration-200 text-base
		 	  ${menuIsOpen ? ' visible' : 'hidden'}
			  lg:hidden
		  `}
          >
            {navbar.links.map((link) => (
              <li
                key={link.label}
                className="hover:text-cool-white transition-colors duration-200"
              >
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>

          <div className="text-light-gray lg:hidden">|</div>
          <a
            href="/"
            className="text-cool-white font-oxygen font-thin text-lg tracking-[-80%]"
          >
            <span className="font-normal">N</span>M
          </a>
        </div>

        <ul className="flex gap-1 bg-dark-gray rounded-lg text-light-gray font-oxygen font-light max-lg:hidden">
          {navbar.links.map((link) => (
            <li
              key={link.label}
              className="p-4 rounded-lg hover:text-cool-white transition-colors duration-200"
            >
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StickyNav;
