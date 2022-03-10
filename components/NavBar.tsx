import React from "react";
import { ActiveLink } from "./ActiveLink";
import styles from "./Navbar.module.css";

interface Menu {
  text: string;
  href: string;
}

const menuItems: Menu[] = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];

export const NavBar = () => {
  return (
    <nav className={styles["nav-container"]}>
      {menuItems.map(({ text, href }) => (
        <ActiveLink key={href} text={text} href={href} />
      ))}
    </nav>
  );
};
