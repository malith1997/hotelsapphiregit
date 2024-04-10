"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import logo1 from "../../../public/logo.png";
import Image from "next/image";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to close the menu when a link is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.navbarBrand}>
          <Link href="/">
            <Image src={logo1} alt="hero image" className={styles.logo} />
          </Link>
        </div>
        <div
          className={
            isOpen ? `${styles.navbarMenu} ${styles.active}` : styles.navbarMenu
          }
        >
          <ul>
            <li>
              <Link href="/" className={styles.link} onClick={closeMenu}>
                HOME
              </Link>
            </li>

            <li>
              <Link href="/Accommodation" className={styles.link} onClick={closeMenu}>
                ACCOMMODATION
              </Link>
            </li>

            <li>
              <Link href="/Dining" className={styles.link} onClick={closeMenu}>
                DINING
              </Link>
            </li>

            <li>
              <Link href="/Topaz" className={styles.link} onClick={closeMenu}>
                TOPAZ
              </Link>
            </li>

            <li>
              <Link href="/about" className={styles.link} onClick={closeMenu}>
                ABOUT
              </Link>
            </li>

            <li>
              <Link href="/Book" className={styles.link} onClick={closeMenu}>
                BOOK
              </Link>
            </li>

            <li>
              <Link href="/contact" className={styles.link} onClick={closeMenu}>
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.hamburgerMenu} onClick={toggleMenu}>
          <div className={`${styles.bar} ${isOpen ? styles.active : ""}`}></div>
          <div className={`${styles.bar} ${isOpen ? styles.active : ""}`}></div>
          <div className={`${styles.bar} ${isOpen ? styles.active : ""}`}></div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
