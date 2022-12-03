import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="shadow-sm fixed w-full z-10"></nav>
      <div className="w-full">
        <div className="flex items-center h-20 w-full">
          <div className="flex items items-center mx-20 justify-between w-full">
            <div className="flex justify-center items-center flex-shrink-0">
              <h1 className="font-bold text-xl cursor-pointer">
                Acqua<span className="text-blue-500">Quiz</span>
              </h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  activeClass="cards"
                  href="/cards"
                  className="cursor-pointer text-blue-600 font-semibold px-3 py-2 text-base hover:font-black"
                >
                  HOME
                </Link>
                <Link
                  href="/quiz"
                  activeClass="quiz"
                  className="cursor-pointer hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  QUIZ
                </Link>
                <Link
                  activeClass="pontuacao"
                  href="pontuacao"
                  className="cursor-pointer hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  PONTUAÇÃO
                </Link>
              </div>
            </div>
            <div className="mr-10 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-600 focus:outline-none focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http:www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http:www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden id=mobile-menu">
              <div
                ref={ref}
                className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3"
              >
                <Link
                  href="/home"
                  activeClass="home"
                  to="home"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  HOME
                </Link>
                <Link
                  href="/quiz"
                  activeClass="quiz"
                  to="quiz"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  QUIZ
                </Link>
                <Link
                  href="/estatisticas"
                  activeClass="estatisticas"
                  to="estatisticas"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  ESTATÍSTICAS
                </Link>
                <Link
                  href="/sobre"
                  activeClass="sobre"
                  to="sobre"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  SOBRE
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </div>
    </div>
  );
}

export default NavBar;
