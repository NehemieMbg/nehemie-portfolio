import { navbar } from '@/app/constants';

function Navbar() {
  return (
    <nav className="absolute w-full flex justify-between items-center p-10 max-xl:p-9 max-lg:p-8 max-md:p-6 text-cool-white font-oxygen">
      <h1 className="font-thin text-2xl max-xl:text-[22px] max-lg:text-[20px] max-md:text-[18px]">
        <a href="/">
          <span className="text-red-400  font-bold">NEHEMIE</span>
          MOMBANGA
        </a>
      </h1>

      <ul className="relative flex items-center gap-9 max-lg:text-[15px] text-cool-white font-light ">
        {navbar.links.map((link) => (
          <li
            key={link.label}
            className="hover:text-red-400  transition-color duration-500 h-5 overflow-hidden cursor-pointer"
          >
            <a href={link.href} className="top-0 left-0 hover:translate-x-1">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
