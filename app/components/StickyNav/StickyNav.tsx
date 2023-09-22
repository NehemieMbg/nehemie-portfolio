'use client';

import { useEffect, useState, useRef } from 'react';
import { navbar } from '@/app/constants';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';
import useClickOutside from '@/app/hooks/useClickOutside';
import Link from 'next/link';

const StickyNav = () => {
  // Reveal the navigation bar when the hero section is passed
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(menuRef, () => setMenuIsOpen(false));

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById('hero')?.offsetHeight || 0;
      const footerOffsetTop = document.getElementById('footer')?.offsetTop || 0;
      const windowHeight = window.innerHeight;

      if (
        window.scrollY >= heroHeight &&
        window.scrollY + windowHeight <= footerOffsetTop
      ) {
        setIsNavbarVisible(true);
      } else {
        setIsNavbarVisible(false);
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
      className={`fixed bottom-[35px] max-md:bottom-[15px] left-[50%] translate-x-[-50%] bg-transparent-dark backdrop-blur-sm rounded-xl p-2 transition-all duration-500 
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
              <Bars3Icon className="fill-cool-white hover:fill-red-400  transition-colors duration-200 aspect-square h-5" />
            </div>
          ) : (
            <div className="lg:hidden" onClick={() => setMenuIsOpen(false)}>
              <XMarkIcon className="fill-cool-white hover:fill-red-400 aspect-square h-7 transition-colors duration-200" />
            </div>
          )}

          <ul
            className={`flex items-center gap-4 font-oxygen text-cool-white font-light rounded-lg mx-2
			transition-all duration-200 text-base
		 	  ${menuIsOpen ? ' visible' : 'hidden'}
			  lg:hidden
		  `}
          >
            {navbar.links.map((link) => (
              <li
                key={link.label}
                className="hover:text-cool-white transition-colors duration-200"
                onClick={() => setMenuIsOpen(false)}
              >
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>

          <div className="text-light-gray lg:hidden">|</div>
          <Link
            href="/"
            className="text-red-400  font-oxygen font-thin text-lg tracking-[-80%]"
          >
            <span className="font-normal text-red-400 ">N</span>M
          </Link>
        </div>

        <ul className="flex gap-1 bg-dark-gray rounded-lg text-cool-white font-oxygen font-light max-lg:hidden">
          {navbar.links.map((link) => (
            <li
              key={link.label}
              className="p-4 rounded-lg hover:text-red-400  transition-colors duration-200"
            >
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StickyNav;
