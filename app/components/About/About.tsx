import { about } from '@/app/constants';

function About() {
  return (
    <section
      id="about"
      className="font-oxygen text-light-gray max-w-[1368px] mx-auto  px-10 max-xl:px-9 max-lg:px-8 max-md:px-6 pt-[260px] mb-24"
    >
      <div className="">
        <h2 className="uppercase font-antonio mb-9 text-2xl text-light-gray  max-md:text-[22px]">
          About Me
        </h2>
        <p className="text-dark-gray text-4xl leading-relaxed font-bold  max-xl:text-[32px] max-lg:text-[28px] max-md:[text-24px]">
          {about.text}
        </p>
      </div>
    </section>
  );
}

export default About;
