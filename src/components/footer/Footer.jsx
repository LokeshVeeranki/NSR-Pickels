import React, { useState } from 'react';
import styles from './Footer.module.css';
import { FiInstagram, FiFacebook, FiTwitter, FiYoutube, FiArrowRight, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for joining our family! 🌿");
    setEmail('');
  };

  return (
    <footer className={styles.footer}>
      {/* Newsletter Section */}
      <div className={styles.newsletterSection}>
        <div className={styles.container}>
          <div className={styles.newsletterContent}>
            <h2 className={styles.newsTitle}>Join the Family Table</h2>
            <p className={styles.newsDesc}>
              Subscribe to receive grandma’s secret recipes, early access to new batches, and exclusive offers.
            </p>
            <form onSubmit={handleSubmit} className={styles.newsForm}>
              <input 
                type="email" 
                placeholder="Your email address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" aria-label="Subscribe">
                Subscribe <FiArrowRight />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className={styles.mainFooter}>
        <div className={styles.container}>
          <div className={styles.grid}>
            
            {/* Column 1: Brand */}
            <div className={styles.colBrand}>
              <div className={styles.logoContainer}>
                <span className={styles.logoText}>NSR<span className={styles.logoAccent}>Pickels</span></span>
              </div>
              <p className={styles.brandBio}>
                Bringing the authentic taste of Telugu tradition back to your dining table. 
                Hand-pounded spices, sun-dried ingredients, and love in every jar.
              </p>
              <div className={styles.socialIcons}>
                <a href="#" aria-label="Instagram"><FiInstagram /></a>
                <a href="#" aria-label="Facebook"><FiFacebook /></a>
                <a href="#" aria-label="Twitter"><FiTwitter /></a>
                <a href="#" aria-label="YouTube"><FiYoutube /></a>
              </div>
            </div>

            {/* Column 2: Shop */}
            <div className={styles.colLinks}>
              <h3 className={styles.colTitle}>Shop</h3>
              <ul>
                <li><a href="#">All Pickles</a></li>
                <li><a href="#">Podis & Powders</a></li>
                <li><a href="#">Traditional Sweets</a></li>
                <li><a href="#">Gift Hampers</a></li>
                <li><a href="#">New Arrivals</a></li>
              </ul>
            </div>

            {/* Column 3: Information */}
            <div className={styles.colLinks}>
              <h3 className={styles.colTitle}>Information</h3>
              <ul>
                <li><a href="#">Our Story</a></li>
                <li><a href="#">Grandma's Blog</a></li>
                <li><a href="#">Bulk Orders</a></li>
                <li><a href="#">Shipping Policy</a></li>
                <li><a href="#">Returns & Refunds</a></li>
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div className={styles.colContact}>
              <h3 className={styles.colTitle}>Contact Us</h3>
              <ul>
                <li>
                  <FiMapPin className={styles.icon} />
                  <span>Plot 45, Jubilee Hills,<br/>Hyderabad, Telangana 500033</span>
                </li>
                <li>
                  <FiPhone className={styles.icon} />
                  <a href="tel:+91 91214 40767">+91 91214 40767</a>
                </li>
                <li>
                  <FiMail className={styles.icon} />
                  <a href="mailto:nsrpickles@gmail">nsrpickles@gmail.com</a>
                </li>
              </ul>
            </div>
            
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className={styles.container}>
          <div className={styles.bottomContent}>
            <p>&copy; {new Date().getFullYear()} NSR Pickels Pvt Ltd. All rights reserved.</p>
            <p className={styles.madeWith}>Made with LOVE in India</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;