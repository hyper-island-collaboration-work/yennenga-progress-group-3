import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import DropdownMenuItem from "./DropdownMenuItem";
import { useState } from "react";

export default function Dropdown({ rootItem, items }) {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <Menu
      as="div"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative inline-block h-full text-left"
    >
      <div className="h-full">
        <Menu.Button className=" inline-flex h-full items-center justify-center gap-2">
          {rootItem}
          <img src="/vector/dropdown.svg" alt="dropdown icon" />
        </Menu.Button>
      </div>

      <Transition
        show={isDropdownVisible}
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute z-10 w-48 bg-black rounded-bl-3xl rounded-br-3xl px-4 pt-2 pb-4">
          <div>
            {items.map((item) => (
              <DropdownMenuItem>{item}</DropdownMenuItem>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
