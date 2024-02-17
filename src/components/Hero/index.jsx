import { FaLongArrowAltRight } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import "./index.css";

const Hero = () => {
  return (
    <>
      <section className="text-gray-600 body-font bg-[#E4EBF5]">
        <div className="container mx-auto flex px-5 pt-14 md:flex-row flex-col-reverse items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-5xl text-4xl mb-4 font-medium text-gray-900 font-[Josefin Sans]">
              Proficient in designing{" "}
              <span className="hero-name">elegant </span>
              and <span className="hero-name">high-end</span> user interfaces.
            </h1>
            <p className="mb-8 leading-relaxed">
              Hi there! I'm Sameer, a frontend developer passionate about
              crafting captivating web experiences. I create clean,
              user-friendly designs and help businesses create beloved products
              for the web.
            </p>
            <div className="flex justify-center">
              <a href="#contact">
                <button
                  className="w-[80vw] font-[Josefin Sans] font-semibold flex justify-center items-center text-center md:w-full text-black bg-[#E4EBF5] border-0 py-4 px-10 focus:outline-none rounded-lg text-md shadow"
                  style={{
                    boxShadow: "10px 10px 15px #dad1e2, -5px -5px 15px #ffffff",
                  }}
                >
                  Get in touch &nbsp; <FaLongArrowAltRight />
                </button>
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://res.cloudinary.com/didtdrgsj/image/upload/v1708155190/20240217_125929-removebg-preview_bdylrc.png"
            />
          </div>
        </div>
        <div className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-row flex-wrap justify-center gap-8 text-sm font-semibold text-center text-gray-900 lg:justify-between">
              <div className="flex flex-col items-center justify-center w-36 py-6">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                  <IoLogoJavascript className="w-16 h-16 md:w-20 md:h-20 mb-2 text-gray-800" />
                </h2>
                <p className="leading-relaxed">Javascript</p>
              </div>
              <div className="flex flex-col items-center justify-center w-36 py-6">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                  <FaReact className="w-16 h-16 md:w-20 md:h-20 mb-2 text-gray-800" />
                </h2>
                <p className="leading-relaxed">React JS</p>
              </div>
              <div className="flex flex-col items-center justify-center w-36 py-6">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                  <SiTailwindcss className="w-16 h-16 md:w-20 md:h-20 mb-2 text-gray-800" />
                </h2>
                <p className="leading-relaxed">Tailwind</p>
              </div>
              <div className="flex flex-col items-center justify-center w-36 py-6">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                  <SiNextdotjs className="w-16 h-16 md:w-20 md:h-20 mb-2 text-gray-800" />
                </h2>
                <p className="leading-relaxed">Next JS</p>
              </div>
              <div className="flex flex-col items-center justify-center w-36 py-6">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                  <TbBrandVscode className="w-16 h-16 md:w-20 md:h-20 mb-2 text-gray-800" />
                </h2>
                <p className="leading-relaxed">VS Code</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
