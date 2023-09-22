'use client';

import { hero } from '@/app/constants';
import Navbar from '../Nav/Navbar';
import Image from 'next/image';

import Plx from 'react-plx';

const Header = () => {
  const parallaxData = [
    {
      start: 0,
      duration: 1300,
      properties: [
        {
          startValue: 0,
          endValue: 200,
          property: 'translateY',
        },
      ],
    },
  ];

  return (
    <header className="font-oxygen text-white font-light -z-10 overflow-hidden">
      <Navbar />

      <div className="absolute -z-30 top-[-100px] right-[-360px] max-lg:hidden">
        <Image
          src="/images/hero/portrait-img.png"
          alt="Picture of Nehemie Mombanga"
          width={1100}
          height={1176}
          className="saturate-0 min-h-[100vh]"
        />
      </div>

      <section className="h-hero flex flex-col justify-between">
        <div></div>

        <div className="pt-[40px] flex flex-col justify-start max-hero w-full px-10 max-xl:px-9 max-lg:px-8 max-md:px-6  max-lg:items-center">
          <h3 className="text-cool-white font-light uppercase max-w-[802px] text-[15px] mb-5 max-lg:text-center">
            <span className="text-cool-white">Hey there!</span> I&apos;m not
            your typical{' '}
            <span className="text-cool-white">full-stack developer.</span> My
            eye for design and my knack for coding converge to create digital
            digital solutions that are as captivating as they are functional.
          </h3>

          <div className="cursor-pointer w-max rounded-full overflow-hidden flex items-center gap-4 py-3 px-8 border-solid border-[1px] border-cool-white hover:btn-hover transition duration-500">
            <p className="text-base">Download Cv</p>
            <div className="w-2.5 h-2.5 bg-cool-white rounded-full"></div>
          </div>
        </div>

        <Plx className="-z-10" parallaxData={parallaxData}>
          <h2 className=" flex items-center gap-9 uppercase font-antonio font-medium tracking-tightest text-[9vw] text-center leading-[90%] px-10 max-xl:px-9 max-lg:px-8 max-md:px-6 pb-8 -z-50 text-cool-white">
            {hero.catchPhrase}
          </h2>
        </Plx>
      </section>

      <div className="absolute bottom-[-10px] -z-10 h-[200px] bg-gradient-to-black w-full"></div>
    </header>
  );
};

export default Header;
//  max-[1593px]:text-[140px] max-[1510px]:text-[132px] max-[1428px]:text-[126px] max-[1367px]:text-[118px] max-[1285px]:text-[108px] max-[1174px]:text-[98px] max-[1074px]:text-[88px] max-[830px]:text-[96px] max-[598px]:text-[78px] max-[500px]:text-[38px] max-[400px]:text-[46px]
