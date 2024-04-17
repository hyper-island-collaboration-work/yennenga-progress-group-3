import "./navbar.css";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
  return (
    <nav className="nabvar flex h-24 items-center justify-between bg-black bg-opacity-70 pl-6 pr-14">
      <div className="navbar-logo">
        <a href="#">
          <img src="/images/yp_logo_brown.svg" alt="" />
        </a>
      </div>
      <ul className="navbar-list flex items-center justify-center gap-12 font-['Arial'] text-lg font-normal text-zinc-100">
        <li className="list-item">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center gap-x-1.5">
                Projects
                <ChevronDownIcon
                  className="-mr-1 h-5 w-5  text-zinc-100"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="text-zinc-100 absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md  bg-black bg-opacity-70 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm",
                        )}
                      >
                        Education
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm",
                        )}
                      >
                        Health
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm",
                        )}
                      >
                        Infrastructure/entrepreneurship
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm",
                        )}
                      >
                        Management
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </li>
        <li className="list-item">
          <a className="list-link" href="#">
            Company/join us
          </a>
        </li>
        <li className="list-item">
          <a className="list-link" href="#">
            About us
          </a>
        </li>
        <li className="list-item">
          <a className="list-link" href="#">
            News
          </a>
        </li>
        <li className="list-item">
          <a className="list-link" href="#">
            Calendar
          </a>
        </li>
      </ul>
    </nav>
  );
}
