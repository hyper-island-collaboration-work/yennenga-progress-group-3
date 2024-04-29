import { Menu } from "@headlessui/react";
import { NavLink } from "react-router-dom";

export default function DropdownMenuItem({ children, link }) {
  return (
    <Menu.Item className="text-xs">
      <NavLink to={`/${link}`} className="block py-2">
        {children}
      </NavLink>
    </Menu.Item>
  );
}
