const Projects = () => {
  return (
    <>
      <section className="body-font text-gray-600">
        <div className="container mx-auto px-5 py-24">
          <div className="w-full flex justify-center">
            <h1 className="title-font text-center sm:text-5xl text-4xl mb-20 font-semibold text-gray-900 font-[Josefin Sans] font-semibold  text-balance tracking-tight">
              Have a glance at a few of my{" "}
              <span className="hero-name">latest</span> projects.
            </h1>
          </div>
          <div className="-m-4 flex flex-wrap">
            <div className="p-4 md:w-1/2">
              <div className="h-full overflow-hidden shadow-xl hover:-translate-y-1 transition cursor-pointer rounded-lg border-2 border-gray-200 border-opacity-60">
                <div className="p-6">
                  <h1 className="title-font mb-3 text-lg font-medium text-gray-900">
                    The Catalyzer
                  </h1>
                  <p className="mb-3 leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
                <img
                  className="w-full object-cover object-center md:h-36 lg:h-48"
                  src="https://dummyimage.com/720x400"
                  alt="blog"
                />
              </div>
            </div>
            <div className="p-4 md:w-1/2">
              <div className="h-full overflow-hidden shadow-xl hover:-translate-y-1 transition cursor-pointer rounded-lg border-2 border-gray-200 border-opacity-60">
                <div className="p-6">
                  <h1 className="title-font mb-3 text-lg font-medium text-gray-900">
                    The Catalyzer
                  </h1>
                  <p className="mb-3 leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
                <img
                  className="w-full object-cover object-center md:h-36 lg:h-48"
                  src="https://dummyimage.com/720x400"
                  alt="blog"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
