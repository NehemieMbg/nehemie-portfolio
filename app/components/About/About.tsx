import { about } from '@/app/constants';

function About() {
  return (
    <section className="font-oxygen text-light-gray max-w-[1368px] h-screen mx-auto  px-10 max-xl:px-9 max-lg:px-8 max-md:px-6 pt-[460px]">
      <div className="">
        <h2 className="uppercase font-antonio mb-11 text-2xl">About Me</h2>
        <p className=" text-[40px] ">{about.text}</p>
      </div>
    </section>
  );
}

export default About;
