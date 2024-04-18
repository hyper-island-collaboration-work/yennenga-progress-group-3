import { Menu } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DropdownMenuItem({ children }) {
  return (
    <Menu.Item className="py-2 text-xs">
      {({ active }) => (
        <a
          href="#"
          className={classNames(
            active ? "bg-gray-100 text-gray-900" : "text-gray-700",
            "block px-4 py-2 text-sm",
          )}
        >
          {children}
        </a>
      )}
    </Menu.Item>
  );
}
