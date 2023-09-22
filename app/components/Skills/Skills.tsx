import { skills } from '@/app/constants';

const Skills = () => {
  return (
    <section className="font-oxygen text-light-gray max-w-[1368px] h-screen mx-auto  px-10 max-xl:px-9 max-lg:px-8 max-md:px-6">
      <div className="">
        <h2 className="uppercase font-antonio mb-8 text-2xl text-light-gray text-right max-[850px]:text-left max-lg:text-[22px] max-md:text-[20px]">
          My Skills
        </h2>

        <div className="text-dark-gray text-[40px] text-justify">
          {/* PROGRAMMING LANGUAGES */}
          <div className="flex items-center justify-between max-[850px]:skills-sm font-oxygen">
            <div className="flex items-center gap-5">
              {/* DOTS */}
              <div className="h-[13px] w-[13px] max-lg:h-[11px] max-lg:w-[11px] max-md:h-[9px] max-md:w-[9px] max-sm:w-[7px] max-sm:h-[7px] rounded-full aspect-square bg-dark-gray"></div>
              <h2 className="font-bold text-4xl max-xl:text-[32px] max-lg:text-[28px] max-md:text-[24px] max-sm:text-[20px]">
                {skills.languages.label}
              </h2>
            </div>

            <div className="text-sm text-end max-[850px]:text-start max-[850px]:ml-[36px]">
              <p>
                <span className="font-bold">Main languages: </span>
                {skills.languages.skills}
              </p>
              <p>
                <span className="font-bold">Familiar With: </span>
                {skills.languages.others}
              </p>
            </div>
          </div>

          {/* HORIZONTAL LINE */}
          <div className="h-[0.5px] w-full bg-light-gray my-9"></div>

          {/* LIBRARIES & FRAMEWORKS */}
          <div className="flex items-center justify-between font-oxygen max-[850px]:skills-sm">
            <div className="flex items-center gap-5">
              {/* DOTS */}
              <div className="h-[13px] w-[13px] max-lg:h-[11px] max-lg:w-[11px] max-md:h-[9px] max-md:w-[9px] max-sm:w-[7px] max-sm:h-[7px] rounded-full aspect-square bg-dark-gray"></div>
              <h2 className="font-bold text-4xl max-xl:text-[32px] max-lg:text-[28px] max-md:text-[24px] max-sm:text-[20px]">
                {skills.libraries.label}
              </h2>
            </div>

            <div className="text-sm text-end max-[850px]:text-start max-[850px]:ml-[36px]">
              <p className="max-w-[367px]">{skills.libraries.skills}</p>
            </div>
          </div>

          {/* HORIZONTAL LINE */}
          <div className="h-[0.5px] w-full bg-light-gray my-9"></div>

          {/* TOOLS & PLATFORMS */}
          <div className="flex items-center justify-between font-oxygen max-[850px]:skills-sm">
            <div className="flex items-center gap-5">
              {/* DOTS */}
              <div className="h-[13px] w-[13px] max-lg:h-[11px] max-lg:w-[11px] max-md:h-[9px] max-md:w-[9px] max-sm:w-[7px] max-sm:h-[7px] rounded-full aspect-square bg-dark-gray"></div>
              <h2 className="font-bold text-4xl max-xl:text-[32px] max-lg:text-[28px] max-md:text-[24px] max-sm:text-[20px]">
                {skills.tools.label}
              </h2>
            </div>

            <div className="text-sm text-end max-[850px]:text-start max-[850px]:ml-[36px]">
              <p className="max-w-[367px]">{skills.tools.skills}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
