import {React, memo, useCallback} from 'react';
import { FaChevronDown } from "react-icons/fa";
import { useNavigate, Link } from 'react-router-dom';
import styles from "./Navbar.module.css";

const AuthButtons = ({ onSignIn, onSignUp }) => (
  <div className={styles.authButtons}>
    <button className={styles.signInButton} onClick={onSignIn}>Sign In</button>
    <button className={styles.signUpButton} onClick={onSignUp}>Sign Up</button>
  </div>
);

const UserProfile = () => (
  <div className={styles["navbar-userImage"]}>
    <img src="/images/profileImage.png" alt="profile" className="profile-image" />
  </div>
);

const Navbar = ({ variant = 'default' }) => {
  console.log('Navbar render', variant);

  const navigate = useNavigate();
  const handleSignIn = useCallback(() => navigate('/signin'), [navigate]);
  const handleSignUp = useCallback(() => navigate('/signup'), [navigate]);
  const handleLogoClick = useCallback(() => navigate('/presentationpage'), [navigate]);

  return (
    <div className={styles.navbar}>
      <div className={styles["navbar-logo"]} onClick={handleLogoClick}>
        <img src="/images/logo.png" alt="logo" className={styles.logoImage} />
      </div>

      <nav className={styles["navbar-menu"]}>
        <ul className={styles["navbar-menu-list"]}>
          <li className={styles["navbar-menu-list-item"]}>
            <Link to='/motohomepage' className={styles.menuItem}>
              Hosting <FaChevronDown size="0.5em"/>
            </Link>
          </li>
          <li className={styles["navbar-menu-list-item"]}>
            <Link to='/motohomepage' className={styles.menuItem}>
              Contact Us
            </Link>
          </li>
          <li className={styles["navbar-menu-list-item"]}>
            <Link to='/motohomepage' className={styles.menuItem}>
              Account <FaChevronDown size="0.5em"/>
            </Link>
          </li>
        </ul>
      </nav>

      {variant === 'presentation' 
        ? <AuthButtons onSignIn={handleSignIn} onSignUp={handleSignUp} />
        : <UserProfile />
      }
    </div>
  );
};

export default memo(Navbar);