import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import DropdownMenuItem from "./DropdownMenuItem";

export default function Dropdown({ rootItem, items }) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex items-center justify-center gap-2">
          {rootItem}
          <img src="/vector/dropdown.svg" alt="dropdown icon" />
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
        <Menu.Items className="absolute mt-[2.1rem] w-48 bg-black opacity-70">
          <div className="py-4">
            {items.map((item) => (
              <DropdownMenuItem>{item}</DropdownMenuItem>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
