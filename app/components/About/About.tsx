import { about } from '@/app/constants';

function About() {
  return (
    <section
      id="about"
      className="font-oxygen text-light-gray max-w-[1368px] mx-auto  px-10 max-xl:px-9 max-lg:px-8 max-md:px-6 pt-[260px] mb-24"
    >
      <div className="">
        <h2 className="uppercase font-antonio mb-8 text-2xl text-light-gray max-lg:text-[22px] max-md:text-[20px]">
          About Me
        </h2>
        <p className="text-dark-gray text-4xl leading-relaxed font-bold  max-xl:text-[32px] max-lg:text-[28px] max-md:text-[24px] max-sm:text-[20px]">
          {about.text}
        </p>
      </div>
    </section>
  );
}

export default About;
