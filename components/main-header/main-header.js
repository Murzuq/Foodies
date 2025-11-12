"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import MainHeaderBackground from "./main-header-background";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import NavLink from "./nav-link";

export default function MainHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="A plate with food on it" priority />
          Foodies
        </Link>

        <button className={classes.hamburger} onClick={toggleMenu}>
          <span />
          <span />
          <span />
        </button>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>

        {menuOpen && (
          <div className={classes.mobileNavOverlay} onClick={toggleMenu}>
            <nav className={classes.mobileNav}>
              <ul>
                <li>
                  <NavLink href="/meals">Browse Meals</NavLink>
                </li>
                <li>
                  <NavLink href="/community">Foodies Community</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
