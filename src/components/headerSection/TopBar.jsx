import { NavLink } from "react-router-dom";
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { GlobeAltIcon } from "@heroicons/react/solid";

export default function TopBar() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <div className="topbar-container sticky top-0 z-20 flex h-20 w-full items-center justify-between bg-umber px-10">
      <NavLink to="/Whistleblowing">
        <div className="black-btn inline-flex items-center justify-center gap-2">
          <button className="WhistleBlowing-btn">Whistle blowing</button>
          <img
            src="/vector/whistleIcon.svg"
            alt="whistle icon"
            className="h-[17.8px] w-6"
          />
        </div>
      </NavLink>
      <div className="flex h-full items-center gap-7">
        <NavLink to="/Donation">
          <button className="blue-btn">Donate</button>
        </NavLink>
        <Menu
          as="div"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="inline-block h-full"
        >
          <div className="h-full">
            <Menu.Button className="flex h-full items-center">
              <GlobeAltIcon
                className="h-6 w-6 text-light-gray hover:text-dark-blue "
                aria-hidden="true"
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            show={isDropdownVisible}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 top-20 z-10 rounded-bl-3xl rounded-br-3xl bg-umber px-10 pb-4">
              <div className="text-xs font-normal text-light-gray">
                <Menu.Item className="block py-1 hover:text-dark-blue">
                  <NavLink to="#">Swedish</NavLink>
                </Menu.Item>
                <Menu.Item className="block py-1 hover:text-dark-blue">
                  <NavLink to="#">French</NavLink>
                </Menu.Item>
                <Menu.Item className="block py-1 hover:text-dark-blue">
                  <NavLink to="#">English</NavLink>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}
