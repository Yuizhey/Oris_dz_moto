import React from 'react';
import { FaChevronDown } from "react-icons/fa";
import { useNavigate, Link } from 'react-router-dom';
import styles from "./Navbar.module.css";

const Navbar = ({ variant = 'default' }) => {
  const navigate = useNavigate();

  const renderRightSection = () => {
    if (variant === 'presentation') {
      return (
        <div className={styles.authButtons}>
          <button 
            className={styles.signInButton}
            onClick={() => navigate('/signin')}
          >
            Sign In
          </button>
          <button 
            className={styles.signUpButton}
            onClick={() => navigate('/signup')}
          >
            Sign Up
          </button>
        </div>
      );
    }
    
    return (
      <div className={styles["navbar-userImage"]}>
        <img src="/images/profileImage.png" alt="profile" className="profile-image" />
      </div>
    );
  };

  return (
    <div className={styles.navbar}>
      <div className={styles["navbar-logo"]} onClick={() => navigate('/motohomepage')}>
        <img src="/images/logo.png" alt="logo" className={styles.logoImage} />
      </div>

      <nav className={styles["navbar-menu"]}>
        <ul className={styles["navbar-menu-list"]}>
          <li className={styles["navbar-menu-list-item"]}>
            <Link to='/hosting' className={styles.menuItem}>
              Hosting <FaChevronDown size="0.5em"/>
            </Link>
          </li>
          <li className={styles["navbar-menu-list-item"]}>
            <Link to='/contact' className={styles.menuItem}>
              Contact Us
            </Link>
          </li>
          <li className={styles["navbar-menu-list-item"]}>
            <Link to='/account' className={styles.menuItem}>
              Account <FaChevronDown size="0.5em"/>
            </Link>
          </li>
        </ul>
      </nav>

      {renderRightSection()}
    </div>
  );
};

export default React.memo(Navbar);