import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Footer.module.css';
import logo from '/public/images/JJLogo.svg'; 

const Footer = (props) => {
  return (
    <footer className={styles.footer} style={{ backgroundImage : props.isHome ? `url(/images/Footer_Homepage.svg)` : `url(/images/Footer.svg)` }}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h4>COMPANY</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/testimonials">Testimonials</a></li>
            {/* <li>News & Media</li> */}
            <li><a href="/supportus">Get Involved</a></li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>OFFERINGS</h4>
          <ul>
            <li><a href="/institutions">Institutions</a></li>
            <li><a href="/organisation">Organisation</a></li>
            <li><a href="/individuals">Individuals</a></li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>HELP & SUPPORT</h4>
          <ul>
            <li><a href="/contactus">Contact Us</a></li>
            <li><a href="/faq">FAQs</a></li>
            <li><a href="/terms">Terms & Service</a></li>
            <li><a href="/privacypolicy">Privacy Policy</a></li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>SOCIALS</h4>
          <ul>
            <li><a href="http://www.facebook.com" target='_blank'>Facebook</a></li>
            <li><a href="http://www.linkedin.com" target='_blank'>LinkedIn</a></li>
            <li><a href="http://www.instagram.com" target='_blank'>Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <Image src={logo} alt="Company Logo" width={100} height={100} />
        <p className='text-[#306054] font-bold'>© 2024 JALAN JOURNEY. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
};

export default Footer;
