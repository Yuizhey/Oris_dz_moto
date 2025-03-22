import React from 'react'
import { FaChevronDown } from "react-icons/fa";
import { useNavigate, Link } from 'react-router-dom';
import styles from "./Navbar.module.css";

const Navbar = () => {
  
  const navigate = useNavigate();

  function backToHomePage(){
    navigate("/motohomepage")
  }

  return (
    <div className={styles.navbar}>
      <div className={styles["navbar-logo"]} onClick={backToHomePage}>
        <img src="/images/logo.png" alt="logo" className='navbar-logo-image' />
      </div>

      <nav className={styles["navbar-menu"]}>
        <ul className={styles["navbar-menu-list"]}>
          <li className={styles["navbar-menu-list-item"]}>
            <Link to='/motohomepage' className='item-hosting'>Hosting <FaChevronDown size="0.5em"/></Link>
          </li>
          <li className={styles["navbar-menu-list-item"]}>
            <Link to='/motohomepage' className='item-contactUs'>Contact Us</Link>
          </li>
          <li className={styles["navbar-menu-list-item"]}>
            <Link to='/motohomepage' className='item-account'>Account <FaChevronDown size="0.5em"/></Link>
          </li>
        </ul>
      </nav>

      <div className={styles["navbar-userImage"]}>
        <img src="/images/profileImage.png" alt="profileImage" className="profile-iamge" />
      </div>
    </div>
  )
}

export default Navbar