import { useState } from "react";

export const Header = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [showNav, setShowNav] = useState(false);

  const handleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <>
      <header className='flex flex-col md:flex-row justify-start items-center gap-x-8 bg-black p-4 sticky top-0 z-40 relative'>
        <h1 className='font-RobotoCondensed text-4xl text-blue-300'>
          <button onClick={handleNav}>
            <i className='fa-solid fa-bars text-blue-500 mr-4 md:hidden'></i>
          </button>
          PranjalShukla.<span className='text-violet-600'>_</span>
        </h1>

        {/*desktop*/}
        <ul className='hidden md:flex md:flex-row justify-evenly items-center gap-4 text-white text-lg font-Montserrat font-bold w-2/3'>
          <li>
            <a
              href='#'
              className={`hover:text-slate-300 ${
                activeLink === "home" ? "text-red-600" : ""
              }`}
              onClick={() => setActiveLink("home")}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href='#expertise'
              className={`hover:text-slate-300 ${
                activeLink === "expertise" ? "text-red-600" : ""
              }`}
              onClick={() => setActiveLink("expertise")}
            >
              {" "}
              Expertise{" "}
            </a>
          </li>
          <li>
            <a
              href='#projects'
              className={`hover:text-slate-300 ${
                activeLink === "projects" ? "text-red-600" : ""
              }`}
              onClick={() => setActiveLink("work")}
            >
              {" "}
              Projects{" "}
            </a>
          </li>
          <li>
            <a
              href='#blogs'
              className={`hover:text-slate-300 ${
                activeLink === "blogs" ? "text-red-600" : ""
              }`}
              onClick={() => setActiveLink("blogs")}
            >
              {" "}
              Blogs{" "}
            </a>
          </li>
          <li>
            <a
              href='#experience'
              className={`hover:text-slate-300 ${
                activeLink === "experience" ? "text-red-600" : ""
              }`}
              onClick={() => setActiveLink("experience")}
            >
              {" "}
              Experience{" "}
            </a>
          </li>
          <li>
            <a
              href='#contact'
              className={`hover:text-slate-300 ${
                activeLink === "contact" ? "text-red-600" : ""
              }`}
              onClick={() => setActiveLink("contact")}
            >
              Contact{" "}
            </a>
          </li>
        </ul>

        <button className='hidden md:block bg-gray-800 border-2 border-teal-600 text-white text-lg px-4 py-2 rounded-md'>
          <a href='/resume-pranjal.pdf' target='_blank' title='Pranjal resume'>
            Resume
          </a>
        </button>

        {/*mobile*/}
        <div
          className={` ${
            showNav ? "block translate-x-0" : "hidden -translate-x-full"
          } absolute top-0 left-0 w-11/12 h-screen transition-transform duration-500 ease-in-out bg-gray-900 text-white md:hidden text-center`}
        >
          <button
            className='absolute top-2 right-4 hover:text-green-500'
            onClick={handleNav}
          >
            <i className='fa-solid fa-x text-xl'></i>
          </button>
          <ul className='flex flex-col justify-center items-center gap-4 text-white text-lg font-Montserrat font-bold w-full h-1/2'>
            <li className='flex justify-between items-center gap-2'>
              <i className='fa-solid fa-house-user text-white'></i>
              <a
                href='#'
                className={`hover:text-slate-300 ${
                  activeLink === "home" ? "text-green-400" : ""
                }`}
                onClick={() => {
                  setActiveLink("home");
                  handleNav();
                }}
              >
                Home
              </a>
            </li>
            <li className='flex justify-between items-center gap-2'>
              <i className='fa-solid fa-code'></i>
              <a
                href='#expertise'
                className={`hover:text-slate-300 ${
                  activeLink === "expertise" ? "text-green-400" : ""
                }`}
                onClick={() => {
                  setActiveLink("expertise");
                  handleNav();
                }}
              >
                {" "}
                Expertise{" "}
              </a>
            </li>
            <li className='flex justify-between items-center gap-2'>
              <i className='fa-solid fa-list-check'></i>
              <a
                href='#projects'
                className={`hover:text-slate-300 ${
                  activeLink === "projects" ? "text-green-400" : ""
                }`}
                onClick={() => {
                  setActiveLink("work");
                  handleNav();
                }}
              >
                {" "}
                Projects{" "}
              </a>
            </li>
            {/* <li className='flex justify-between items-center gap-2'>
              <i className='fa-solid fa-list-check'></i>
              <a
                href='#blogs'
                className={`hover:text-slate-300 ${
                  activeLink === "blogs" ? "text-green-400" : ""
                }`}
                onClick={() => {
                  setActiveLink("blogs");
                  handleNav();
                }}
              >
                {" "}
                Blogs{" "}
              </a>
            </li> */}
            <li className='flex justify-between items-center gap-2'>
              <i className='fa-solid fa-briefcase'></i>
              <a
                href='#experience'
                className={`hover:text-slate-300 ${
                  activeLink === "experience" ? "text-green-400" : ""
                }`}
                onClick={() => {
                  setActiveLink("experience");
                  handleNav();
                }}
              >
                {" "}
                Experience{" "}
              </a>
            </li>
            <li className='flex justify-between items-center gap-2'>
              <i className='fa-solid fa-address-book'></i>
              <a
                href='#contact'
                className={`hover:text-slate-300 ${
                  activeLink === "contact" ? "text-green-400" : ""
                }`}
                onClick={() => {
                  setActiveLink("contact");
                  handleNav();
                }}
              >
                Contact{" "}
              </a>
            </li>
          </ul>
          <button className='bg-gray-800 border-2 border-teal-600 text-white text-lg px-4 py-2 rounded-md'>
            <a
              href='/resume-pranjal.pdf'
              target='_blank'
              title='Pranjal resume'
            >
              Resume
            </a>
          </button>
        </div>
      </header>
    </>
  );
};
