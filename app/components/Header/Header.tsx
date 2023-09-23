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

  const parallaxDataSm = [
    {
      start: 0,
      duration: 1200,
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
    <header
      className="font-oxygen text-white font-light -z-10 overflow-hidden"
      id="hero"
    >
      <Navbar />

      <div className="absolute -z-30 top-[-100px] right-[-360px] max-lg:hidden">
        {/* <Image
        /> */}
      </div>

      <section className="h-hero flex flex-col justify-between max-lg:justify-center">
        <div className="max-lg:hidden"></div>

        <div className="pt-[40px] flex items-center flex-col justify-start max-hero w-full px-10 max-xl:px-9 max-lg:px-8 max-md:px-6  max-lg:items-center ">
          <Image
            src="/images/hero/6nehemie-icon.jpeg"
            alt="Picture of Nehemie Mombanga"
            width={150}
            height={150}
            className="rounded-2xl mb-6"
          />

          <h3 className="text-light-gray font-light max-w-[502px] text-[15px] mb-12 max-lg:text-center max-lg:hidden text-center uppercase">
            <span className="text-red-400">Hey there!</span> I&apos;m not your
            typical <span className="text-red-400">full-stack developer.</span>{' '}
            My eye for design and my knack for coding converge to create digital
            solutions that are as captivating as they are functional.
          </h3>

          {/* <div className="cursor-pointer w-max rounded-full overflow-hidden flex items-center gap-4 py-3 px-8 border-solid border-[1px] border-cool-white hover:btn-hover transition duration-500 max-lg:hidden">
            <p className="text-base">Download Cv</p>
            <div className="w-2.5 h-2.5 bg-cool-white rounded-full"></div>
          </div> */}

          <Plx className="-z-10" parallaxData={parallaxDataSm}>
            <p className="lg:hidden text-[90px] max-md:text-[80px] max-sm:text-[70px]  mb-16 tracking-tighter leading-[100%] text-center font-antonio font-medium uppercase text-cool-white">
              I model
              <br />
              ideas into <br />
              digital
              <br />
              realities
            </p>
          </Plx>

          <div className="cursor-pointer w-max rounded-full overflow-hidden flex items-center gap-4 py-3 px-8 border-solid border-[1px] border-cool-white hover:btn-hover transition duration-500 max-lg:btn-hover">
            <p className="text-base">Download Cv</p>
            <div className="w-2.5 h-2.5 bg-cool-white rounded-full"></div>
          </div>
        </div>

        <Plx className="-z-10 max-lg:hidden" parallaxData={parallaxData}>
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
