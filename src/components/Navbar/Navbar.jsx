import React from 'react'
import { FaChevronDown } from "react-icons/fa";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className="navbar-logo">
        <img src="/images/logo.png" alt="logo" className='navbar-logo-image' />
      </div>

      <nav className="navbar-menu">
        <ul className={styles["navbar-menu-list"]}>
          <li className={styles["navbar-menu-list-item"]}>
            <a href='/' className='item-hosting'>Hosting <FaChevronDown /></a>
          </li>
          <li className={styles["navbar-menu-list-item"]}>
            <a href='/' className='item-contactUs'>Contact Us</a>
          </li>
          <li className={styles["navbar-menu-list-item"]}>
            <a href='/' className='item-account'>Account <FaChevronDown /></a>
          </li>
        </ul>
      </nav>

      <div className="navbar-userImage">
        <img src="/images/profileImage.png" alt="profileImage" className="profile-iamge" />
      </div>
    </div>
  )
}

export default Navbar