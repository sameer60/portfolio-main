import { FaCode } from "react-icons/fa";
const Navbar = () => {
  return (
    <header className="text-gray-600 body-font bg-[#e4ebf5]">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <FaCode className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" />
          <span className="ml-3 text-2xl">Sameer</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 text-gray-600 font-semibold text-lg cursor-pointer hover:text-gray-900">
            Uses
          </a>
          <a className="mr-5 text-gray-600 font-semibold text-lg cursor-pointer hover:text-gray-900">
            Resources
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
