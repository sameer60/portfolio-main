import { PiDeviceMobile } from "react-icons/pi";
import { BsStars } from "react-icons/bs";
import { SiReactos } from "react-icons/si";
import "./index.css";
const Features = () => {
  return (
    <>
      <section className="text-gray-600 body-font bg-[#dde4eb]">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center mt-40 w-full mb-20">
            <h2 className="text-4xl text-black tracking-tight font-medium title-font mb-1 font-[Roboto]">
              A Front-End 😄 developer with a{" "}
              <span className="hero-name">design sense</span>.
            </h2>
            <h1 className="sm:text-lg text-md font-medium title-font text-gray-600">
              Building websites that look good is the first step, but it's also
              important to make sure your website's code is easy to read and
              maintain.
            </h1>
          </div>
          <div className="flex flex-wrap -m-4 mb-40">
            <div className="p-4 md:w-1/3 mb-10 md:mb-0 relative">
              <div className="bg-[#E4EBF5] h-16 w-16 flex justify-center items-center text-center absolute feature-icon-container">
                <PiDeviceMobile className="text-2xl" />
              </div>
              <div className="flex rounded-xl h-full bg-gradient-to-br from-[#f4fbff] to-[#cdd4dd] p-8 flex-col shadow-lg">
                <div className="flex items-center mb-3">
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Responsive Design
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    The world has gone mobile - so why not your website? I
                    specialize in responsive web design so you never have to
                    worry about your content being seen by customers or users no
                    matter what device they're on.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3 mb-10 md:mb-0 relative">
              <div className="bg-[#E4EBF5] h-16 w-16 flex justify-center items-center text-center absolute feature-icon-container">
                <BsStars className="text-2xl" />
              </div>
              <div className="flex rounded-xl h-full bg-gradient-to-br from-[#f4fbff] to-[#cdd4dd] p-8 flex-col shadow-lg">
                <div className="flex items-center mb-3">
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Clean Code
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    I focus on making sure code runs smoothly and efficiently,
                    so you can focus on other parts of running your business.
                    Simpler code means less maintenance and lower chances of
                    bugs - always a win!
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3 relative">
              <div className="bg-[#E4EBF5] h-16 w-16 flex justify-center items-center text-center absolute feature-icon-container">
                <SiReactos className="text-2xl" />
              </div>
              <div className="flex rounded-xl h-full bg-gradient-to-br from-[#f4fbff] to-[#cdd4dd] p-8 flex-col shadow-lg">
                <div className="flex items-center mb-3">
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Cutting Edge
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    I keep myself up-to-date on the newest tools and
                    technologies like ReactJS, NextJS or Tailwind CSS (just to
                    name a few). I Choose best tools for the task at hand to
                    implement them in the most effective way.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
