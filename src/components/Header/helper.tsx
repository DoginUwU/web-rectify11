import { Link } from "react-router-dom";
import { NavLink } from "./styles";

interface IMenuItem {
  name: string;
  path: string;
}

const MENU_ITEMS = (): IMenuItem[] => [
  {
    name: "Home",
    path: "/",
  },
  // {
  //   name: "Changelog",
  //   path: "/changelog",
  // },
  {
    name: "Contact",
    path: "/contact",
  },
];

const NavLinks = (pathname: string) =>
  MENU_ITEMS().map(({ name, path }) => (
    <Link key={name} to={path}>
      <NavLink isActive={pathname === path}>{name}</NavLink>
    </Link>
  ));
export { NavLinks };
