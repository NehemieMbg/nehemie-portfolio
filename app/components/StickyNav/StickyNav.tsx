import { navbar } from '@/app/constants';
import { Bars3Icon } from '@heroicons/react/20/solid';

const StickyNav = () => {
  return (
    <div className="fixed bottom-[35px] left-[50%] translate-x-[-50%] bg-transparent-dark backdrop-blur-sm rounded-xl p-2">
      <div className="flex items-center justify-center gap-2">
        <div className="flex items-center gap-2 p-3 px-4 bg-dark-gray rounded-lg w-[100px]">
          <div>
            <Bars3Icon className="fill-white aspect-square h-5" />
          </div>

          <a
            href="/"
            className="text-cool-white font-oxygen font-thin text-xl tracking-[-80%]"
          >
            <span className="font-normal">N</span>M
          </a>
        </div>

        <ul className="flex gap-1 bg-dark-gray rounded-lg text-light-gray font-oxygen font-light">
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
