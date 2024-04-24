import { Menu } from "@headlessui/react";

export default function DropdownMenuItem({ children }) {
  return (
    <Menu.Item className="text-xs">
      <a href="#" className="block py-2">
        {children}
      </a>
    </Menu.Item>
  );
}
