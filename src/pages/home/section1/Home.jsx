import React from 'react';
import styles from './Home.module.css';
import { FiArrowRight, FiPlayCircle } from 'react-icons/fi';

const Home1 = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        
        {/* Left Content: Text */}
        <div className={styles.textContent}>
          <span className={styles.badge}>Handmade with ❤️ in Andhra</span>
          
          <h1 className={styles.title}>
            Bring the Taste of <br />
            <span className={styles.highlight}>NSR's Pickels</span> <br />
            to Your Table.
          </h1>
          
          <p className={styles.description}>
            Authentic, sun-dried, and hand-pounded. We don't just make pickles; 
            we preserve memories. Experience the spicy, tangy heritage of Telugu 
            tradition in every jar.
          </p>

          <div className={styles.ctaGroup}>
            <a href="/shop" className={styles.primaryBtn}>
              Shop Pickles <FiArrowRight />
            </a>
            <button className={styles.secondaryBtn}>
              <FiPlayCircle className={styles.playIcon}/> Watch Our Process
            </button>
          </div>

          {/* Trust Indicators */}
          <div className={styles.trustBadges}>
            <div className={styles.trustItem}>
              <span className={styles.trustNumber}>100%</span>
              <span className={styles.trustLabel}>Natural</span>
            </div>
            <div className={styles.separator}></div>
            <div className={styles.trustItem}>
              <span className={styles.trustNumber}>0%</span>
              <span className={styles.trustLabel}>Preservatives</span>
            </div>
            <div className={styles.separator}></div>
            <div className={styles.trustItem}>
              <span className={styles.trustNumber}>50+</span>
              <span className={styles.trustLabel}>Years Recipe</span>
            </div>
          </div>
        </div>

        {/* Right Content: Visual/Image */}
        <div className={styles.imageContent}>
          {/* Main Hero Image Circle */}
          <div className={styles.imageWrapper}>
            <img 
              src="https://jandhyalafoods.in/wp-content/uploads/2021/12/Avakaya-mob-4.jpg" 
              alt="Authentic Andhra Avakaya Pickle" 
              className={styles.heroImage} 
            />
            
            {/* Floating Elements (Decorative) */}
            <div className={`${styles.floatCard} ${styles.card1}`}>
              <span>🌶️ Guntur Chillies</span>
            </div>
            <div className={`${styles.floatCard} ${styles.card2}`}>
              <span>🧄 Fresh Garlic</span>
            </div>
          </div>
          
          {/* Background decoration circle */}
          <div className={styles.bgCircle}></div>
        </div>
      </div>
    </section>
  );
};

export default Home1;