import "./index.css";
const Features = () => {
  return (
    <>
      <section className="text-gray-600 body-font bg-[#f1eafe]">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center mt-40 w-full mb-20">
            <h2 className="text-4xl text-[#000] tracking-tight font-medium title-font mb-1 font-[Bungee] features-section-heading">
              A FRONTEND 😄 DEVELOPER WITH A{" "}
              <span className="font-bold">DESIGN SENSE</span>.
            </h2>
            <h1 className="sm:text-lg text-md font-medium title-font text-gray-600">
              Building websites that look good is the first step, but it's also
              important to make sure your website's code is easy to read and
              maintain.
            </h1>
          </div>
          <div className="flex flex-wrap -m-4 mb-40">
            <div className="p-4 md:w-1/3 mb-10 md:mb-0 relative">
              <div className="flex rounded-xl h-full bg-white p-8 flex-col cursor-pointer retro-card">
                <div className="flex items-center mb-3">
                  <h2 className="text-gray-900 text-lg title-font font-medium font-[Bungee]">
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
              <div className="flex rounded-xl h-full bg-white p-8 flex-col cursor-pointer retro-card">
                <div className="flex items-center mb-3">
                  <h2 className="text-gray-900 text-lg title-font font-medium font-[Bungee]">
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
              <div className="flex rounded-xl h-full bg-white p-8 flex-col cursor-pointer retro-card">
                <div className="flex items-center mb-3">
                  <h2 className="text-gray-900 text-lg title-font font-medium font-[Bungee]">
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
