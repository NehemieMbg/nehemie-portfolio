import React from 'react';

const Footer = () => {
  return (
    <footer id="footer" className="relative min-h-screen bg-cool-white -mt-1">
      {/* <div
        className="absolute bottom-5 left-[50%] z-30 font-antonio text-[160px] text-dark-gray  leading-[90%] tracking-tight uppercase font-bold translate-x-[-50%] flex gap-4 flex-col items-center"
        // style={{ transform: 'rotate(-90deg) translatX(32%)' }}
      >
        <p className="">Let&apos;s work</p>
        <p className="">Together now!</p>
      </div> */}
      <div
        className=" font-antonio text-[160px] text-dark-gray  leading-[90%] tracking-tight uppercase font-bold flex gap-4 flex-col items-center"
        // style={{ transform: 'rotate(-90deg) translatX(32%)' }}
      >
        <p className="">Let&apos;s work</p>
        <p className="">Together now!</p>
      </div>
    </footer>
  );
};

export default Footer;
