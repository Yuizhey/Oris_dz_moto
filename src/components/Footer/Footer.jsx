import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="footer-driveeSection">
        <h2 className="driveeSection-title">Drivee</h2>
        <p className="driveeSection-text">Is Just A Drivee Ride Away. Take Control Of Your Journey Today</p>
        <div className={styles["driveeSection-icons"]}>
          <FaFacebookF color='#CFCECF'/>
          <FaTwitter color='#CFCECF'/>
          <FaInstagram color='#CFCECF'/>
          <FaLinkedinIn color='#CFCECF'/>
        </div>
      </div>
      <div className="footer-aboutCompanySection">
        <h4 className="aboutCompanySection-title">About Company</h4>
        <ul className="aboutCompanySection-list">
          <li className="aboutCompanySection-list-item">About Us</li>
          <li className="aboutCompanySection-list-item">Careers</li>
          <li className="aboutCompanySection-list-item">Help</li>
          <li className="aboutCompanySection-list-item">Contact Us</li>
          <li className="aboutCompanySection-list-item">Free Policy</li>
          <li className="aboutCompanySection-list-item">Term And Conditions</li>
        </ul>
      </div>
      <div className="footer-citySection">
        <h4 className="citySection-title">City</h4>
        <ul className="citySection-list">
          <li className="citySection-list-item">Dhaka</li>
          <li className="citySection-list-item">Chittagong</li>
          <li className="citySection-list-item">Sylhet</li>
          <li className="citySection-list-item">Kulna</li>
          <li className="citySection-list-item">Borishal</li>
          <li className="citySection-list-item">Rajshahi</li>
          <li className="citySection-list-item">Rongpul</li>
        </ul>
      </div>        
      <div className="footer-vehicleTypesSection">
        <h4 className="vehicleTypesSection-title">Vehicle Types</h4>
        <ul className="vehicleTypesSection-list">
          <li className="vehicleTypesSection-list-item">Car</li>
          <li className="vehicleTypesSection-list-item">Bike</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer