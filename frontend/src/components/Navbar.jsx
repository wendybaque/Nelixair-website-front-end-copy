import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

// Import images
import mobile from "../assets/navbarmobile.webp";
// import desktop from "../assets/navbardesktop.webp";
import newlogo from "../assets/newlogo.png";

// Import MUI icons social medias
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Software", href: "/Software", current: false },
  { name: "Services", href: "/Services", current: false },
  { name: "Team", href: "/Team", current: false },
  { name: "About us", href: "/About", current: false },
  { name: "Contact", href: "/Contact", current: false },
  { name: "Signin", href: "/Signin", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-white sticky top-0 z-50">
      {({ open }) => (
        <>
          <div className="font-poppins px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-dark hover:bg-secondaryLight hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <CloseIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-12 w-auto lg:hidden"
                    src={mobile}
                    alt="Nelixair"
                  />
                  <img
                    className="hidden h-12 lg:block"
                    src={newlogo}
                    alt="Nelixair"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "text-primaryLight hover:bg-primaryLight bg-purple hover:text-white"
                            : "text-lg text-dark hover:bg-secondaryLight hover:text-white",
                          "px-3 py-2 rounded-md text-lg font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Fly dropdown */}
                <Menu as="div" className="relative ml-3 font-poppins">
                  <a href="/Signin" alt="Redirect to signin page">
                    <div>
                      <Menu.Button className="flex justify-center rounded-md p-2 text-dark hover:bg-primaryLight hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <p className="text-lg text-primaryDark hover:text-white font-bold">
                          Fly
                        </p>
                      </Menu.Button>
                    </div>
                  </a>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-72 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-dark ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="#about"
                            className={classNames(
                              active ? "bg-pink hover:text-white" : "",
                              "block px-4 py-2 font-medium text-dark"
                            )}
                          >
                            Who we are
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="#services"
                            className={classNames(
                              active ? "bg-pink hover:text-white" : "",
                              "block px-4 py-2 font-medium text-dark"
                            )}
                          >
                            Services
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="#feednews"
                            className={classNames(
                              active ? "bg-pink hover:text-white" : "",
                              "block px-4 py-2 font-medium text-dark"
                            )}
                          >
                            Feednews
                          </Link>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
          {/* Mobile panel */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-dark text-white"
                      : "text-dark hover:bg-secondaryLight hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
